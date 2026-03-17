# Madhav Vidyapeeth — Official School Website

**CBSE Affiliated School | Hadota, Chomu, Jaipur, Rajasthan**  
**Affiliation No. 1731221** | Valid: 01 April 2026 – 31 March 2031

---

## Project Overview

A complete, production-grade, fully responsive school website built with pure HTML5, CSS3, and Vanilla JavaScript. No frameworks, no dependencies, no CDN JS libraries — just clean, fast, maintainable code.

**Design System:** Refined Academic Luxury  
**Fonts:** Playfair Display (headings) + DM Sans (body) — via Google Fonts  
**Colour Palette:** Navy `#0A1628` | Royal `#1E3A7E` | Gold `#C8A84B` | Cream `#FAF7F2`

---

## Project Structure

```
madhav-vidyapeeth-website/
│
├── index.html              # Homepage (Hero, Why Us, About, Academics, Gallery, Testimonials, CTA)
├── about.html              # About page (Story, Vision/Mission, Principal's Message, Management)
├── academics.html          # Academics page (Stages, Subject Explorer, Teaching Approach, FAQ)
├── admissions.html         # Admissions page (Process, Age Criteria, Fee Info, Form, Disclosure)
├── contact.html            # Contact page (Info, Form, Office Hours, Directions, Map)
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Core design system, components, layout
│   │   ├── responsive.css  # Breakpoints: 1024px, 991px, 767px, 479px
│   │   └── animations.css  # Scroll reveals, counters, hero entrance, hover effects
│   │
│   ├── js/
│   │   ├── animations.js   # IntersectionObserver reveals, scroll progress, back-to-top
│   │   ├── navbar.js       # Glassmorphism scroll, hamburger menu, active link
│   │   └── script.js       # Form handling, WhatsApp button, FAQ accordion, tab filter
│   │
│   └── images/
│       ├── hero/           # Place full-screen hero image here (hero-bg.jpg / .webp)
│       ├── facilities/     # Campus, labs, library photos
│       ├── activities/     # Cultural events, sports, classroom photos
│       ├── transport/      # Bus / transport photos
│       └── gallery/        # School gallery photos
│
├── components/
│   ├── navbar.html         # Navbar HTML snippet reference
│   ├── footer.html         # Footer HTML snippet reference
│   └── cards.html          # All reusable card patterns reference
│
├── data/
│   └── content.json        # All verified school content (school info, nav, cards, meta)
│
├── fonts/                  # Place self-hosted fonts here (optional — Google Fonts used by default)
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## Features

### Design
- Refined academic luxury aesthetic — Navy + Gold + Cream palette
- Playfair Display serif headings paired with DM Sans body text
- Glassmorphism sticky navbar with transparent-to-frosted transition on scroll
- CSS custom properties (variables) throughout — easy to retheme
- Soft shadows, rounded corners, gradient accents

### Interactivity
- Scroll progress bar (top of viewport)
- Scroll reveal animations (fade up, fade left/right, scale in, stagger)
- Number counter animations
- 3D card tilt on hover (why-cards, academic-cards)
- Gallery hover zoom + label overlay
- FAQ accordion (academics page)
- Subject tab filter (academics page)
- Floating WhatsApp button (bottom right)
- Back-to-top button
- Notice ticker (homepage)
- Toast notification on form submit

### Forms
- Admission Enquiry Form (admissions.html)
- Contact Form (contact.html)
- Client-side validation with visual feedback
- Simulated submit with toast confirmation

### Performance
- Native lazy loading (`loading="lazy"`) on all images
- IntersectionObserver polyfill fallback for lazy images
- `requestAnimationFrame` for scroll handlers
- CSS `will-change` on animated elements
- Google Fonts loaded with `rel="preconnect"` and `display=swap`
- Zero external JS dependencies

### Accessibility
- Semantic HTML5 throughout (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on all interactive elements
- `aria-expanded` on hamburger button
- `role="list"` on navigation lists
- `focus-visible` CSS for keyboard navigation
- Reduced motion media query support

---

## Getting Started

### Local Development
```bash
# Clone or extract the project
git clone https://github.com/yourusername/madhav-vidyapeeth-website.git

# Open in browser — no build step needed
open index.html

# Or use Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"
```

### GitHub Pages Deployment
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit — Madhav Vidyapeeth website v2.0"
git remote add origin https://github.com/yourusername/madhav-vidyapeeth-website.git
git push -u origin main

# Enable GitHub Pages:
# Settings → Pages → Source: main branch / root → Save
# Your site will be live at: https://yourusername.github.io/madhav-vidyapeeth-website/
```

---

## Customisation Guide

### 1. Adding Real School Photos

Replace the placeholder gradient divs in each HTML file with actual `<img>` tags:

```html
<!-- Replace this: -->
<div style="width:100%; height:480px; background:linear-gradient(...);">...</div>

<!-- With this: -->
<img
  src="assets/images/hero/school-campus.webp"
  alt="Madhav Vidyapeeth School Campus, Hadota, Chomu, Jaipur"
  class="about-image-main"
  loading="lazy"
  width="600"
  height="480"
/>
```

**Recommended image specs:**
| Usage | Dimensions | Format | Max Size |
|-------|-----------|--------|----------|
| Hero background | 1920×1080px | WebP | 200 KB |
| About section | 800×600px | WebP | 80 KB |
| Gallery items | 800×600px | WebP | 60 KB |
| Principal photo | 400×480px | WebP | 40 KB |

### 2. Updating Contact Information

Update `data/content.json` and the corresponding HTML sections:
- Phone number (replace `+91XXXXXXXXXX`)
- Email address
- WhatsApp link (`https://wa.me/91XXXXXXXXXX`)
- Google Maps embed URL

### 3. Adding Google Maps

In `contact.html`, replace the `.map-wrapper` div content:

```html
<div class="map-wrapper">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
    width="100%"
    height="100%"
    style="border:0; border-radius:var(--radius-xl);"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Madhav Vidyapeeth location on Google Maps">
  </iframe>
</div>
```

### 4. Updating Mandatory Disclosure Documents

In `admissions.html`, replace `⏳ Upload Required` status cells with actual PDF download links:

```html
<!-- Replace: -->
<td class="status-pending">⏳ Upload Required</td>

<!-- With: -->
<td><a href="assets/docs/affiliation-certificate.pdf" class="btn btn-sm btn-outline-navy" target="_blank">📄 Download</a></td>
```

### 5. Changing Colours

Update CSS variables in `assets/css/style.css`:

```css
:root {
  --navy:        #0A1628;   /* Primary dark colour */
  --royal:       #1E3A7E;   /* Secondary blue */
  --gold:        #C8A84B;   /* Accent gold */
  --gold-light:  #E2C97E;   /* Light gold */
  --gold-pale:   #F7EDD0;   /* Very light gold tint */
  --cream:       #FAF7F2;   /* Page background */
}
```

---

## CBSE Compliance Checklist

Before going live, ensure the following are completed:

- [ ] Upload Society Registration Certificate PDF
- [ ] Upload CBSE Affiliation Certificate PDF
- [ ] Upload NOC from State Government PDF
- [ ] Upload Building Safety Certificate PDF
- [ ] Upload Fire Safety Certificate PDF
- [ ] Upload Water Safety Certificate PDF
- [ ] Publish SMC composition (names + designations)
- [ ] Publish PTA composition (names + designations)
- [ ] Publish fee structure for current session
- [ ] Publish academic calendar for current session
- [ ] Publish teaching staff list with qualifications
- [ ] Add Google Maps embed to Contact page
- [ ] Update all WhatsApp numbers (replace `XXXXXXXXXX`)
- [ ] Add school phone and email
- [ ] Set up Google Business Profile
- [ ] Submit to Justdial, Shiksha.com, Sulekha
- [ ] Verify SARAS profile at saras.cbse.gov.in

**CBSE Verification:** Parents can verify affiliation at **cbseaff.nic.in** using Affiliation No. **1731221**

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Samsung Internet | 14+ | ✅ Full |
| iOS Safari | 14+ | ✅ Full |

---

## Verified School Data

| Field | Value |
|-------|-------|
| School Name | Madhav Vidyapeeth |
| Established | 1 April 2024 |
| CBSE Aff. No. | 1731221 |
| Valid Period | 01 Apr 2026 – 31 Mar 2031 |
| Principal | Ms. Beenu Yadav (MA, M.Ed) |
| Managing Body | Gramin Shiksha Evam Swasthya Utthan Sansthan, Jaipur |
| Classes Operational | Nursery to Class VIII |
| Location | Hadota, Chomu, Jaipur, Rajasthan — 303 702 |

---

## License

MIT License — see `LICENSE` file for details.

---

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.0 | March 2026 | Initial build — blueprint draft |
| v2.0 | March 2026 | Verified edition — all 12 corrections applied, CBSE-compliant |

---

*Built with care for the students and families of Hadota, Chomu, Jaipur, Rajasthan.*
