import React, { useState, useEffect } from "react";

export default function Navigation({ sections }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionBottom = sectionTop + el.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
      {sections.map((section) =>
        section.id !== "resume" ? (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            aria-label={section.label}
            className={`w-4 h-4 rounded-full border-2 transition
        ${
          active === section.id
            ? "bg-blue-500 border-blue-500 scale-125"
            : "bg-neutral-700 border-neutral-500 hover:border-blue-400"
        }
      `}
          />
        ) : null
      )}
    </div>
  );
}
