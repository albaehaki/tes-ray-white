import React, {FC} from 'react'

// component
import LineChart from './lineChart';

interface CardChartD {
  name: string;
  value: number;
  dataChart: number[];
  labels: string[];
}

const CardChart: FC<CardChartD> = ({dataChart, name, value, labels}) => {
   
  return (
    
          <div className={`flex justify-between border-l-2 rounded-xl h-16 gap-10 ${name === "Masuk" ? 'border-green-800' : name === "Keluar" ? "border-red-800" : 'border-yellow-800'}`}>
            <div className="text-left ml-5">
              <p className="text-xl font-semibold mt-2">{name}</p>
              <p className="text-gray-500 text-sm">{value}</p>
            </div>
            <div className="p-3">
              <LineChart data={dataChart} labels={labels} name={name} />
            </div>
          </div>
  
  )
}

export default CardChart