import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutScroll({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
  ".about-reveal",
  {
    opacity: 0,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      end: "top 45%",
      scrub: true,
    },
  }
);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      {children}
    </section>
  );
}
