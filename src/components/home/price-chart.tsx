'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useInView } from 'motion/react';

export default function PriceChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: false });

  useEffect(() => {
    if (!isInView || !canvasRef.current) return;

    const mixedChart = new Chart(canvasRef.current, {
      data: {
        datasets: [
          {
            type: 'line',
            label: 'Annual Revenue',
            data: [1, 12, 36, 42, 64, 70, 82, 100],
            borderColor: 'oklch(60.994% 0.2804 324.43)',
            borderWidth: 6,
          },
          {
            type: 'bar',
            label: 'Prices for Services',
            data: [1, 12, 36, 42, 64, 70, 82, 100],
            backgroundColor: 'oklch(86.741% 0.00726 249.26)',
          },
        ],
        labels: ['', '', '', '', '', '', '', ''],
      },
      options: {
        animation: {
          duration: 2000,
          easing: 'easeOutQuart',
          delay: 500,
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: true,
              width: 3,
            },
          },
          y: {
            grid: {
              display: false,
            },
            border: {
              display: false,
              width: 3,
              color: 'oklch(86.741% 0.00726 249.26)',
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });

    return () => mixedChart.destroy();
  }, [isInView]);

  return (
    <div ref={wrapperRef}>
      <canvas ref={canvasRef} width="400" height="150"></canvas>
    </div>
  );
}
