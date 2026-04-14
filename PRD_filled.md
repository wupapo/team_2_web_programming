# WEBSITE BUILD Project Requirements Document

*Note: Fields requiring your specific team information (like Group Number, Names, IDs, exact dates, and signatures) have been left blank or noted for you to fill in.*

---

**Website Name:** Aura Tech  
**Group Number:** [Your Group Name/Number]  
**Group Members:** [Your Team Member Names & IDs]  
**Submission Date:** [DD / MM / 2026]  
**Project Duration:** 4 weeks  
**Document Version:** 1.0  

---

## 1. Project Overview (10 points total)

### 1.1 Project Description (5 points)
**Website Name:** Aura Tech  
**Website Type:** Product retail store / E-commerce Front-end  
**Primary Purpose:** To showcase and sell high-end technological gadgets through a premium, modern, pure front-end e-commerce storefront.  
**Target Users:** Tech enthusiasts, gamers, and professionals seeking cutting-edge devices in a streamlined, luxury digital environment.  
**GitHub URL:** https://wupapo.github.io/team_2_web_programming  

### 1.2 Project Goals (2 points)
- Build a fully responsive, semantic 5-page e-commerce website showcasing premium tech products.
- Implement a dynamic order form utilizing DOM APIs to extract and render accurate structured data reliably without using `document.write()`.
- Achieve a flawless Google Lighthouse score of 100 on desktop by applying massive image compression algorithms and explicit lazy-loading architectures.
- Establish a rigorous design language leveraging CSS grid, variables, and dark-mode styling without relying on external CSS frameworks.
- Deploy cleanly to GitHub Pages ensuring absolute fidelity across Chrome, Edge, and Firefox browsers.

### 1.3 Scope (3 points)
**In Scope:**
- Website design and front-end development (HTML, CSS, Vanilla JS)
- 5 fully coded pages (Home, Products, About, Order, Summary)
- Responsive dark-mode layout (mobile + desktop)
- Form page with multiple input types and local storage extraction
- Dynamic table generation via JavaScript DOM methodologies
- Deployment to live GitHub Pages hosting

**Out of Scope:**
- Back-end code / live database integration
- Real E-commerce / payment processing gateways
- User login / authentication accounts
- Native mobile application builds

---

## 2. Group Members & Roles (5 points total)
### 2.1 Member Roles (3 points) 
*[Please fill in your team members and their assignments here]*

### 2.2 Collaboration Tools (2 points)
**Version Control:** GitHub — repository URL: https://github.com/wupapo/team_2_web_programming  
**Communication:** [Your chat tool, e.g., KakaoTalk / Slack]  
**Task Management:** [Your tracker, e.g., Notion / GitHub Projects]  
**Design Tool:** Built directly via Code with IDE previews  
**Meeting Cadence:** [Your schedule, e.g., Weekly]  

---

## 3. Site Structure & Page List (10 points total)

### 3.1 Sitemap (5 points)
| Page ID | Page Name | URL / Route | Description | Owner |
|---------|-----------|-------------|-------------|-------|
| Homepage | Home | `/index.html` | The main landing page with a hero banner and trending tech categories layout. | [Name] |
| Page 2 | Products | `/products.html` | A comprehensive product catalog displaying smartphones, headsets, and consoles using grid structures. | [Name] |
| Page 3 | About Us | `/about.html` | Detailed company history, physical storefront imagery, and core mission statements. | [Name] |
| Page 4 | Order Form | `/order.html` | The primary interactive registration/purchase form capturing detailed user, logistic, and payment preferences. | [Name] |
| Page 5 | Order Summary | `/summary.html` | A fresh dynamically loaded HTML page featuring a JavaScript-injected table detailing the specific payload captured in the Order form. | [Name] |

### 3.2 Key Page Requirements (5 points)
- **Home:** Main navigational header, bold hero image section with CTA button, trending products grid layout, semantic footer bounding.
- **Products:** Detailed CSS grid structure showcasing exactly 5 retail products with associated prices, descriptive `<article>` text, and routing buttons.
- **About Us:** 2-column flex/grid design, clear architectural storefront image, formatted lists emphasizing store reliability and support guarantees.
- **Order Form:** Mandatory combination of text, email, numeric variables, radio group (payment logic), checkbox group (add-on packages), select dropdown (product choice), textarea (notes), and dual Submit/Reset logic gates.
- **Order Summary:** Interceptive local storage trigger, loop/conditional-driven JavaScript table mapping algorithm with fixed headers and 2 data columns populated strictly via DOM manipulation.

---

## 4. Design Requirements (5 points total)

### 4.1 Visual Style (3 points)
**Overall Aesthetic:** Clean, premium precision dark-mode. Minimalist but deeply integrated with glassmorphism UI spacing.  
**Primary Color:** `#58a6ff` (Energetic, high-contrast tech blue)  
**Secondary Color:** `#161b22` (Deep matte panel background layer)  
**Accent Color:** `#c9d1d9` (Primary text color for high readability)  
**Heading Font:** Inter / Segoe UI System Fonts  
**Body Font:** Inter / Segoe UI System Fonts  
**Imagery Style:** Photorealistic, studio-lit dark electronics photography.  

*Design Example:*
- **Primary — #58a6ff:** Triggers the attention on interactive standard hover elements, buttons, and brand naming.
- **Secondary — #161b22:** Generates high-fidelity depth across the HTML container panels.

### 4.2 Accessibility Basics (2 points)
- 100% of images deployed possess descriptive `alt=""` text matrices.
- Color contrast easily surpasses the 4.5:1 ratio utilizing white/blue texts bounded across deep #0d1117 structural wrappers.
- Aria-labels `aria-current="page"` and `aria-label="..."` mapped extensively across hyperlinks and semantic structural `<fieldset>` domains.

---

## 5. Technical Requirements (5 points total)

### 5.1 Technology Stack (2 points)
**Front-End Languages:** HTML5, CSS3, JavaScript (ES6+)  
**CSS Approach:** Custom raw CSS mapped through global `:root` variable definitions.  
**JavaScript Framework:** None (Vanilla JS directly accessing standard DOM APIs).  
**CMS:** None  
**Version Control:** Git — hosted on GitHub  
**Hosting / Deployment:** GitHub Pages  

### 5.2 Browser Compatibility (3 points)
| Browser | Version | Required Level |
|---------|---------|----------------|
| Google Chrome | Latest | Full support |
| Mozilla Firefox | Latest | Full support |
| Microsoft Edge | Latest | Full support |

### 5.3 Performance Target
- Google Lighthouse score specifically mapped to scale smoothly hitting **100 on desktop**. 
- Image payload weights utterly minimized via deep `.jpg` compression optimizations alongside `fetchpriority="high"`.
- Total avoidance of any blocking `<script>` architectures utilizing `defer` declarations natively.

---

## 6. Content Plan (10 points total)

### 6.1 Content Inventory (10 points)
| Content Item | Description | Owner | Due Date |
|--------------|-------------|-------|----------|
| Home Text | Compelling tech phrasing, introduction | [Name] | [Date] |
| Products Info | Descriptions/prices for laptops, consoles, phones | [Name] | [Date] |
| About Statements | Fictional company lore, values, support info | [Name] | [Date] |
| Order Form Rules | Input placeholders, payment method labels | [Name] | [Date] |
| Summary Text | Dynamic logic variables and UX confirmation messages | [Name] | [Date] |
| Hero/Product Media | AI-generated luxury tech assets compressed to JPG | [Name] | [Date] |

### 6.2 Image & Media Suggestions
- Deployed meticulously generated and cropped custom imagery. None exceed native 800px requirements and all compressions natively shrink file requests guaranteeing instant pipeline loads.

---

## 8. Risks & Assumptions (15 points total)

### 8.1 Risk Register (5 points)
*[Adjust these or add custom risks as needed]*
- **Risk:** High-resolution uncompressed image load times destroying the Lighthouse audit scores down into a penalty range.
  - **Mitigation:** We physically downscaled formatting locally into `.jpg` compression blocks rendering Lighthouse immediately back to green 100 status flags.

### 8.2 Assumptions (10 points)
- **User’s needs are as follows:** High-net-worth customers craving immediate visual verification of premium tech hardware without complex navigation.
- **What we believe is good for the user:** Deep dark-mode layouts decrease optic strain and inherently generate a studio-style "spotlight" illuminating the specific gadget's features dramatically.
- **Why we think the website can add to the user experience:** Interacting explicitly with zero-latency Javascript arrays builds an incredibly trustworthy purchase flow.
- **In what specific way is your website beneficial:** Removing backend dependency loads keeps interaction fluid, and semantically structuring form layouts using precise `<fieldset>` boxes eliminates cognitive overload for disabled navigational tools.

---

*(Sections 7, 9, and 10 require your manual test checks, dates, and sign-offs once you copy this text into your submission document!)*
