"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ThermodynamicGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Grid density. Lower = chunky, Higher = smooth. Default: 25 */
  resolution?: number;
  /** Cooling rate (0 to 1). Higher = trails fade faster. Default: 0.98 */
  coolingFactor?: number;
}

const ThermodynamicGrid = ({
  className,
  resolution = 25,
  coolingFactor = 0.98,
  style,
  ...props
}: ThermodynamicGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let grid: Float32Array;
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;

    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, active: false };

    /** Palette Paris Incendie — noir → orange #FC5000 → blanc chaud */
    const getThermalColor = (t: number) => {
      const r = Math.min(255, Math.max(5, 5 + t * 247));
      const g = Math.min(255, Math.max(5, Math.max(0, (t - 0.15) * 280)));
      const b = Math.min(80, Math.max(5, Math.max(0, (t - 0.55) * 60)));
      return `rgb(${r}, ${g}, ${b})`;
    };

    const setPointer = (clientX: number, clientY: number, active: boolean) => {
      const rect = container.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.active = active;
    };

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.ceil(width / resolution);
      rows = Math.ceil(height / resolution);
      grid = new Float32Array(cols * rows).fill(0);
    };

    const handleMouseMove = (e: MouseEvent) => setPointer(e.clientX, e.clientY, true);
    const handleMouseLeave = () => { mouse.active = false; };
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) setPointer(touch.clientX, touch.clientY, true);
    };
    const handleTouchEnd = () => { mouse.active = false; };

    const update = () => {
      if (mouse.active) {
        const dx = mouse.x - mouse.prevX;
        const dy = mouse.y - mouse.prevY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.ceil(dist / (resolution / 2));

        for (let s = 0; s <= steps; s++) {
          const t = steps > 0 ? s / steps : 0;
          const x = mouse.prevX + dx * t;
          const y = mouse.prevY + dy * t;
          const col = Math.floor(x / resolution);
          const row = Math.floor(y / resolution);
          const radius = 2;

          for (let i = -radius; i <= radius; i++) {
            for (let j = -radius; j <= radius; j++) {
              const c = col + i;
              const r = row + j;
              if (c >= 0 && c < cols && r >= 0 && r < rows) {
                const idx = c + r * cols;
                const d = Math.sqrt(i * i + j * j);
                if (d <= radius) {
                  grid[idx] = Math.min(1.0, grid[idx] + 0.3 * (1 - d / radius));
                }
              }
            }
          }
        }
      }

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = c + r * cols;
          const temp = grid[idx];
          grid[idx] *= coolingFactor;

          if (temp > 0.05) {
            const x = c * resolution;
            const y = r * resolution;
            ctx.fillStyle = getThermalColor(temp);
            const size = resolution * (0.8 + temp * 0.5);
            const offset = (resolution - size) / 2;
            ctx.beginPath();
            ctx.rect(x + offset, y + offset, size, size);
            ctx.fill();
          } else if (c % 2 === 0 && r % 2 === 0) {
            const x = c * resolution;
            const y = r * resolution;
            ctx.fillStyle = "#141414";
            ctx.fillRect(x + resolution / 2 - 1, y + resolution / 2 - 1, 2, 2);
          }
        }
      }
    };

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    resize();
    let running = true;
    const loop = () => {
      if (!running) return;
      update();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [resolution, coolingFactor]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 z-0 overflow-hidden bg-[#050505]", className)}
      style={style}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default ThermodynamicGrid;
