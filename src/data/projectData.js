import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import verbenas from "../assets/img-projects/challenge-newyze.png";

export const projects = [
  /* =========================
     UX / UI CASE STUDIES
  ========================== */
  {
    titulo: "Wedding in Cartagena",
    descripcion:
      "UX/UI case study and front-end implementation for a luxury wedding brand. From Figma to production with performance and accessibility in mind.",
    imagen: urbanStyle.src,
    tecnologias: ["Figma", "UX Research", "Astro", "Tailwind"],
    demo: "/projects/wedding-in-cartagena",
    type: "ux-ui",
    status: "published",
  },

  {
    titulo: "Londri — Laundry Service UX",
    descripcion:
      "End-to-end UX case study for a laundry service application, focused on research, service design, and iterative prototyping.",
    imagen: imgNote.src,
    tecnologias: ["UX Research", "Service Design", "Figma"],
    demo: "/projects/londri-ux-case-study",
    type: "ux-ui",
    status: "published",
  },

  {
    titulo: "Divina Providencia",
    descripcion:
      "UX/UI and front-end development for a boutique accommodation experience inspired by modern hospitality platforms.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "Tailwind", "UX/UI"],
    demo: "/projects/divina-providencia",
    type: "ux-ui",
    status: "published",
  },

  /* =========================
     FRONT-END PROJECTS
  ========================== */
  {
    titulo: "Legal Services Landing Page",
    descripcion:
      "Front-end development of a marketing funnel for legal services, focused on clarity, conversion and SEO.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    type: "frontend",
    status: "coming-soon",
  },

  {
    titulo: "Healthcare Marketing Landing",
    descripcion:
      "High-performance landing page for healthcare services with SEO and accessibility considerations.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    type: "frontend",
    status: "coming-soon",
  },

  {
    titulo: "Fitness Coaching Platform",
    descripcion:
      "Front-end implementation for a fitness consulting website with responsive and accessible UI.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "Tailwind"],
    demo: "https://gym-page-sandy.vercel.app/",
    type: "frontend",
    status: "coming-soon",
  },

  {
    titulo: "Startup Challenge — Marketing Website",
    descripcion:
      "Static website built as a startup challenge, focused on UI clarity and performance.",
    imagen: verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    type: "frontend",
    status: "coming-soon",
  },

  /* =========================
     E-COMMERCE (ANONYMIZED)
  ========================== */
  {
    titulo: "Furniture Store E-commerce Migration",
    descripcion:
      "Large-scale e-commerce migration and UI refactor for a furniture retailer. Case study coming soon.",
    imagen: urbanStyle.src,
    tecnologias: ["HTML", "CSS", "Bootstrap", "CMS"],
    demo: "#",
    type: "ecommerce",
    status: "coming-soon",
  },

  {
    titulo: "Appliance Retailer — CMS Migration",
    descripcion:
      "Front-end migration and accessibility improvements for a major appliance retailer. Case study in progress.",
    imagen: urbanStyle.src,
    tecnologias: ["Bootstrap", "WCAG", "CMS"],
    demo: "#",
    type: "ecommerce",
    status: "coming-soon",
  },

  {
    titulo: "Mattress Brand Online Store",
    descripcion:
      "UI refactor and performance optimization for a mattress e-commerce platform. Documentation coming soon.",
    imagen: urbanStyle.src,
    tecnologias: ["HTML", "CSS", "Performance"],
    demo: "#",
    type: "ecommerce",
    status: "coming-soon",
  },
];
