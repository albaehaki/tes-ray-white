import React from 'react'

// component
import LineChart from './lineChart';

const CardChart = () => {
    const chartData = [10, 80, 50, 90, 70];
  const chartLabels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
  return (
    
          <div className="flex justify-between border-l-2 rounded-xl border-green-800 h-16 gap-10">
            <div className="text-left ml-5">
              <p className="text-xl font-semibold mt-2">nama</p>
              <p className="text-gray-500 text-sm">9238479723</p>
            </div>
            <div className="p-3">
              <LineChart data={chartData} labels={chartLabels} />
            </div>
          </div>
  
  )
}

export default CardChart