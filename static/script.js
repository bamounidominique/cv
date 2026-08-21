"use strict";

/* =====================================================================
   Dominique Bamouni — portfolio interactions
   i18n (FR default + browser detection) · theme (dark/light) ·
   gallery + showcase rendering · lightbox · scroll reveal · nav
   ===================================================================== */

/* ---------- Translations ---------- */
const translations = {
  fr: {
    meta_desc: "Ingénieur principal 5G / Open RAN — plus de 10 ans d'expérience télécom : 4G/5G SA & NSA, Packet Core, Open RAN, AI-RAN, Edge AI, MEC, Kubernetes et automatisation réseau.",
    nav_profile: "Profil", nav_expertise: "Expertise", nav_gallery: "Technologies",
    nav_experience: "Expérience", nav_skills: "Compétences", nav_education: "Formation",
    nav_references: "Références", nav_contact: "Contact",

    hero_badge: "Disponible pour missions & consulting",
    hero_title: "Principal 5G / Open RAN Engineer",
    hero_tagline: "Ingénieur télécom senior avec plus de 10 ans d'expérience, spécialisé dans le déploiement de réseaux 4G/5G de bout en bout — Packet Core, Open RAN, AI-RAN et Edge AI — sur équipements commerciaux et open-source.",
    chip_networking: "Réseaux · Automatisation",
    cta_contact: "Me contacter", cta_experience: "Voir l'expérience", cta_cv: "Télécharger le CV",
    hero_location: "New Taipei City, Taïwan", hero_cv_updated: "CV mis à jour — Juin 2026",

    profile_eyebrow: "Profil professionnel",
    profile_title: "Un ingénieur télécom de bout en bout",
    profile_lead: "Titulaire d'un Master en Génie Électrique et Informatique (EECS), avec plus de 10 ans d'expérience dans l'industrie des télécommunications — spécialisé en avant-vente, développement produit, résolution d'incidents techniques, gestion de projet et service client.",
    profile_body1: "Certifié Nokia 4G/5G Packet Core, expert 4G/5G de bout en bout, IMS (VoLTE/VoNR), réseaux IP de niveau CCNP, Kubernetes, programmation et R&D. Expérimenté dans le déploiement de réseaux 4G et 5G complets à partir d'équipements commerciaux et open-source.",
    profile_body2: "Une expertise transverse — connaissance technique des télécoms, vente de solutions, livraison et gestion de projets, encadrement d'équipes — au service de nouveaux défis techniques.",
    hl1_t: "Nokia 4G/5G Packet Core certifié", hl1_d: "Planification IP, déploiement et test du cœur 5G Nokia CMU.",
    hl2_t: "4G / 5G End-to-End", hl2_d: "SA & NSA, RAN, Packet Core, transport et équipements utilisateurs.",
    hl3_t: "IMS · VoLTE · VoNR", hl3_d: "Services voix et multimédia sur réseaux mobiles 4G/5G.",
    hl4_t: "Réseaux IP — niveau CCNP", hl4_d: "Routage, commutation, pare-feu, VPN et automatisation Python.",

    expertise_eyebrow: "Domaines clés", expertise_title: "Expertise principale",
    expertise_intro: "Des domaines techniques couvrant l'ensemble de la chaîne 5G — du cœur de réseau au radio, de l'edge à l'automatisation cloud-native.",
    exp1_t: "5G Packet Core (5GC)", exp1_d: "Conception, configuration et tests de performance du cœur 5G. Expérience multi-fournisseurs : Nokia CMU, Athonet, Ataya, Saviah, Druid. Intégration de fonctions réseau via API 3GPP.",
    exp2_d: "Intégration et validation O-CU / O-DU / O-RU. Intégration AI-RAN (MIDIA) aux unités Open RAN et optimisation des ressources pilotée par l'IA.",
    exp3_d: "Évaluation et déploiement de solutions Edge AI. Expérience du MEC (DPI et conforme 3GPP) et intégration d'UPF tiers avec le cœur Nokia.",
    exp4_t: "Réseaux — niveau CCNP", exp4_d: "Commutation, routage et pare-feu. Cisco, D-Link et Nokia SR OS. Automatisation réseau avancée et scripting Python.",
    exp5_t: "Cloud-Native & Automatisation", exp5_d: "Docker et Kubernetes en environnements de production. Portails d'automatisation, monitoring et scripting en Python et JavaScript.",
    exp6_t: "Test & Diagnostic", exp6_d: "Bancs de test automatisés et laboratoires. Wireshark, QXDM et analyseurs réseau. Excellente capacité de résolution de problèmes complexes.",

    gallery_eyebrow: "Technologies & solutions", gallery_title: "Galerie technologique télécom",
    gallery_intro: "Un aperçu des technologies et environnements sur lesquels je travaille au quotidien. Les visuels génériques n'impliquent aucun produit officiel de marque.",

    exp_eyebrow: "Parcours", exp_title: "Expérience professionnelle",
    exp_intro: "Par ordre chronologique inverse. La mission Purview (freelance) se déroule en parallèle du poste chez D-Link.",
    present: "Présent", loc_taiwan: "Taïwan", loc_uk: "Royaume-Uni", loc_bf: "Burkina Faso",
    liteon_1: "Test, déploiement et optimisation de small cells 5G et de radios haute puissance",
    liteon_2: "Intégration et validation O-CU / O-DU / O-RU",
    liteon_3: "Intégration AI-RAN MIDIA avec les unités Open RAN",
    liteon_4: "Optimisation des ressources et de l'expérience utilisateur pilotée par l'IA",
    liteon_5: "Évaluation et déploiement de solutions Edge AI",
    vertex_1: "Intégration et déploiement du cœur Nokia CMU 5G (SA/NSA) — CMM, CMG et APC",
    vertex_2: "Installation, mise en service et maintenance de réseaux 5G privés et d'environnements CU/DU/RU",
    vertex_3: "Livraison de solutions MEC avec Nokia, PacketX et ITRI",
    vertex_4: "Diagnostic packet core, RAN, VPN, routeurs et équipements utilisateurs (UE)",
    vertex_5: "Développement de portails d'automatisation pour environnements à cœur partagé",
    vertex_6: "Travail approfondi avec Docker et Kubernetes",
    dlink_role: "Consultant réseau / Ingénieur avant-vente senior",
    dlink_1: "Support des clients opérateurs (ISP) à l'international",
    dlink_2: "Conseil technique et consultation avant-vente",
    dlink_3: "Tests d'interopérabilité et validation en laboratoire",
    dlink_4: "Diagnostic des produits et solutions réseau",
    dlink_5: "Formation technique des ingénieurs",
    dlink_6: "Participation à des projets ISP majeurs : Telefónica, Claro, TalkTalk, TATA et Canal+",
    tag_presales: "Avant-vente",
    purview_role: "Ingénieur réseau", badge_freelance: "Freelance", purview_note: "en parallèle du poste D-Link",
    purview_1: "Migrations de switchs L3", purview_2: "Installation d'équipements réseau",
    purview_3: "Tests de recette utilisateur (UAT)", purview_4: "Test de téléphones VoIP, serveurs et imprimantes",
    purview_5: "Validation des services réseau et Internet",
    nctu_role: "Assistant d'enseignement CCNA",
    nctu_1: "Formation en laboratoire CCNA sur équipements Cisco (routage et commutation)",
    nctu_2: "WLAN, VPN, QoS et sécurité réseau", nctu_3: "Configuration et diagnostic réseau pratiques",
    marien_role: "Professeur de Mathématiques & Physique",
    marien_1: "Enseignement des mathématiques et de la physique (classes de la 3e à la Terminale)",
    marien_2: "Préparation des cours et des examens",

    skills_eyebrow: "Stack technique", skills_title: "Compétences techniques",
    skills_intro: "Regroupées par domaine pour une lecture claire. Les technologies clés sont mises en avant.",
    sk_telecom: "5G & Télécom", sk_cloud: "Cloud & Automatisation", sk_netauto: "Automatisation réseau",
    sk_net: "Réseaux", sk_ip: "IP — niveau CCNP", sk_switch: "Commutation", sk_route: "Routage", sk_fw: "Pare-feu",
    sk_test: "Test & Diagnostic", sk_analyzer: "Analyseur réseau", sk_testcases: "Cas de test automatisés",
    sk_lab: "Environnements labo", sk_broadband: "Haut débit", sk_mesh: "Réseaux Mesh",
    sk_sec: "Sécurité & 3GPP", sk_5gsec: "Sécurité 5G",

    edu_eyebrow: "Formation", edu_title: "Parcours académique",
    edu1_deg: "M.S. — Génie Électrique & Informatique (EECS)", edu_major: "Majeure : Télécommunications",
    edu2_deg: "M.S. — Physique Appliquée (Énergie)", edu3_deg: "Licence — Physique",
    edu4_deg: "Diplôme de langue chinoise (Mandarin)",
    lang_eyebrow: "Langues", lang_title: "Langues",
    l_fr: "Français", l_en: "Anglais", l_zh: "Chinois", lvl_native: "Langue maternelle", lvl_adv: "Avancé",

    proj_eyebrow: "Réalisations", proj_title: "Certifications & projets", proj_intro: "Cliquez sur une image pour l'agrandir.",

    ref_eyebrow: "Recommandations", ref_title: "Références",
    ref1_q: "Mon superviseur pendant plus de 5 ans chez D-Link ; il peut attester de mes compétences et de ma personnalité.",
    ref1_r: "Director, ZXELL",
    ref2_q: "Collaboration à la préparation et à l'évaluation de cours pour étudiants de master à NCTU.",
    ref2_r: "Professeure à NYCU",
    ref3_q: "Ancien manager, en mesure d'attester de mon expérience professionnelle.", ref3_r: "Ancien manager",
    ref4_q: "Référence académique.", ref5_q: "Référence académique.",

    contact_eyebrow: "Contact", contact_title: "Travaillons ensemble",
    contact_intro: "Disponible pour un poste à temps plein, du consulting ou du freelance. Pour un projet ou un poste réseau, n'hésitez pas à me contacter.",
    c_email: "Email", c_phone: "Téléphone", c_loc: "Localisation",
    f_fname: "Prénom", f_lname: "Nom", f_subject: "Sujet", f_phone: "Téléphone", f_email: "Email", f_message: "Message", f_send: "Envoyer",
    f_opt_interview: "Entretien", f_opt_project: "Projet", f_opt_consult: "Consulting", f_opt_other: "Autre",

    footer_rights: "Tous droits réservés.", footer_top: "Haut de page",

    cat_5gcore: "5G Core", cat_openran: "Open RAN", cat_radio: "Radio haute puissance", cat_private5g: "5G privée",
    cat_testing: "Test réseau", cat_smallcell: "Small Cells", cat_arch: "Architecture réseau", cat_airan: "AI-RAN", cat_edge: "Edge AI · MEC",
    g_5gcore_t: "Cœur de réseau 5G", g_5gcore_d: "Environnements Packet Core 5G SA/NSA en laboratoire et en production.",
    g_openran_t: "Unités radio Open RAN", g_openran_d: "Intégration et validation O-RU / O-DU / O-RU.",
    g_radio_t: "Radio 4G/5G", g_radio_d: "Test et optimisation de radios cellulaires haute puissance.",
    g_private5g_t: "Réseau 5G privé", g_private5g_d: "Baies et infrastructure pour déploiements 5G privés.",
    g_testing_t: "Banc de test réseau", g_testing_d: "Environnements de test et de mesure télécom.",
    g_smallcell_t: "Small Cell", g_smallcell_d: "Déploiement et optimisation de petites cellules.",
    g_arch_t: "Architecture réseau", g_arch_d: "Conception et intégration d'infrastructures télécom.",
    g_airan_t: "AI-RAN", g_airan_d: "Optimisation du RAN pilotée par l'IA sur unités Open RAN.",
    g_edge_t: "Edge AI & MEC", g_edge_d: "Calcul en périphérie et Mobile Edge Computing.",

    s_cert1_t: "Certification Nokia 5G Core", s_cert1_s: "Enregistrement initial & établissement de session PDU",
    s_cert2_t: "Revue d'architecture CMU 5GC", s_cert2_s: "Architecture du cœur 5G Nokia CMU",
    s_proj1_t: "Pré-déploiement 5G", s_proj1_s: "Configuration Nokia CMU + BBU",
    s_proj2_t: "Projet 5G + MEC", s_proj2_s: "Nokia 5GC CMU + ITRI MEC + 5G NR",
    s_proj3_t: "Portail d'automatisation", s_proj3_s: "Supervision du cœur partagé et des sites clients",
    s_proj4_t: "Système de supervision", s_proj4_s: "Monitoring serveurs & détection d'intrusion",
  },

  en: {
    meta_desc: "Principal 5G / Open RAN Engineer — 10+ years in telecom: 4G/5G SA & NSA, Packet Core, Open RAN, AI-RAN, Edge AI, MEC, Kubernetes and network automation.",
    nav_profile: "Profile", nav_expertise: "Expertise", nav_gallery: "Technologies",
    nav_experience: "Experience", nav_skills: "Skills", nav_education: "Education",
    nav_references: "References", nav_contact: "Contact",

    hero_badge: "Available for roles & consulting",
    hero_title: "Principal 5G / Open RAN Engineer",
    hero_tagline: "Senior telecom engineer with 10+ years of experience, specialized in deploying end-to-end 4G/5G networks — Packet Core, Open RAN, AI-RAN and Edge AI — using both commercial and open-source equipment.",
    chip_networking: "Networking · Automation",
    cta_contact: "Contact me", cta_experience: "View experience", cta_cv: "Download CV",
    hero_location: "New Taipei City, Taiwan", hero_cv_updated: "CV Updated — June 2026",

    profile_eyebrow: "Professional profile",
    profile_title: "An end-to-end telecom engineer",
    profile_lead: "Master's degree in Electrical Engineering and Computer Science (EECS), with over 10 years of experience in the telecommunications industry — specializing in pre-sales, product development, technical issue resolution, project management and customer service.",
    profile_body1: "Nokia 4G/5G Packet Core certified, 4G/5G end-to-end expert, IMS (VoLTE/VoNR), CCNP-level IP networking, Kubernetes, programming and R&D. Experienced in deploying complete 4G and 5G networks using both commercial and open-source equipment.",
    profile_body2: "Cross-functional expertise — telecom technical knowledge, solution sales, project delivery and management, and team leadership — to support new technical challenges.",
    hl1_t: "Nokia 4G/5G Packet Core certified", hl1_d: "IP planning, deployment and testing of the Nokia CMU 5G core.",
    hl2_t: "4G / 5G End-to-End", hl2_d: "SA & NSA, RAN, Packet Core, transport and user equipment.",
    hl3_t: "IMS · VoLTE · VoNR", hl3_d: "Voice and multimedia services over 4G/5G mobile networks.",
    hl4_t: "IP Networking — CCNP level", hl4_d: "Routing, switching, firewalls, VPN and Python automation.",

    expertise_eyebrow: "Key domains", expertise_title: "Core expertise",
    expertise_intro: "Technical domains spanning the full 5G chain — from packet core to radio, from edge to cloud-native automation.",
    exp1_t: "5G Packet Core (5GC)", exp1_d: "Design, configuration and performance testing of the 5G core. Multi-vendor experience: Nokia CMU, Athonet, Ataya, Saviah, Druid. Network function integration via 3GPP APIs.",
    exp2_d: "O-CU / O-DU / O-RU integration and validation. AI-RAN (MIDIA) integration with Open RAN units and AI-driven resource optimization.",
    exp3_d: "Evaluation and deployment of Edge AI solutions. MEC experience (DPI and 3GPP-compliant) and third-party UPF integration with the Nokia core.",
    exp4_t: "Networking — CCNP level", exp4_d: "Switching, routing and firewalls. Cisco, D-Link and Nokia SR OS. Advanced network automation and Python scripting.",
    exp5_t: "Cloud-Native & Automation", exp5_d: "Docker and Kubernetes in production environments. Automation portals, monitoring and scripting in Python and JavaScript.",
    exp6_t: "Testing & Troubleshooting", exp6_d: "Automated test benches and labs. Wireshark, QXDM and network analyzers. Strong ability to solve complex problems.",

    gallery_eyebrow: "Technologies & solutions", gallery_title: "Telecom technology gallery",
    gallery_intro: "A glimpse of the technologies and environments I work with daily. Generic visuals do not imply any official branded product.",

    exp_eyebrow: "Journey", exp_title: "Professional experience",
    exp_intro: "In reverse chronological order. The Purview (freelance) role overlaps with the D-Link position.",
    present: "Present", loc_taiwan: "Taiwan", loc_uk: "United Kingdom", loc_bf: "Burkina Faso",
    liteon_1: "5G small cell and high-power radio testing, deployment and optimization",
    liteon_2: "O-CU / O-DU / O-RU integration and validation",
    liteon_3: "MIDIA AI-RAN integration with Open RAN units",
    liteon_4: "AI-enabled resource optimization and user-experience enhancement",
    liteon_5: "Edge AI solution evaluation and deployment",
    vertex_1: "Integrated and deployed Nokia CMU 5G Core (SA/NSA), including CMM, CMG and APC",
    vertex_2: "Installed, commissioned and maintained private 5G networks and CU/DU/RU environments",
    vertex_3: "Delivered MEC solutions with Nokia, PacketX and ITRI",
    vertex_4: "Troubleshot packet core, RAN, VPN, router and UE issues",
    vertex_5: "Developed automation portal solutions for shared-core environments",
    vertex_6: "Worked extensively with Docker and Kubernetes",
    dlink_role: "Network Consultant / Senior Pre-Sales Engineer",
    dlink_1: "Supported ISP customers globally",
    dlink_2: "Provided technical consultation and pre-sales advice",
    dlink_3: "Performed interoperability testing and lab validation",
    dlink_4: "Troubleshot networking products and solutions",
    dlink_5: "Delivered technical training for engineers",
    dlink_6: "Participated in major ISP projects: Telefónica, Claro, TalkTalk, TATA and Canal+",
    tag_presales: "Pre-sales",
    purview_role: "Network Engineer", badge_freelance: "Freelance", purview_note: "concurrent with the D-Link role",
    purview_1: "L3 switch migrations", purview_2: "Network equipment installation",
    purview_3: "User Acceptance Testing (UAT)", purview_4: "Tested VoIP phones, servers and printers",
    purview_5: "Validated network and internet services",
    nctu_role: "CCNA Teaching Assistant",
    nctu_1: "Delivered CCNA lab training on Cisco routing and switching equipment",
    nctu_2: "WLAN, VPN, QoS and network security", nctu_3: "Hands-on network configuration and troubleshooting",
    marien_role: "Mathematics & Physics Teacher",
    marien_1: "Taught mathematics and physics (grades 9–12)",
    marien_2: "Course and examination delivery",

    skills_eyebrow: "Tech stack", skills_title: "Technical skills",
    skills_intro: "Grouped by domain for clarity. Key technologies are highlighted.",
    sk_telecom: "5G & Telecom", sk_cloud: "Cloud & Automation", sk_netauto: "Network automation",
    sk_net: "Networking", sk_ip: "IP — CCNP level", sk_switch: "Switching", sk_route: "Routing", sk_fw: "Firewalls",
    sk_test: "Testing & Troubleshooting", sk_analyzer: "Network analyzer", sk_testcases: "Automated test cases",
    sk_lab: "Lab environments", sk_broadband: "Broadband", sk_mesh: "Mesh networking",
    sk_sec: "Security & 3GPP", sk_5gsec: "5G security",

    edu_eyebrow: "Education", edu_title: "Academic background",
    edu1_deg: "M.S. — Electrical Engineering & Computer Science (EECS)", edu_major: "Major: Telecommunications",
    edu2_deg: "M.S. — Applied Physics (Energy)", edu3_deg: "Bachelor's Degree — Physics",
    edu4_deg: "Chinese Language Diploma (Mandarin)",
    lang_eyebrow: "Languages", lang_title: "Languages",
    l_fr: "French", l_en: "English", l_zh: "Chinese", lvl_native: "Native", lvl_adv: "Advanced",

    proj_eyebrow: "Achievements", proj_title: "Certifications & projects", proj_intro: "Click an image to enlarge.",

    ref_eyebrow: "Recommendations", ref_title: "References",
    ref1_q: "My supervisor for over 5 years at D-Link; he can attest to my skills and personality.",
    ref1_r: "Director, ZXELL",
    ref2_q: "Collaborated on graduate course delivery and evaluation at NCTU.",
    ref2_r: "Professor at NYCU",
    ref3_q: "Former manager, able to attest to my professional experience.", ref3_r: "Former manager",
    ref4_q: "Academic reference.", ref5_q: "Academic reference.",

    contact_eyebrow: "Contact", contact_title: "Let's work together",
    contact_intro: "Available for full-time work, consulting or freelancing. For a project or a networking role, feel free to get in touch.",
    c_email: "Email", c_phone: "Phone", c_loc: "Location",
    f_fname: "First name", f_lname: "Last name", f_subject: "Subject", f_phone: "Phone", f_email: "Email", f_message: "Message", f_send: "Send",
    f_opt_interview: "Interview", f_opt_project: "Project", f_opt_consult: "Consulting", f_opt_other: "Other",

    footer_rights: "All rights reserved.", footer_top: "Back to top",

    cat_5gcore: "5G Core", cat_openran: "Open RAN", cat_radio: "High-Power Radio", cat_private5g: "Private 5G",
    cat_testing: "Network Testing", cat_smallcell: "Small Cells", cat_arch: "Network Architecture", cat_airan: "AI-RAN", cat_edge: "Edge AI · MEC",
    g_5gcore_t: "5G Core network", g_5gcore_d: "5G SA/NSA Packet Core environments in lab and production.",
    g_openran_t: "Open RAN radio units", g_openran_d: "O-RU / O-DU / O-CU integration and validation.",
    g_radio_t: "4G/5G radio", g_radio_d: "Testing and optimization of high-power cellular radios.",
    g_private5g_t: "Private 5G network", g_private5g_d: "Racks and infrastructure for private 5G deployments.",
    g_testing_t: "Network test bench", g_testing_d: "Telecom test and measurement environments.",
    g_smallcell_t: "Small Cell", g_smallcell_d: "Small cell deployment and optimization.",
    g_arch_t: "Network architecture", g_arch_d: "Design and integration of telecom infrastructure.",
    g_airan_t: "AI-RAN", g_airan_d: "AI-driven RAN optimization on Open RAN units.",
    g_edge_t: "Edge AI & MEC", g_edge_d: "Edge computing and Mobile Edge Computing.",

    s_cert1_t: "Nokia 5G Core certification", s_cert1_s: "Initial registration & PDU session establishment",
    s_cert2_t: "CMU 5GC architecture review", s_cert2_s: "Nokia CMU 5G core architecture",
    s_proj1_t: "5G pre-deployment", s_proj1_s: "Nokia CMU + BBU configuration",
    s_proj2_t: "5G + MEC project", s_proj2_s: "Nokia 5GC CMU + ITRI MEC + 5G NR",
    s_proj3_t: "Automation portal", s_proj3_s: "Shared-core and customer-site monitoring",
    s_proj4_t: "Monitoring system", s_proj4_s: "Server monitoring & intrusion detection",
  }
};

/* ---------- Telecom gallery data (easy to update) ---------- */
const telecomProjects = [
  { image: "images/5gcore.jpeg",     cat: "cat_5gcore",    title: "g_5gcore_t",    desc: "g_5gcore_d",    tags: ["5G SA/NSA", "Nokia CMU", "Packet Core"] },
  { image: "images/5g-radio.jpeg",   cat: "cat_openran",   title: "g_openran_t",   desc: "g_openran_d",   tags: ["O-RU", "O-DU", "O-CU"] },
  { image: "images/4g-radio.jpeg",   cat: "cat_radio",     title: "g_radio_t",     desc: "g_radio_d",     tags: ["4G", "5G NR", "RF"] },
  { image: "images/5g-rack.jpeg",    cat: "cat_private5g", title: "g_private5g_t", desc: "g_private5g_d", tags: ["Private 5G", "CU/DU/RU"] },
  { image: "images/telcom-1.jpg",    cat: "cat_testing",   title: "g_testing_t",   desc: "g_testing_d",   tags: ["Wireshark", "QXDM", "Lab"] },
  { image: "images/telcom-3.jpg",    cat: "cat_arch",      title: "g_arch_t",      desc: "g_arch_d",      tags: ["MEC", "Transport", "Design"] },
  { image: "images/telcom-2.jpg",    cat: "cat_smallcell", title: "g_smallcell_t", desc: "g_smallcell_d", tags: ["Small Cell", "FWA"] },
  { image: null,                     cat: "cat_airan",     title: "g_airan_t",     desc: "g_airan_d",     tags: ["AI-RAN", "MIDIA"] },
  { image: null,                     cat: "cat_edge",      title: "g_edge_t",      desc: "g_edge_d",      tags: ["Edge AI", "MEC"] },
];

/* ---------- Showcase (certificates & projects) data ---------- */
const showcaseItems = [
  { thumb: "media/certificates/intinial-registration-and-pdu-session-establishement.png", full: "media/certificates/intinial-registration-and-pdu-session-establishement.png", title: "s_cert1_t", sub: "s_cert1_s" },
  { thumb: "media/certificates/cmu-5g-architecture-review.png", full: "media/certificates/cmu-5g-architecture-review.png", title: "s_cert2_t", sub: "s_cert2_s" },
  { thumb: "media/projects/fiveG-project-1.jpg", full: "media/projects/fiveG-project-1.jpg", title: "s_proj1_t", sub: "s_proj1_s" },
  { thumb: "media/projects/fiveG-project-5.jpg", full: "media/projects/fiveG-project-5.jpg", title: "s_proj2_t", sub: "s_proj2_s" },
  { thumb: "media/projects/portal-pic-2.png", full: "media/projects/portal-pic-2.png", title: "s_proj3_t", sub: "s_proj3_s" },
  { thumb: "media/projects/ip-system-1.png", full: "media/projects/ip-system-1.png", title: "s_proj4_t", sub: "s_proj4_s" },
];

/* ---------- State ---------- */
let currentLang = "fr";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.fr[key] || key;
}

/* ---------- Apply translations ---------- */
function applyLang(lang) {
  currentLang = translations[lang] ? lang : "fr";
  document.documentElement.setAttribute("lang", currentLang);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });

  renderGallery();
  renderShowcase();
  try { localStorage.setItem("lang", currentLang); } catch (e) {}
}

/* ---------- Render gallery ---------- */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = telecomProjects.map(function (p) {
    const media = p.image
      ? '<img src="' + p.image + '" alt="' + t(p.title) + '" loading="lazy" width="640" height="440" />'
      : '<div class="tile__placeholder">' + t(p.cat) + '</div>';
    const tags = p.tags.map(function (tag) { return '<span class="tag">' + tag + "</span>"; }).join("");
    return (
      '<article class="tile tile--hover reveal is-visible">' +
        '<div class="tile__media"><span class="tile__cat">' + t(p.cat) + "</span>" + media + "</div>" +
        '<div class="tile__body">' +
          '<h3 class="tile__title">' + t(p.title) + "</h3>" +
          '<p class="tile__desc">' + t(p.desc) + "</p>" +
          '<div class="tile__tags">' + tags + "</div>" +
        "</div>" +
      "</article>"
    );
  }).join("");
}

/* ---------- Render showcase ---------- */
function renderShowcase() {
  const grid = document.getElementById("showcaseGrid");
  if (!grid) return;
  grid.innerHTML = showcaseItems.map(function (s) {
    return (
      '<article class="card shot reveal is-visible" data-full="' + s.full + '" tabindex="0" role="button" aria-label="' + t(s.title) + '">' +
        '<div class="shot__media"><img src="' + s.thumb + '" alt="' + t(s.title) + '" loading="lazy" width="480" height="300" /></div>' +
        '<h3 class="shot__title">' + t(s.title) + "</h3>" +
        '<p class="shot__sub">' + t(s.sub) + "</p>" +
      "</article>"
    );
  }).join("");
}

/* ---------- Theme ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

/* ---------- Lightbox ---------- */
function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("is-open");
  document.getElementById("lightboxImg").src = "";
  document.body.style.overflow = "";
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", function () {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language: stored > browser (fr/en) > fr default
  let storedLang = null;
  try { storedLang = localStorage.getItem("lang"); } catch (e) {}
  const browserLang = (navigator.language || "fr").slice(0, 2).toLowerCase();
  const initialLang = storedLang || (browserLang === "en" ? "en" : "fr");
  applyLang(initialLang);

  // Theme: stored > system > dark
  let storedTheme = null;
  try { storedTheme = localStorage.getItem("theme"); } catch (e) {}
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(storedTheme || (prefersLight ? "light" : "dark"));

  // Language buttons
  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.dataset.lang); });
  });

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  // Mobile menu
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      const open = mobileMenu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // Nav scroll state
  const nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
    document.getElementById("toTop").classList.toggle("is-visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Back to top
  document.getElementById("toTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Lightbox delegation
  document.getElementById("showcaseGrid").addEventListener("click", function (e) {
    const shot = e.target.closest(".shot");
    if (shot) openLightbox(shot.dataset.full, shot.getAttribute("aria-label"));
  });
  document.getElementById("showcaseGrid").addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      const shot = e.target.closest(".shot");
      if (shot) { e.preventDefault(); openLightbox(shot.dataset.full, shot.getAttribute("aria-label")); }
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Active nav link via section observation
  const navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__links .nav__link"));
  const sections = navLinks
    .map(function (l) { return document.querySelector(l.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { spy.observe(s); });
  }
});
