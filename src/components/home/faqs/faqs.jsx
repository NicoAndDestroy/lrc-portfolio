import React, { useState } from "react";

/* =========================
   ICONOS POR CATEGORÍA
========================= */
const CategoryIcons = {
  "UX / UI Process & Design": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M5 3h14v2H5V3zm0 4h9v2H5V7zm0 4h14v2H5v-2zm0 4h9v2H5v-2z" />
    </svg>
  ),

  "Front-End & Implementation": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3ZM20 11H4V19H20V11ZM20 5H4V9H20V5Z" />
    </svg>
  ),

  "Accessibility & Inclusive Design": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm7 6H5v2h6v12h2V10h6V8z" />
    </svg>
  ),

  "Tools & Technologies": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M14.7 6.3a1 1 0 010 1.4l-1 1 2.6 2.6 1-1a1 1 0 011.4 1.4l-1 1 1.3 1.3-1.4 1.4-1.3-1.3-1 1a1 1 0 01-1.4-1.4l1-1-2.6-2.6-1 1a1 1 0 01-1.4-1.4l1-1L8.3 7.7 6.9 9.1 5.5 7.7l2.8-2.8a1 1 0 011.4 0l1 1 2.6-2.6-1-1a1 1 0 011.4-1.4l1 1z" />
    </svg>
  ),

  "Collaboration & Workflow": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
};

/* =========================
   CONTENIDO FAQ
========================= */
const skills = {
  "UX / UI Process & Design": [
    "I approach projects from a UX-first perspective. My process includes research, benchmarking, user personas, user flows, information architecture, wireframing (low, mid, and high fidelity), and iterative UI design in Figma. Design decisions are validated through usability principles, accessibility guidelines, and conversion-oriented thinking."
  ],

  "Front-End & Implementation": [
    "I translate UX and UI decisions into clean, scalable, and accessible front-end code. I work with HTML5, CSS3, modern JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap 5, Astro, and React, ensuring design consistency, responsiveness, and performance."
  ],

  "Accessibility & Inclusive Design": [
    "Accessibility is a core part of my workflow, not an afterthought. I implement WCAG AA standards using semantic HTML, proper heading structure, ARIA when needed, keyboard navigation, focus management, and sufficient color contrast. Accessibility is treated as a UX requirement."
  ],

  "Tools & Technologies": [
    "I use Figma for design systems, wireframes, and prototypes. On the development side, I work with Git, GitHub, Astro, React, Tailwind, Bootstrap, and CMS platforms such as WordPress, WooCommerce, Shopify (Liquid), and custom CMS environments."
  ],

  "Collaboration & Workflow": [
    "I collaborate closely with designers, PMs, QA, and developers in Agile environments (Scrum and Kanban). I document decisions, participate in reviews, and prioritize scalable solutions that benefit both users and development teams."
  ]
};

/* =========================
   COMPONENTE
========================= */
const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
          About me and my work
        </h2>

        <ul className="mt-8 space-y-4 text-lg">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer rounded-2xl transition-all"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between gap-2">
                    <span className="text-lg font-bold text-white">
                      {category}
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 transform text-primary transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M12 15.5l-6-6 1.4-1.4L12 12.7l4.6-4.6L18 9.5z" />
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-300">
                    {items}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;
