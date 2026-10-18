
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
