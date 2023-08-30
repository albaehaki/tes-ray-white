import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Referensi ke instance grafik

  // ...
useEffect(() => {
  if (chartRef.current) {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const canvas = chartRef.current;
    const context = canvas.getContext('2d');

    // Periksa null sebelum menggunakan context
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
              borderColor: 'green',
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
// ...


  return <canvas className='w-1/2' ref={chartRef} />;
};


export default LineChart;
