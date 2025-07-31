import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiPostgresql,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiExpress,
  SiJet,
  SiPython,
  SiVite,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  <FaReact size={40} color="#61DBFB" />,
  <SiRedux size={40} color="#764ABC" />,
  <FaNodeJs size={40} color="#68A063" />,
  <SiPostgresql size={40} color="#6030aeff" />,
  <SiTypescript size={40} color="#007ACC" />,
  <SiHtml5 size={40} color="#E34F26" />,
  <SiCss3 size={40} color="#264DE4" />,
  <FaGithub size={40} color="#333" />,
  <FaGitAlt size={40} color="#F1502F" />,
  <SiDocker size={40} color="#0db7ed" />,
  <SiAmazon size={40} color="#FF9900" />,
  <SiMongodb size={40} color="#4DB33D" />,
  <SiExpress size={40} color="#b5c03cff" />,
  <SiJet size={40} color="#c03cacff" />,
  <SiPython size={40} color="#3776AB" />,
  <SiVite size={40} color="#646CFF" />,
  <SiSocketdotio size={40} color="#c03c3cff" />,
  <SiTailwindcss size={40} color="#38BDF8" />,
];

const JumpingIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<{ x: number; y: number; dx: number; dy: number }[]>(
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Initialize positions & directions
    iconRefs.current = icons.map(() => ({
      x: Math.random() * (containerWidth - 50),
      y: Math.random() * (containerHeight - 50),
      dx: (Math.random() - 0.5) * 2, // random speed between -1 and 1
      dy: (Math.random() - 0.5) * 2,
    }));

    const moveIcons = () => {
      const children = container.children;
      iconRefs.current.forEach((icon, i) => {
        icon.x += icon.dx;
        icon.y += icon.dy;

        // Bounce horizontally
        if (icon.x <= 0 || icon.x >= containerWidth - 50) {
          icon.dx *= -1;
        }

        // Bounce vertically
        if (icon.y <= 0 || icon.y >= containerHeight - 50) {
          icon.dy *= -1;
        }

        const element = children[i] as HTMLElement;
        element.style.transform = `translate(${icon.x}px, ${icon.y}px)`;
      });

      requestAnimationFrame(moveIcons);
    };

    moveIcons();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        overflow: "hidden",
        background: "#111",
        borderRadius: "12px",
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            willChange: "transform",
            transition: "transform 0.1s linear",
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default JumpingIcons;
