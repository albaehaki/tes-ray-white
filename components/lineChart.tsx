

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
  data: number[];
  labels: string[];
  name:  string;
}

const LineChart: React.FC<LineChartProps> = ({ data, labels, name }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const canvas = chartRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        const newChart = new Chart(canvas, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: data,
                borderColor: name === "Masuk" ? 'green' : name === "Keluar" ? "red" : 'yellow',
                fill: false,
                pointRadius: 0,
                cubicInterpolationMode: 'monotone',
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          },
        });

        chartInstanceRef.current = newChart;
      }
    }
  }, [data, labels]);

  return <canvas className='w-[100px]' ref={chartRef} />;
};

export default LineChart;
