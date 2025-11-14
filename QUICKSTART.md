# Quick Start Guide

## 🚀 Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Add Custom Fonts (Optional)**
   - Place `Badang-Italic.woff2` and `Badang-Italic.woff` in `/public/fonts/`
   - Place `Brush-Up-Too.woff2` and `Brush-Up-Too.woff` in `/public/fonts/`
   - Work Sans is loaded from Google Fonts automatically

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Contact Information

- **WhatsApp Number**: Update in `app/components/shared/Footer.tsx` and `app/components/ContactForm.tsx`
- **Email**: Update in `app/components/shared/Footer.tsx`
- **Phone**: Update in `app/components/shared/Footer.tsx`

### Replace Placeholder Images

- Replace `https://placehold.co/...` URLs with your actual images
- Or add images to `/public/images/` and use `/images/your-image.jpg`

### Connect Contact Form

- The contact form currently shows a success message
- Connect to your backend/email service in `app/components/ContactForm.tsx`
- Consider using services like:
  - Formspree
  - EmailJS
  - Your own API endpoint

## 🎨 Design Customization

### Colors

Edit `tailwind.config.ts` to change:

- `primary-red`: `#EC5B67`
- `primary-gold`: `#EFC856`
- `text`: `#1A1919`
- `white`: `#FFFEFE`

### Fonts

- Custom fonts are loaded from `/public/fonts/`
- Work Sans is loaded from Google Fonts
- Update font families in `tailwind.config.ts` if needed

## 📦 Build for Production

```bash
npm run build
npm start
```

## ✅ Checklist Before Launch

- [ ] Add custom fonts to `/public/fonts/`
- [ ] Replace all placeholder images
- [ ] Update contact information (phone, email, WhatsApp)
- [ ] Connect contact form to backend/email service
- [ ] Test all links and navigation
- [ ] Test mobile responsiveness
- [ ] Update social proof logos
- [ ] Review and update all content text
- [ ] Test form submission
- [ ] Verify FAQ answers are accurate
