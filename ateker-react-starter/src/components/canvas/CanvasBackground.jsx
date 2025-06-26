// src/components/canvas/CanvasBackground.jsx
import React, { useEffect, useRef } from "react";
import "./canvasBackground.scss";

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const palette = [
      "#eeeeee",
      "#230520",
      "#ffbf00",
      "#574b8b",
      "#64b9a4",
      "#29ab87",
      "#FF69B4",
    ];

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    const cols = 150;
    const rows = 150;
    const cellSize = 25;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let grid = createGrid();
    let frameCount = 0;

    function createGrid() {
      return new Array(rows).fill(null).map(() =>
        new Array(cols).fill(null).map(() => {
          const alive = Math.random() > 0.9 ? 1 : 0;
          return {
            alive,
            color: alive ? randomColor() : null,
            opacity: alive ? 1 : 0,
          };
        })
      );
    }

    function drawGrid(grid) {
      context.fillStyle = "#fefefe";
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cell = grid[y][x];
          if (cell.opacity > 0.01) {
            const rgba = hexToRgba(cell.color || "#eeeeee", cell.opacity);
            context.beginPath();
            context.arc(
              x * cellSize + cellSize / 2,
              y * cellSize + cellSize / 2,
              cellSize / 3.2,
              0,
              Math.PI * 2
            );
            context.fillStyle = rgba;
            context.fill();
          }
        }
      }
    }

    function getNextGen(grid) {
      const nextGen = grid.map((arr) => arr.map((cell) => ({ ...cell })));

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const neighbors = getAliveNeighbors(grid, x, y);
          const cell = grid[y][x];

          if (cell.alive && (neighbors.length < 2 || neighbors.length > 3)) {
            nextGen[y][x].alive = 0;
            nextGen[y][x].color = cell.color;
          } else if (!cell.alive && neighbors.length === 3) {
            nextGen[y][x].alive = 1;
            nextGen[y][x].color = blendColors(neighbors.map((n) => n.color));
          }

          if (Math.random() < 0.0006) {
            nextGen[y][x].alive = 1;
            nextGen[y][x].color = randomColor();
          }
        }
      }
      return nextGen;
    }

    function update() {
      drawGrid(grid);
      grid = grid.map((row, y) =>
        row.map((cell) => {
          const targetAlive = cell.alive;
          const next = { ...cell };

          if (targetAlive) {
            next.opacity = Math.min(1, cell.opacity + 0.05);
          } else {
            next.opacity = Math.max(0, cell.opacity - 0.03);
          }

          return next;
        })
      );

      if (frameCount % 15 === 0) {
        grid = getNextGen(grid);
      }

      frameCount++;
      requestAnimationFrame(update);
    }

    function getAliveNeighbors(grid, x, y) {
      const neighbors = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          const col = (x + j + cols) % cols;
          const row = (y + i + rows) % rows;
          if (grid[row][col].alive) {
            neighbors.push(grid[row][col]);
          }
        }
      }
      return neighbors;
    }

    function randomColor() {
      return palette[Math.floor(Math.random() * palette.length)];
    }

    function blendColors(colors) {
      const rgb = colors.map(hexToRgb);
      const len = rgb.length;
      const avg = rgb.reduce(
        (acc, val) => {
          acc.r += val.r / len;
          acc.g += val.g / len;
          acc.b += val.b / len;
          return acc;
        },
        { r: 0, g: 0, b: 0 }
      );
      return `rgb(${avg.r | 0}, ${avg.g | 0}, ${avg.b | 0})`;
    }

    function hexToRgb(hex) {
      const cleanHex = hex.replace("#", "");
      return {
        r: parseInt(cleanHex.substring(0, 2), 16),
        g: parseInt(cleanHex.substring(2, 4), 16),
        b: parseInt(cleanHex.substring(4, 6), 16),
      };
    }

    function hexToRgba(hex, opacity) {
      const rgb = hexToRgb(hex);
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    }

    update();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="canvas-wrapper">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasBackground;
