import { useEffect, useRef } from "react";

const BINARY_CHARS = ["0", "1"];

function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.35,
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.35,
    };

    let columns = [];
    let animationFrameId = 0;
    let rafThrottle = 0;

    const randomBinary = () =>
      Array.from(
        { length: 12 + Math.floor(Math.random() * 12) },
        () => BINARY_CHARS[Math.floor(Math.random() * BINARY_CHARS.length)],
      ).join("");

    const setupColumns = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columnWidth = width < 700 ? 18 : 22;
      const count = Math.ceil(width / columnWidth);

      columns = Array.from({ length: count }, (_, index) => ({
        x: index * columnWidth,
        y: Math.random() * -height,
        speed: 0.7 + Math.random() * 1.8,
        length: 8 + Math.floor(Math.random() * 16),
        glyphs: Array.from(
          { length: 8 + Math.floor(Math.random() * 8) },
          randomBinary,
        ),
      }));
    };

    const drawBackdrop = (width, height) => {
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        240,
      );
      glow.addColorStop(0, "rgba(70, 255, 170, 0.18)");
      glow.addColorStop(0.45, "rgba(25, 140, 85, 0.09)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    };

    const drawColumns = (height) => {
      context.textBaseline = "top";
      context.font = "14px IBM Plex Mono, Consolas, monospace";

      columns.forEach((column) => {
        column.y += column.speed;

        if (column.y - column.length * 18 > height) {
          column.y = -Math.random() * height * 0.4;
          column.speed = 0.7 + Math.random() * 1.8;
          column.length = 8 + Math.floor(Math.random() * 16);
          column.glyphs = Array.from(
            { length: 8 + Math.floor(Math.random() * 8) },
            randomBinary,
          );
        }

        for (let i = 0; i < column.length; i += 1) {
          const y = column.y - i * 18;
          const binary = column.glyphs[i % column.glyphs.length];
          const alpha = Math.max(0, 0.9 - i * 0.07);

          if (y < -24 || y > height + 24) {
            continue;
          }

          context.fillStyle =
            i === 0
              ? `rgba(210, 255, 228, ${Math.min(1, alpha + 0.15)})`
              : `rgba(86, 255, 159, ${alpha})`;
          context.fillText(binary, column.x, y);
        }
      });
    };

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      context.fillStyle = "rgba(3, 10, 8, 0.16)";
      context.fillRect(0, 0, width, height);

      drawBackdrop(width, height);
      drawColumns(height);

      animationFrameId = window.requestAnimationFrame(render);
    };

    const renderReduced = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);
      drawBackdrop(width, height);
      drawColumns(height);
    };

    const handlePointerMove = (event) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
    };

    const handleResize = () => {
      if (rafThrottle) {
        window.cancelAnimationFrame(rafThrottle);
      }

      rafThrottle = window.requestAnimationFrame(() => {
        setupColumns();
        if (mediaQuery.matches) {
          renderReduced();
        }
      });
    };

    setupColumns();

    if (mediaQuery.matches) {
      renderReduced();
    } else {
      animationFrameId = window.requestAnimationFrame(render);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.cancelAnimationFrame(rafThrottle);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="matrix-background" aria-hidden="true">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="matrix-vignette"></div>
    </div>
  );
}

export default MatrixBackground;
