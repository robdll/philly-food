# Philly Food - Food Truck Catering Website

A modern, neobrutalist Next.js website for Philly Food, a food truck catering service.

## 🚀 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Resend** (email service)
- **Turbopack** (for faster development)

## 📁 Project Structure

```
app/
  api/
    contact/
      route.ts          # Contact form API endpoint
  components/
    shared/
      Navbar/
        Navbar.tsx
        Navbar.constants.tsx
      Footer.tsx
      Button.tsx
      SlideIn.tsx
    Hero.tsx
    SocialProof/
      SocialProof.tsx
      SocialProof.constants.tsx
    UseCases/
      UseCases.tsx
      UseCases.constants.tsx
    PainPoints.tsx
    WhyUs/
      WhyUs.tsx
      WhyUs.constants.tsx
    VehicleFleet/
      VehicleFleet.tsx
      VehicleFleet.constants.tsx
    HowItWorks/
      HowItWorks.tsx
      HowItWorks.constants.tsx
    Pricing.tsx
    FAQ/
      FAQ.tsx
      FAQ.constants.tsx
    ContactForm.tsx
  layout.tsx
  page.tsx
  globals.css
public/
  fonts/
  images/
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

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

Get your API key from [Resend](https://resend.com). The contact form uses Resend to send emails.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Notes

- Contact form is connected to Resend API for email delivery. Make sure to set up your `RESEND_API_KEY` environment variable.
- The contact form sends emails to `info@lillos.net` (configured in `/app/api/contact/route.ts`).
- WhatsApp link is configured in the ContactForm component.
- All content is in Italian as per requirements.

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with mobile menu
- ✅ Smooth scrolling
- ✅ Interactive FAQ accordion
- ✅ Contact form with validation and email integration (Resend)
- ✅ Carousel for use cases (mobile)
- ✅ Vehicle fleet showcase
- ✅ Neobrutalist design elements
- ✅ Server Components by default
- ✅ Client Components only where needed
- ✅ Framer Motion animations

## 📦 Build

```bash
npm run build
npm start
```
