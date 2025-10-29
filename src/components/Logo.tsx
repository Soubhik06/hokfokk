import { useRef } from "react";

type LogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  rounded?: boolean;
};

const Logo = ({
  src = "/logo.png",
  alt = "ALchemix",
  width = 72,
  height = 72,
  rounded = true,
}: LogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10; // tilt range
    const ry = ((x / rect.width) - 0.5) * 10;
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget as HTMLDivElement;
    const rect = parent.getBoundingClientRect();
    // spawn a few sparkles
    for (let i = 0; i < 8; i++) {
      const span = document.createElement("span");
      span.className = "sparkle";
      const angle = (Math.PI * 2 * i) / 8;
      const distance = 16 + Math.random() * 10;
      span.style.left = `${e.clientX - rect.left}px`;
      span.style.top = `${e.clientY - rect.top}px`;
      span.style.setProperty("--sx", `${Math.cos(angle) * distance}px`);
      span.style.setProperty("--sy", `${Math.sin(angle) * distance}px`);
      parent.appendChild(span);
      setTimeout(() => span.remove(), 650);
    }
  };

  const gradientStyle: React.CSSProperties = {
    background: `conic-gradient(from 0deg at 50% 50%, hsl(var(--brand) / 0.4), transparent 55%, hsl(var(--brand) / 0.4))`,
  };

  const innerBorder: React.CSSProperties = {
    border: "1px solid hsl(var(--brand) / 0.25)",
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className="relative inline-flex items-center justify-center select-none will-change-transform transition-[transform,filter] duration-200 hover:drop-shadow-[0_6px_22px_hsl(var(--brand)/0.25)]"
      style={{ width, height }}
      aria-label={alt}
    >
      <div
        className={["p-[3px] shadow-lg", rounded ? "rounded-full" : "rounded-md"].join(" ")}
        style={gradientStyle}
      >
        <div
          className={[
            "overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80",
            rounded ? "rounded-full" : "rounded-md",
          ].join(" ")}
          style={innerBorder}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={["object-contain w-full h-full", rounded ? "rounded-full" : "rounded-md"].join(" ")}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;


