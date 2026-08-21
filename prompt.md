I already have a working HTML/CSS/JavaScript Resume website.

I will provide the existing code below.

Your task is to **modify and significantly improve the existing website**, NOT rebuild it from scratch.


The final result should feel like a **premium modern high profile resume website**, not a generic template.

# IMPORTANT


Work directly from my existing code and improve it.

Do not remove important content.



If something is missing, keep it as a tasteful visual placeholder rather than inventing information.

---

# 1. my resume update below

Master’s degree in Electrical Engineering and Computer Science (EECS)
with over 10 years of experience in the telecommunications industry,
specializing in pre-sales, product development, technical issue
resolution, project management, and customer service. Nokia 4G/5G
Packet Core Certified, 4G/5G End-to-End Expert, IMS (VoLTE/VoNR),
IP Network CCNP Level, Kubernetes, Programming & R&D
Experienced in deploying end-to-end 4G and 5G networks using both
open-source and commercial equipment. Familiar with Nokia Core
(CMM/CMG/APC), RAN, Athonet 5GC, Saviah 5GC, Open5GS,
Free5GC, srsRAN, and UERANSIM.
Profile

Lite-On Technology Corporation Taiwan | 2025 – Present
Principal 5G/Open RAN Engineer
• 5G small cell and high-power radio testing, deployment and optimization
• O-CU/O-DU/O-RU integration and validation
• MIDIA AI-RAN integration with Open RAN units
• AI-enabled resource optimization and user-experience enhancement
• Edge AI solution evaluation and deployment

Vertex System ~ Taiwan
5G SA/NSA Packet Core Engineer
 Performed Integration and Deployment of Nokia CMU 5G (SA and NSA)
Core Networks (CMM/CMG/APC), Installation, commissioning, and
maintenance
 Mobile Edge Computing (MEC) with various vendors such as Nokia,
PacketX , ITRI
 Troubleshoot of existing 5G private networks devices including Nokia 5G
SA/NSA Core, Routers, VPN, RAN, UEs
 Developing Automation Portal for Shared Core
 Docker and Kubernetes

Python, JavaScript, webiste, React, QXDM
Network Analyzer: Docker
Kubernetes, Wireshark,
Penetration test tools in kali Linux
TOOLS

English, French, Chinese

SKILLS
5G Expertise: Proficient in managing Packet Core (e.g., Nokia’s
CMU/CMM/CMG/APC, Athonet, Ataya, Saviah, Druid, open5Gs, free5GC,
UERANSIM); IMS/VoNR/VoLTE; skilled in Docker and Kubernetes
Network Technologies: Knowledgeable in Deep Packet Inspection (DPI) and
3GPP-compliant MEC; experienced in implementing shared core solutions.
Network Management: IP Network CCNP level; Hands-on experience in
switching, routing, and firewall management with Cisco, D-Link, and Nokia SROS;
proficient in network automation and Python scripting.
Telecom Industry Knowledge: Strong understanding of telecom dynamics;
experience collaborating with OEMs, ODMs, and SIs.
Test Development: Developed automated test cases and lab environments,
showcasing strong problem-solving skills.
Broadband Solutions: Familiar with 5G Fixed Wireless Access (FWA), xDSL,
xPON, Wi-Fi routers, and mesh networking.
Work History

2022-Now

Read More...

Read More...

NATIONAL Chiao Tung University ~ Taiwan
CCNA Teacher Assistant
 Responsible for teaching Computer Network and Application CCNA Lab using real Cisco
Routers and Switches to graduate students. Introduce cutting edge
LAN/WAN/WLAN/VLAN/VPN networking technologies in depth, including integrated
Wireless/Wired infrastructure design, configurations, security enhancements, QoS as well as
hands-on experience and skills on Cisco products.

MASTER’S DEGREE ~ Electrical and Computer Science EECS
National Chao Tung University, Hsinchu, Taiwan
MASTER’S DEGREE ~ Applied Physics (Energy)
Bachelor’S DEGREE ~ Applied Physics (Energy)
Ouagadougou University, Ouagadougou, Burkina Faso
D-Link Corporation ~ Taiwan
Network Consultant/Presales
 Analyze and handle product inquiries from overseas business unit (ISPs) and provide
solutions to troubleshooting.
 Support product planner and QA department for product validation, interoperability
testing and benchmark testing.
 Provide consultation for pre-sales questions and design problems.
 Create and maintain testing laboratory environment for wireless broadband product
verification.
 Periodical technical training for internal engineers regarding essential networking
knowledge, installation, operation, maintenance and troubleshooting of products.

 Projects: DSL-224(Comteco/TATA); DIR-825(Telefornica); DIR-819(Claro); DSL-
5300(Australia); DSL-385(TalkTalk); AVSystem; Canal+; retail projects and many more.

Purview Service ~ UK
Network Engineer Freelancer
 Replacing, installing new L3 switch/chassis on customers network
 User Acceptance Testing (UAT) for VoIP phones, servers, printers, internet.

Marien N’gouabi High School ~ BURKINA FASO
Maths & Physics Teacher
 Course & Exam delivery for grade 9-12 students.
Education

Languages
English (advanced), Chinese (advanced), French (Native), Bambara (Native), Gourounsi (Native)

---

# 2. COLOR SYSTEM
Replace the current mostly flat blue/orange visual system with a sophisticated modern gradient-based identity.

Use a primary linear gradient:

```
linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)
```
Use these colors as the main design tokens:

```
--background: #070B14;
--background-alt: #0B1120;
--surface: #101827;
--surface-light: #162033;

--primary: #6366F1;
--primary-secondary: #8B5CF6;
--primary-accent: #06B6D4;

--gradient: linear-gradient(
  135deg,
  #6366F1 0%,
  #8B5CF6 50%,
  #06B6D4 100%
);

--text: #F8FAFC;
--muted: #94A3B8;

--border: rgba(255,255,255,0.08);
```
The gradient should become an important part of the brand.

Use it for:

- Primary buttons
- Logo accents
- Small decorative elements
- Hero highlights
- Card hover borders
- Section accents
- Important text highlights
- Background glows
However, do NOT cover the entire website in gradients.

The gradient should feel premium and controlled.

// Tailwind CSS Configuration
theme: {
  extend: {
    colors: {
      bgWarm: '#E9E9E7',         // Page / Canvas Background (Light warm gray)
      cardBg: '#FFFFFF',         // Primary Card Background (Soft white)
      cardSubtle: '#F6F6F4',     // Hover / Input / Secondary card fill
      primaryGreen: '#47785F',   // Primary accent (Muted sage/forest green)
      darkGreen: '#315B46',      // Darker green accent / Active states
      lightGreen: '#E2EBE5',     // Soft green pill badge background
      accentRed: '#D85A4A',      // Medical alert / Notification badge red
      textPrimary: '#171918',    // Dark charcoal primary typography
      textMuted: '#777B78',      // Secondary / Metadata text
      borderLight: 'rgba(0, 0, 0, 0.06)' // Thin, understated card borders
    }
  }
}

/* Standard CSS Variables */
:root {
  --bg-warm: #E9E9E7;
  --card-bg: #FFFFFF;
  --card-subtle: #F6F6F4;
  --primary-green: #47785F;
  --dark-green: #315B46;
  --light-green: #E2EBE5;
  --accent-red: #D85A4A;
  --text-primary: #171918;
  --text-muted: #777B78;
  --border-light: rgba(0, 0, 0, 0.06);
  --radius-card: 1.5rem; /* 24px */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.03);
  --shadow-soft: 0 10px 30px -5px rgba(0, 0, 0, 0.03), 0 4px 12px -2px rgba(0, 0, 0, 0.02);
}

---


# 17. FOOTER
Keep the current footer information.

Improve:

- Typography
- Spacing
- Link hover states
- Responsive layout
- Brand styling
Add a subtle gradient line at the top of the footer if it looks good.

---

# 18. ANIMATIONS
Add tasteful modern animations.

Use CSS and lightweight JavaScript.

Add:

- Fade-up section reveal
- Card hover animations
- Button hover effects
- Gradient glow movement
- Navbar transition
- Mobile menu animation
Use IntersectionObserver for scroll reveal if appropriate.

Important:

Respect:

```
@media (prefers-reduced-motion: reduce)
```
When reduced motion is enabled, disable non-essential animations.

Do NOT add heavy animation libraries.

---

# 19. RESPONSIVE DESIGN
This is extremely important.

The website must look excellent at:

- 1440px
- 1280px
- 1024px
- 768px
- 600px
- 480px
- 375px
- 320px
Do not simply shrink desktop layouts.

Adapt the layout intelligently.

On mobile:

- Hero typography should scale correctly
- Buttons should be comfortable to tap
- Cards should become one column
- Grids should collapse cleanly
- Navigation should become a polished mobile menu
- No horizontal scrolling
- No text overflow
- No oversized decorative elements
- Images should remain properly cropped
Use:

```
clamp()
```
where appropriate for responsive typography.

---

# 20. ACCESSIBILITY
Improve accessibility without changing the visual design.

Include:

- Proper focus states
- Keyboard navigation
- Accessible mobile menu
- ARIA labels
- Good contrast
- Semantic HTML
- Reduced motion support
- Proper button types
- Accessible links
Do not remove existing alt text.

---

# 21. PERFORMANCE
Keep the website lightweight.

Do not add large JavaScript libraries.

Avoid unnecessary dependencies.

Use CSS for visual effects where possible.

Do not introduce a framework.

This is still a standalone HTML/CSS/JavaScript website.

Keep it easy to deploy on a standard web server.

---



Also want to be able to display the images of telcom of what we provide
**

I want to be able to have swicth between french and english. The french should be the default language.

Added a French/English language switcher (French is the default). Verified in the browser: the whole page translates instantly, the gradient-highlighted words are preserved, and the choice persists.