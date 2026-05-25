# Criptana 360 - Production Launch & Marketing Guide

This comprehensive guide details the exact step-by-step process to set up your domain, configure live Google Analytics (GA4) lead tracking, launch targeted Google Ads, and analyze click conversions to monetize the portal.

---

## Phase 1: Domain Mapping (GoDaddy to GitHub Pages)
Since the website is hosted for free on GitHub Pages, mapping a custom domain purchased on GoDaddy is **completely free** (zero hosting fees forever).

### Step 1: Configure DNS on GoDaddy
1. Log in to your **GoDaddy Control Panel** and go to **My Products**.
2. Locate your domain (e.g., `criptana360.com`) and click **DNS** (or **Manage DNS**).
3. In the **DNS Records** table, add the following four **A Records** to point your root domain to GitHub's server IPs:
   * **Type:** `A` | **Name:** `@` | **Value:** `185.199.108.153` | **TTL:** `1 Hour`
   * **Type:** `A` | **Name:** `@` | **Value:** `185.199.109.153` | **TTL:** `1 Hour`
   * **Type:** `A` | **Name:** `@` | **Value:** `185.199.110.153` | **TTL:** `1 Hour`
   * **Type:** `A` | **Name:** `@` | **Value:** `185.199.111.153` | **TTL:** `1 Hour`
4. Add a **CNAME Record** to point your subdomain (`www`) to your GitHub Pages domain:
   * **Type:** `CNAME` | **Name:** `www` | **Value:** `llsandrozll.github.io.` | **TTL:** `1 Hour`
   *(Make sure to add the trailing dot after `github.io` if GoDaddy requests it).*
5. Delete any pre-existing default `A` records or forwarding rules pointing `@` to GoDaddy placeholders.

### Step 2: Configure Custom Domain on GitHub
1. Go to your GitHub repository: [github.com/llSandroZll/criptana360](https://github.com/llSandroZll/criptana360).
2. Click **Settings** (gear icon) in the top tabs.
3. In the left sidebar, click **Pages**.
4. Scroll down to the **Custom domain** section.
5. Enter your domain (e.g., `www.criptana360.com` or `criptana360.com`) and click **Save**.
6. Wait 5-10 minutes, then check the box **Enforce HTTPS** (this generates a free, automatic SSL security certificate).

---

## Phase 2: Google Analytics 4 (GA4) Integration & Tracking
We have already hardcoded a custom event-tracking engine in the site. You just need to create your GA4 Property and link your ID.

### Step 1: Create a GA4 Account & Stream
1. Visit [analytics.google.com](https://analytics.google.com/) and sign in.
2. Click **Admin** (gear icon, bottom left) > click **Create Property**.
3. Name it `Criptana 360` and set your reporting time zone and currency.
4. For data source, select **Web**.
5. Input your website URL (e.g., `www.criptana360.com`) and Stream Name (e.g., `Criptana 360 Live`).
6. Copy the **Measurement ID** (it starts with `G-` and looks like `G-ABCD1234EF`).

### Step 2: Link your ID to the Website Code
1. Open your code editor and access `index.html`.
2. Locate the GA4 block near the top (lines 11-19):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
3. Replace **both** instances of `G-XXXXXXXXXX` with your actual **Measurement ID**.
4. Commit and push the change to GitHub:
   ```powershell
   git add index.html
   git commit -m "Configure production GA4 Measurement ID"
   git push origin main
   ```

### Step 3: Verifying & Using Your Click/Conversion Analytics
Your site automatically tracks these high-value interactions:
* `click_call_button`: Triggered when a tourist clicks to call a restaurant or winery directly.
* `click_map_button`: Triggered when a tourist starts Google Maps navigation to a business.
* `click_ad_banner`: Triggered when a user clicks the "Tu Publicidad Aquí" banners.
* `view_business_profile`: Triggered when a card is clicked to read the business description.

#### How to see the metrics:
1. **Real-Time Testing:** In GA4, click **Real-Time** report. Open your phone, click a call button on the live site, and watch the `click_call_button` event appear instantly in your dashboard!
2. **Set up Conversions:** In GA4 Admin, go to **Events** and toggle **"Mark as Conversion"** for `click_call_button` and `click_map_button`.
3. **B2B Monetization Reports:** When approaching a business (e.g. *Restaurante La Pulpe*), export a PDF report showing:
   > *"In the last 30 days, we directed 120 tourists to your Google Maps location and sent 45 phone leads. We can keep your premium listing active for €X/month."*

---

## Phase 3: Launching Google Ads & Driving Traffic
To get tourists searching on Google to land on your directory, set up a targeted search campaign.

### Step 1: Create Google Ads Campaign
1. Go to [ads.google.com](https://ads.google.com/) and create an account.
2. Link your Google Ads to GA4: Go to **Tools and Settings** > **Linked Accounts** > **Google Analytics 4** and import your conversions.
3. Start a new campaign: Select **Website Traffic** as your campaign objective, and choose **Search** as your campaign type.

### Step 2: Laser-Targeting Settings
* **Location Targeting:** Set to **Spain** (exclude Campo de Criptana itself so you don't pay for local residents searching, but rather tourists traveling from Madrid, Valencia, Toledo, etc.). Also target **United Kingdom** & **Germany** (focusing on high-value international travelers).
* **Languages:** Select **Spanish** and **English**.
* **Bidding Strategy:** Select **Maximize Conversions** and optimize for the imported `click_call_button` or `click_map_button` actions. This trains Google's AI to show ads *only* to travelers who are highly likely to take action!

### Step 3: Selected Keyword Strategy
Use a mix of high-volume Spanish and English keywords:

| Keyword Group | Spanish Search Terms | English Search Terms |
| :--- | :--- | :--- |
| **Sights & Molinos** | `que ver en campo de criptana`, `molinos campo de criptana`, `turismo campo de criptana` | `don quixote windmills spain`, `windmills campo de criptana`, `things to do in campo de criptana` |
| **Restaurants** | `que comer en campo de criptana`, `donde cenar en campo de criptana`, `restaurantes campo de criptana` | `where to eat campo de criptana`, `best restaurants campo de criptana` |
| **Wineries** | `bodegas en campo de criptana`, `catas de vino la mancha`, `enoturismo la mancha` | `wineries campo de criptana`, `wine tasting la mancha`, `best wineries in spain` |

### Step 4: Write Compelling Ads
Link different keyword groups to specific anchor sections:
* Send food searches to `https://www.criptana360.com/#guia` (so they see local gastronomy directly).
* **Headline Examples:**
  * *"Guía Oficial Campo de Criptana - Directorio Local"*
  * *"Dónde Comer e Ir en Criptana - Teléfonos & Horarios"*
  * *"Visita los Molinos del Quijote - Planifica tu Ruta"*
* **Descriptions:**
  * *"La guía oficial de turismo más completa. Consulta horarios de bodegas, monumentos históricos y reservas directas de restaurantes en Campo de Criptana."*
