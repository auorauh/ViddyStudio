import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./StickyScroll.css"; // Import the CSS file

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    offset: ["start end", "end start"],
    });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const gradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  let active = 0; // default first card

  if (latest >= 0 && latest < 0.40) {
    active = 0;
  } else if (latest >= 0.40 && latest < 0.45) {
    active = 1;
  } else if (latest >= 0.45 && latest < 0.50) {
    active = 2;
  } else {
    active = content.length - 1; // last card for anything else
  }

  setActiveCard(active);
});

  return (
    <motion.div
      ref={ref}
    //   animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className="sticky-scroll-container"
    >
      <div className="sticky-scroll-left">
        {content.map((item, index) => (
          <div key={index} className="sticky-scroll-item">
            <div className="sticky-scroll-spacer" />
            <motion.h2
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="sticky-scroll-title"
            >
              {item.title}
            </motion.h2>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="sticky-scroll-description"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        
      </div>

      <div className="sticky-scroll-right">
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
