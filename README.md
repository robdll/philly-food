# Philly Food - Food Truck Catering Website

A modern, neobrutalist Next.js website for Philly Food, a food truck catering service.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Turbopack** (for faster development)

## 📁 Project Structure

```
app/
  components/
    shared/
      Navbar.tsx
      Footer.tsx
    Hero.tsx
    SocialProof.tsx
    UseCases.tsx
    PainPoints.tsx
    WhyUs.tsx
    HowItWorks.tsx
    Pricing.tsx
    FAQ.tsx
    ContactForm.tsx
  layout.tsx
  page.tsx
  globals.css
public/
  fonts/
```

## 🎨 Design System

### Colors
- Primary Red: `#EC5B67`
- Primary Gold: `#EFC856`
- Text: `#1A1919`
- White: `#FFFEFE`

### Fonts
- **Badang Italic**: Navigation links and buttons
- **Brush Up Too**: Section titles and big headings
- **Work Sans**: Paragraphs and body text

### Style
- Neobrutalist design with thick strokes
- High contrast
- Organic drippy shapes
- Bold chunky buttons
- Rounded corners (12-20px)
- Shadows with neobrutalist style

## 🛠️ Setup

1. Install dependencies:
```bash
npm install
```

2. Add fonts to `/public/fonts/`:
   - Badang-Italic.woff2 / .woff
   - Brush-Up-Too.woff2 / .woff
   - WorkSans-Regular.woff2 / .woff
   - WorkSans-Medium.woff2 / .woff
   - WorkSans-Bold.woff2 / .woff

   If fonts are not available, the site will fall back to system fonts. You can also use Google Fonts by updating `globals.css`.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Notes

- Placeholder images are used from `placehold.co`. Replace with real images when available.
- Contact form is currently a client-side demo. Connect to your backend/email service.
- WhatsApp link uses a placeholder number. Update with your actual number.
- All content is in Italian as per requirements.

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with mobile menu
- ✅ Smooth scrolling
- ✅ Interactive FAQ accordion
- ✅ Contact form with validation
- ✅ Carousel for use cases (mobile)
- ✅ Neobrutalist design elements
- ✅ Server Components by default
- ✅ Client Components only where needed

## 📦 Build

```bash
npm run build
npm start
```

