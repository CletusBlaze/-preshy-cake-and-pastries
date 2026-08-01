# Preshy Cakes & Pastries - Website

A premium, fully responsive website for **Preshy Cakes & Pastries** — a luxury baking and event catering business based in Benin City, Nigeria.

---

## 🌐 Live Features

### Pages
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero video slider, services, portfolio, testimonials, stats, FAQ |
| About | `pages/about.html` | Brand story, experience, stats |
| Services | `pages/services.html` | 8 service categories with images |
| Menu | `pages/menu.html` | Pricing for cakes, pastries, catering, drinks, food, hampers |
| Portfolio | `pages/portfolio.html` | Full image gallery with lightbox |
| Blog | `pages/blog.html` | Baking tips and event planning articles |
| Contact | `pages/contact.html` | Contact form (Formspree), info, Google Map |
| 404 | `404.html` | Custom branded "Page Not Found" page |

---

## ✨ Key Features

- **Logo Image** — Transparent PNG logo used across all pages (preloader, header, footer)
- **Deep Black Preloader** — Loading screen with animated logo on all pages
- **Hero Video Slider** — 6 slides (4 video + 2 image) with auto-advance, dots, and arrow controls
- **Video Showcase Section** — 4-card grid with play/pause on click
- **Video Background CTA** — Full-screen video behind the "Book Now" call-to-action
- **Before/After Slider** — Draggable comparison showing baking process vs final result
- **Portfolio Grid** — Masonry-style gallery with hover overlays, glow effect, and lightbox
- **Testimonials Slider** — Auto-rotating client reviews with float animation
- **Animated Stats Counter** — Numbers count up when scrolled into view
- **FAQ Accordion** — Expandable questions with smooth animation and glow
- **Dark Mode Toggle** — Full site dark theme with localStorage persistence
- **Cookie Consent Banner** — GDPR-friendly cookie notice
- **Back to Top Button** — Appears on scroll with bounce animation
- **WhatsApp Float Button** — Fixed chat button with pulse and wobble animation
- **Smooth Page Transitions** — Fade between pages
- **AOS Scroll Animations** — Elements animate in on scroll
- **Magnetic Buttons** — Subtle hover follow effect
- **Tilt Effect on Cards** — 3D perspective on service cards
- **Mobile-First Responsive** — Works on all devices (480px to 4K)
- **Contact Form with Email** — Formspree integration sends messages to Gmail
- **Scroll Progress Bar** — Gold gradient bar at top showing scroll position
- **Cursor Trail** — Gold circle follows mouse on desktop
- **Floating Particles** — Gold sparkles in hero section
- **Button Ripple Effect** — Click ripple on all buttons
- **Service Card Shine** — Light sweep effect on hover
- **Gold Shimmer Text** — Animated shimmer on italic accent text
- **Word Stagger Animation** — Page header titles animate word by word
- **Footer Reveal** — Footer fades in when scrolled into view
- **Header Shrink** — Logo shrinks on scroll
- **Menu Background** — Fixed food image background on menu page
- **Surprise Birthday Parties** — Portfolio section with event decoration photos

---

## 📁 Project Structure

```
PRESHY CAKES AND PASTRIES/
├── index.html                  # Homepage
├── 404.html                    # Custom 404 page
├── netlify.toml                # Netlify config (headers, redirects, caching)
├── _redirects                  # Netlify 404 fallback
├── transparent logo.png        # Main logo (used everywhere)
├── logo.svg                    # Original SVG logo
├── about me.jpg                # About section photo
├── menu.jfif                   # Menu page background
├── css/
│   └── style.css               # All styles (responsive + animations)
├── js/
│   └── main.js                 # All JavaScript functionality
├── pages/
│   ├── about.html
│   ├── blog.html
│   ├── contact.html
│   ├── menu.html
│   ├── portfolio.html
│   └── services.html
├── images/
│   ├── branding/               # Baker/brand photos
│   ├── cakes/
│   │   ├── birthday/
│   │   ├── custom/
│   │   └── wedding/
│   ├── catering/
│   │   ├── egg-rolls/
│   │   ├── meat-pies/
│   │   ├── sausage-rolls/
│   │   └── small-chops/
│   ├── drinks/
│   ├── food/
│   ├── hampers/
│   ├── pastries/
│   │   ├── chin-chin/
│   │   ├── cookies/
│   │   ├── cupcakes/
│   │   └── donuts/
│   └── surprise birthday parties/
├── videos/                     # Local video files (8 videos)
└── logo/                       # Logo reference images
```

---

## 🔧 Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure & semantic markup |
| CSS3 | Styling, animations, responsive design |
| Vanilla JavaScript | Interactivity, sliders, counters, animations |
| [AOS](https://michalsnik.github.io/aos/) | Scroll reveal animations |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [Google Fonts](https://fonts.google.com/) | Playfair Display + DM Sans |
| [Formspree](https://formspree.io/) | Contact form email delivery |
| Netlify | Hosting, caching, headers, redirects |

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| 1240px+ | Desktop (max container width) |
| 1024px | Tablet landscape — 2-column grids |
| 768px | Tablet/mobile — single columns, hamburger menu |
| 480px | Small phones — compact layout |

---

## 📧 Contact Form Setup

The contact form uses **Formspree** to deliver messages to the business email.

- **Form ID**: `xojzjvrr`
- **Endpoint**: `https://formspree.io/f/xojzjvrr`
- **Recipient**: Preciousivie753@gmail.com
- **Subject Line**: "New Order Inquiry - Preshy Cakes"

---

## 📞 Business Contact Info

| Channel | Details |
|---------|---------|
| Phone | +234 905 261 0553 |
| Email | Preciousivie753@gmail.com |
| WhatsApp | [wa.me/23409052610553](https://wa.me/23409052610553) |
| TikTok | [@ivie861](https://www.tiktok.com/@ivie861) |
| Location | 98 Medical Store Road, Benin City, Edo State |
| Hours | Mon - Sat: 9AM - 7PM |

---

## 🚀 Deployment (Netlify)

This site is optimized for Netlify with:
- `netlify.toml` — Cache headers (1yr for assets), security headers, www→non-www redirect
- `_redirects` — Custom 404 page fallback
- `404.html` — Branded error page
- SEO meta tags & Open Graph for social sharing
- Preconnect hints for faster CDN loading
- Lazy loading on all below-fold images

### Deploy:
1. Push to GitHub
2. Connect repo to Netlify
3. Auto-deploys on every push

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Gold/Primary | `#c8a656` | Buttons, accents, icons |
| Dark | `#1b1b1b` | Headings, dark backgrounds |
| White | `#ffffff` | Body background |
| Light | `#f9f7f2` | Section backgrounds |
| Text | `#666666` | Body text |

---

## 📝 Services Offered

1. Wedding Cakes
2. Birthday Cakes
3. Pastries & Desserts
4. Event Catering
5. Drinks & Beverages
6. Food & Shawarma
7. Gift Hampers
8. Custom Cakes
9. Surprise Birthday Parties

---

## 📄 License

This website was custom-built for Preshy Cakes & Pastries. All rights reserved.

---

## 🔒 Security

- All `target="_blank"` links include `rel="noopener noreferrer"` to prevent reverse tabnabbing
- Google Maps iframe uses `sandbox` attribute to restrict embedded content
- No credentials, API keys, or sensitive data exposed in code
- Static site architecture — minimal attack surface

---

*Built by Cletus Blaze*
