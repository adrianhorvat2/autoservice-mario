# AutoService Mario d.o.o. — Službena web stranica

Moderna, brza, responzivna jednostrana (one-page) web stranica za automehaničarsku radnju **AutoService Mario d.o.o.** (Vinkovci). Izrađena uz Next.js App Router i Tailwind CSS, optimizirana za mobilne posjetitelje i konfigurirana za **čisti statički export** (`out/`).

---

## 🛠️ Tehnologije i značajke
- **Next.js (App Router)** sa statičkim exportom (`output: 'export'`)
- **Tailwind CSS v4** s prilagođenom tamnom automobilskom temom i naglascima u trkaćoj crvenoj boji
- **Lucide React** za brze, čiste vektorske SVG ikone
- **100% responzivan dizajn** (prilagođeno za mobitele, tablete i desktop)
- **Fiksni gumb za poziv** u donjem desnom kutu za brzo biranje broja
- **Interaktivna Google Maps karta** (Školska 72, Vinkovci)
- **SEO optimizacija**: kompletni Open Graph i Twitter meta tagovi, prilagođeni favicon

---

## 🚀 Lokalno pokretanje (Development)

1. **Instalacija ovisnosti**:
   ```bash
   npm install
   ```

2. **Pokretanje razvojnog poslužitelja**:
   ```bash
   npm run dev
   ```
   Otvorite [http://localhost:3000](http://localhost:3000) u vašem pregledniku.

---

## 📦 Statički build (Static Export)

Za generiranje statičkih HTML, CSS i JS datoteka u `out/` direktorij pokrenite:

```bash
npm run build
```

Nakon završetka, sav sadržaj stranice spreman je u mapi `out/` za bilo koji statički hosting poslužitelj (Vercel, Cloudflare Pages, GitHub Pages, Netlify, cPanel, Apache, Nginx).

---

## 🌐 Upute za deploy

### 1. Vercel
1. Povežite svoj GitHub repozitorij na [Vercel](https://vercel.com).
2. Vercel će automatski prepoznati Next.js projekt.
3. Kliknite **Deploy** (nije potrebna nikakva dodatna konfiguracija).

### 2. Cloudflare Pages
1. U Cloudflare Pages dashboardu kliknite **Create application** → **Pages** → **Connect to Git**.
2. Odaberite repozitorij.
3. Postavke builda:
   - **Framework preset**: `Next.js (Static Export)` ili `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Kliknite **Save and Deploy**.

---

## ✏️ Gdje promijeniti podatke kasnije?

- **Broj telefona i adresa**:
  - `components/Header.tsx` (zaglavlje i mobilni meni)
  - `components/Hero.tsx` (glavni CTA poziv)
  - `components/Contact.tsx` (kontakt kartice i Google Maps)
  - `components/Footer.tsx` (podnožje stranice)
  - `components/FloatingCallButton.tsx` (fiksni gumb)
- **E-mail adresa**:
  - `components/Contact.tsx` i `components/Footer.tsx`
- **Facebook i društvene mreže**:
  - `components/Footer.tsx` (poveznica na Facebook profil)
- **Logotip i slike**:
  - `public/images/logo.png` (glavni logotip servisa)
  - `public/favicon.svg` (ikona stranice u pregledniku)
