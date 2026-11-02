# Christine Adib — Personal Portfolio Website

A minimal, elegant, modern, and fully responsive personal portfolio website for **Christine Adib**, Full-Stack .NET & Angular Developer.

Designed and built with Vanilla **HTML5, CSS3, and JavaScript** following a luxurious, warm, elegant beige and earthy aesthetic: primary white (`#FFFFFF`), warm section beige (`#FAF7F2`), card tone (`#F1E3D5`), rich title brown (`#8B5E3C`), and primary accents (`#C9A78A`, `#A4785A`).

---

## 🌟 Highlights & Features

- **Personal Brand & Monogram:** Custom "CA" architectural monogram emblem, status badges, and professional profile overview.
- **Accurate & Verified Credentials:**
  - Phone: `01031034795` (international link: `+201031034795`)
  - Email: `christineadib8@gmail.com`
  - ITI Graduation: Completed (Graduation: July 4, 2026)
  - Consistent naming of `HandAura` capstone project
- **Showcase Sections:**
  - **Hero:** Impactful introduction, status indicator, primary CTAs, and quick social links.
  - **About Me:** Narrative background, engineering philosophy, collaborative leadership, and bilingual proficiency (English & Arabic).
  - **Technical Skills:** Categorized into Backend & Architecture, Frontend, Databases & Real-Time, AI & Integrations, Security, and Tools & Practices — featuring an interactive filter tab system with 0 misleading percentage bars.
  - **Featured Projects:** Prominent card for **HandAura** (Bilingual Multi-Vendor Marketplace) with live demo and repository links, followed by **5omasia**, **TalabatApp**, and **E-Commerce API**.
  - **Professional Experience:** Interactive timeline detailing Team Leader responsibilities on the HandAura capstone.
  - **Education & Achievements:** Completed ITI Full-Stack .NET Track and Sohag University CS & AI Degree, alongside ECPC 2023 participation, 500+ Codeforces algorithmic problems solved, and 50+ LeetCode SQL challenges.
  - **Contact & Direct Actions:** One-click clipboard copy for email and phone, accessible mailto-based message dispatch with live client-side validation, and verified social links.
- **Interactive Enhancements:**
  - Sticky frosted header with scroll-reactive border.
  - Responsive mobile drawer navigation with ARIA accessibility.
  - Dark / Light visual mode toggle (persists to `localStorage`).
  - Active navigation tracking via `IntersectionObserver`.
  - Accessible focus outlines and reduced-motion considerations.

---

## 📁 Project Structure

```
InternTasks/
├── index.html              # Semantic HTML5 portfolio markup
├── css/
│   └── style.css           # Custom CSS3 styles, design tokens & responsive queries
├── js/
│   └── main.js             # Vanilla JS: Nav, theme toggle, copy buttons & form validation
├── assets/
│   └── favicon.svg         # Clean geometric "CA" SVG favicon
└── README.md               # Project documentation, running instructions & deployment guide
```

---

## 🎨 Design System & Color Palette

The portfolio strictly adheres to a luxurious, warm, elegant beige and earthy aesthetic:

| Token | HEX Code | Role & Usage |
| :--- | :--- | :--- |
| **Primary Background** | `#FFFFFF` | Main background surface |
| **Section Background** | `#FAF7F2` | Alternative section backdrops (Hero, Skills, Experience, Contact) |
| **Card Background** | `#F1E3D5` | Project cards, skill cards, brand card, containers |
| **Borders & Dividers** | `#D9C3A8` | Clean lines, subtle borders, card frames |
| **Primary Accent** | `#C9A78A` | Interactive buttons, active tabs, highlight badges |
| **Hover Accent** | `#A4785A` | Button hover states, interactive link transitions |
| **Title Text** | `#8B5E3C` | Main headings, brand monogram, prominent text |
| **Body Text** | `#A89B8E` / `#544033` | Paragraphs, meta descriptions, form labels |
| **Success / Positive** | `#7A9E7E` | Availability indicator pulse, completed status badges |
| **Typography** | `Inter`, `Manrope` | Modern, readable, elegant sans-serif |

---

## 🚀 How to Run Locally

Because the project is built purely with standards-compliant HTML5, CSS3, and Vanilla JavaScript, no build step, compiler, or dependency installation is required!

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using Node.js `npx serve` or `http-server`
```bash
# In the project directory:
npx serve .
# or
npx http-server -p 8080
```
Open `http://localhost:3000` or `http://localhost:8080`.

### Option 3: Using Python Built-in HTTP Server
```bash
# Python 3
python -m http.server 8000
```
Open `http://localhost:8000`.

### Option 4: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🧪 Testing & Validation Results

The portfolio has been verified and tested across multiple device viewports and interaction scenarios:

1. **Resolution & Responsiveness Tests:**
   - **Desktop (1440px+):** Generous whitespace, two-column hero with architectural brand card, wide featured project layout.
   - **Laptop (1024px):** Proportional grid flow, balanced timeline, crisp font hierarchy.
   - **Tablet (768px):** Hamburger mobile navigation toggles smoothly, single-column about and contact grids.
   - **Mobile (390px / 360px):** Zero horizontal overflow, button full-width touch targets, readable typography, wrapped tags.
2. **Interaction Tests:**
   - **Navigation & Smooth Scrolling:** All anchor links (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#education`, `#contact`) scroll with accurate offset compensation for sticky header.
   - **Mobile Navigation:** Opens and closes on toggle click, auto-closes on link click, closes on click outside and `Escape` key press.
   - **Skills Filter:** Filter tabs instantly filter categories ("All", "Backend", "Frontend", "Databases", "AI", "Security & Tools").
   - **Clipboard Buttons:** Clicking "Copy" on email or phone successfully writes to clipboard with temporary "Copied!" visual feedback.
   - **Contact Form Validation:**
     - Blocks submission if required fields are missing with clear error messaging.
     - Validates email formatting.
     - Prepares correctly encoded `mailto:` link with prefilled subject and body.
     - Displays informative feedback instructing the user that their default email client is opening.
3. **Data Integrity Verifications:**
   - Phone is strictly `01031034795` / `+201031034795`. Old number from CV is not present.
   - ITI Status is marked **Completed** with graduation date of **July 4, 2026**.
   - Project name is consistently **HandAura**.
   - No placeholder text or lorem ipsum used.

---

## 🌐 Deployment Instructions

The site is production-ready for static hosting on any free provider.

### Option A: GitHub Pages (Recommended)
1. Initialize Git in the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Christine Adib personal portfolio"
   ```
2. Create a repository on GitHub (e.g. `ChristineAdib.github.io` or `portfolio`).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/ChristineAdib/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages > Source**, select branch `main` and folder `/ (root)`, and click **Save**.
5. Your portfolio is live at `https://christineadib.github.io/portfolio/`.

### Option B: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or sign in at [vercel.com](https://vercel.com).
2. Run `vercel` in the project directory and follow prompts.
3. The site deploys instantly with SSL.

### Option C: Netlify
1. Drag and drop the `InternTasks` folder onto the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. The portfolio will be live in seconds.
