const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ffmpeg = 'C:\\Users\\zeval\\AppData\\Local\\Microsoft\\WinGet\\Links\\ffmpeg.exe';
const outputDir = path.resolve('assets/social/output');
const rawDir = path.resolve('assets/social/raw');
const webpDir = path.resolve('assets/social/output/webp');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
if (!fs.existsSync(webpDir)) fs.mkdirSync(webpDir, { recursive: true });

console.log('=== Step 1: Converting raw photos to WebP format ===');
const photos = [
  '01_sunset_wine_picnic.jpg',
  '02_fuente_cano_courtyard.jpg',
  '03_ruta_quijote_stone.jpg',
  '04_rural_mural_sunbeam.jpg',
  '05_windmills_night_lights.jpg'
];

photos.forEach(photo => {
  const baseName = path.parse(photo).name;
  const inPath = path.join(rawDir, photo);
  const outPath = path.join(webpDir, `${baseName}.webp`);
  const cmd = `"${ffmpeg}" -y -i "${inPath}" -c:v libwebp -quality 85 "${outPath}"`;
  execSync(cmd, { stdio: 'ignore' });
  console.log(`  -> Generated WebP: ${baseName}.webp`);
});

console.log('\n=== Step 2: Generating 5 vertical 9:16 video clips with Ken Burns motion ===');

const clipsConfig = [
  {
    name: 'clip_01_hook_mural.mp4',
    input: '04_rural_mural_sunbeam.jpg',
    duration: 4.5,
    frames: 135,
    // Slow zoom in on the mural and sunbeam
    filter: "scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='min(zoom+0.0014,1.20)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=135:s=1080x1920:fps=30"
  },
  {
    name: 'clip_02_quijote_marker.mp4',
    input: '03_ruta_quijote_stone.jpg',
    duration: 3.5,
    frames: 105,
    // Push in on the green marker
    filter: "scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='min(zoom+0.0018,1.25)':x='iw/2-(iw/zoom/2)':y='ih*0.55-(ih/zoom*0.55)':d=105:s=1080x1920:fps=30"
  },
  {
    name: 'clip_03_fuente_cano.mp4',
    input: '02_fuente_cano_courtyard.jpg',
    duration: 4.5,
    frames: 135,
    // Pedestal tilt revealing the windmill
    filter: "scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='min(zoom+0.0010,1.15)':x='iw/2-(iw/zoom/2)':y='ih*0.65-(ih*0.35)*(on/135)':d=135:s=1080x1920:fps=30"
  },
  {
    name: 'clip_04_sunset_picnic.mp4',
    input: '01_sunset_wine_picnic.jpg',
    duration: 6.5,
    frames: 195,
    // Slow drift on wine and setting sun
    filter: "scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='min(zoom+0.0011,1.22)':x='iw*0.48-(iw/zoom*0.48)':y='ih*0.45-(ih/zoom*0.45)':d=195:s=1080x1920:fps=30"
  },
  {
    name: 'clip_05_night_lights.mp4',
    input: '05_windmills_night_lights.jpg',
    duration: 7.0,
    frames: 210,
    // Horizontal slow pan across the illuminated windmills
    filter: "scale=-1:3840,zoompan=z=1.1:x='(iw-iw/zoom)*(on/210)':y='ih/2-(ih/zoom/2)':d=210:s=1080x1920:fps=30"
  }
];

clipsConfig.forEach(clip => {
  const inPath = path.join(rawDir, clip.input);
  const outPath = path.join(outputDir, clip.name);
  console.log(`  -> Rendering ${clip.name} (${clip.duration}s)...`);
  const cmd = `"${ffmpeg}" -y -loop 1 -i "${inPath}" -vf "${clip.filter}" -t ${clip.duration} -c:v libx264 -pix_fmt yuv420p "${outPath}"`;
  execSync(cmd, { stdio: 'ignore' });
});

console.log('\n=== Step 3: Concatenating clips into pure B-Roll Master ===');
const concatTxt = path.join(outputDir, 'concat.txt');
const lines = clipsConfig.map(c => `file '${path.join(outputDir, c.name).replace(/\\/g, '/')}'`).join('\n');
fs.writeFileSync(concatTxt, lines);

const brollMaster = path.join(outputDir, 'criptana_atardecer_broll_master.mp4');
const concatCmd = `"${ffmpeg}" -y -f concat -safe 0 -i "${concatTxt}" -c copy "${brollMaster}"`;
execSync(concatCmd, { stdio: 'ignore' });
console.log(`  -> Generated B-Roll Master: ${brollMaster}`);

console.log('\n=== Step 4: Generating full Spanish Voiceover audio ===');
const voiceScript = `
Add-Type -AssemblyName System.Speech;
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer;
$synth.SelectVoice("Microsoft Helena Desktop");
$synth.Rate = 0;

$voice1 = "assets/social/output/v1.wav";
$voice2 = "assets/social/output/v2.wav";
$voice3 = "assets/social/output/v3.wav";
$voice4 = "assets/social/output/v4.wav";
$voice5 = "assets/social/output/v5.wav";

$synth.SetOutputToWaveFile($voice1);
$synth.Speak("El noventa por ciento de la gente viene a Campo de Criptana a mediodía, pasa calor y se va.");

$synth.SetOutputToWaveFile($voice2);
$synth.Speak("Ven a última hora.");

$synth.SetOutputToWaveFile($voice3);
$synth.Speak("Camina por las faldas de la sierra cuando los autobuses ya se han marchado.");

$synth.SetOutputToWaveFile($voice4);
$synth.Speak("Aparca en el cerro, saca un vino frío de la tierra y quédate viendo caer el sol sobre la llanura.");

$synth.SetOutputToWaveFile($voice5);
$synth.Speak("Cuando encienden los focos sobre la cal blanca, el pueblo parece otro. Tienes la guía completa y alojamientos en el enlace del perfil.");

$synth.Dispose();
`;

const psScriptPath = path.join(outputDir, 'gen_voice.ps1');
fs.writeFileSync(psScriptPath, voiceScript);
execSync(`powershell -ExecutionPolicy Bypass -File "${psScriptPath}"`, { stdio: 'ignore' });
console.log('  -> Individual voice phrases synthesized');

// Now assemble audio with precise timing
const voiceMasterWav = path.join(outputDir, 'voice_master.wav');
const v1 = path.join(outputDir, 'v1.wav').replace(/\\/g, '/');
const v2 = path.join(outputDir, 'v2.wav').replace(/\\/g, '/');
const v3 = path.join(outputDir, 'v3.wav').replace(/\\/g, '/');
const v4 = path.join(outputDir, 'v4.wav').replace(/\\/g, '/');
const v5 = path.join(outputDir, 'v5.wav').replace(/\\/g, '/');
const vOut = voiceMasterWav.replace(/\\/g, '/');

const filterComplex = `[0:a]adelay=300|300[a0];[1:a]adelay=4600|4600[a1];[2:a]adelay=8100|8100[a2];[3:a]adelay=12600|12600[a3];[4:a]adelay=19100|19100[a4];[a0][a1][a2][a3][a4]amix=inputs=5:dropout_transition=0,volume=1.8[outa]`;
const audioCmd = `"${ffmpeg}" -y -i "${v1}" -i "${v2}" -i "${v3}" -i "${v4}" -i "${v5}" -filter_complex "${filterComplex}" -map "[outa]" -t 26 "${vOut}"`;
execSync(audioCmd, { stdio: 'inherit' });
console.log('  -> Master voiceover timeline aligned');

console.log('\n=== Step 5: Rendering Final Social Master Video with Captions & Voiceover ===');
const finalMaster = path.join(outputDir, 'criptana_atardecer_master_ready.mp4');

// High-contrast clean editorial text overlay matching TikTok viral style
const textFilters = [
  "drawtext=font='Arial':text='EL MAYOR ERROR AL VISITAR CRIPTANA':fontcolor=white:fontsize=46:box=1:boxcolor=black@0.65:boxborderw=18:x=(w-text_w)/2:y=h*0.74:enable='between(t,0.3,4.3)'",
  "drawtext=font='Arial':text='VEN A ULTIMA HORA':fontcolor=white:fontsize=52:box=1:boxcolor=black@0.65:boxborderw=18:x=(w-text_w)/2:y=h*0.74:enable='between(t,4.6,7.8)'",
  "drawtext=font='Arial':text='SIN PRISAS NI AUTOBUSES':fontcolor=white:fontsize=48:box=1:boxcolor=black@0.65:boxborderw=18:x=(w-text_w)/2:y=h*0.74:enable='between(t,8.1,12.3)'",
  "drawtext=font='Arial':text='UN VINO FRIO AL ATARDECER':fontcolor=white:fontsize=46:box=1:boxcolor=black@0.65:boxborderw=18:x=(w-text_w)/2:y=h*0.74:enable='between(t,12.6,18.8)'",
  "drawtext=font='Arial':text='CUANDO ENCIENDEN LOS FOCOS...':fontcolor=white:fontsize=46:box=1:boxcolor=black@0.65:boxborderw=18:x=(w-text_w)/2:y=h*0.74:enable='between(t,19.1,22.4)'",
  "drawtext=font='Arial':text='GUIA Y ALOJAMIENTOS - LINK EN BIO':fontcolor=white:fontsize=42:box=1:boxcolor=black@0.75:boxborderw=18:x=(w-text_w)/2:y=h*0.72:enable='between(t,22.5,26.0)'",
  "drawtext=font='Arial':text='www.criptana360.com':fontcolor='#FFD700':fontsize=36:x=(w-text_w)/2:y=h*0.78:enable='between(t,22.5,26.0)'"
].join(',');

const finalCmd = `"${ffmpeg}" -y -i "${brollMaster.replace(/\\/g, '/')}" -i "${vOut}" -vf "${textFilters}" -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 192k -shortest "${finalMaster.replace(/\\/g, '/')}"`;
execSync(finalCmd, { stdio: 'inherit' });
console.log(`  -> Generated Ready-to-Post Master Video: ${finalMaster}`);

console.log('\n=== ALL ASSETS RENDERED SUCCESSFULLY ===');

