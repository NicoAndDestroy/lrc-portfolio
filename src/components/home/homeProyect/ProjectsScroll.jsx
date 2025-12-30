import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsScroll({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="project-scroll">
      <div ref={containerRef} className="project-scroll__inner">
        {children}
      </div>
    </section>
  );
}
