# Kosi Naturals Website

A modern, responsive website for Kosi Naturals - a food brand rooted in the Kosi region of Bihar, working closely with farmers to source makhana and other natural ingredients.

## Features

- 🎨 Modern, minimal design with creative elements
- 📱 Fully responsive across all devices
- ✨ Smooth animations using Framer Motion
- 🎯 SEO optimized
- 📧 Contact form with Gmail integration (sends emails to both user and business)
- 📬 Newsletter subscription (sends confirmation emails to both user and business)
- 💬 WhatsApp chat button
- 📝 Blog management system
- 🌐 All pages: Home, About, Products, Blog, Contact, FAQ, Privacy, Terms

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Nodemailer** - Email handling with Gmail
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Gmail App Password (for contact form and newsletter):
   - Go to your Google Account settings
   - Enable 2-Step Verification if not already enabled
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Generate a new app password for "Mail" and "Other (Custom name)" - name it "Kosi Naturals"
   - Copy the 16-character app password
   - Create a `.env.local` file in the root directory:
     ```env
     GMAIL_USER=your-email@gmail.com
     GMAIL_APP_PASSWORD=your-16-character-app-password
     BUSINESS_EMAIL=your-business-email@gmail.com
     NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
     ```
   - Note: `BUSINESS_EMAIL` is where you'll receive contact form submissions and newsletter notifications. If not set, it will use `GMAIL_USER`.

3. Update WhatsApp number:
   - Edit `components/WhatsAppButton.tsx` and replace the phone number:
     ```typescript
     const phoneNumber = '919876543210'; // Your WhatsApp number
     ```

4. Update social media links:
   - Edit `components/Footer.tsx` and update Instagram and LinkedIn URLs

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kosi-naturals/
├── app/
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── faq/
│   ├── products/
│   ├── privacy/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── app/
│   ├── api/
│   │   ├── contact/
│   │   └── newsletter/
│   └── ...
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── NewsletterSubscription.tsx
│   └── WhatsAppButton.tsx
├── public/
└── ...
```

## Color Palette

The website uses a warm, earthy color palette:
- **Primary**: Orange tones (#f17a16) - representing warmth and natural food
- **Earth**: Brown/beige tones - representing the land and agriculture
- **Green**: Natural green tones - representing freshness and nature

## Customization

### Update Content
- Edit page components in `app/` directory
- Update blog posts in `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`
- Modify product information in `app/products/page.tsx`

### Update Images
- Replace Unsplash image URLs with your own images
- Or add images to `public/` folder and reference them

### Update Contact Information
- Edit contact details in `app/contact/page.tsx`
- Update footer information in `components/Footer.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The site can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**


© 2025 Kosi Naturals. All rights reserved.
Made by MANYA SHUKLA.
