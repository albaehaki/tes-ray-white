"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: '',
              data: data,
              borderColor: '',
              fill: false,
              pointRadius: 0,
              cubicInterpolationMode: 'monotone',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false, // Menyembunyikan sumbu X
            },
            y: {
              display: false, // Menyembunyikan sumbu Y
            },
          },
        },
      });
    }
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
