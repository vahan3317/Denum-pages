import React from "react";
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}){

 return( 
  <>
                <p className='font-[600] w-[320px] text-[34px] text-[#333333] md:w-[760px]  lg:w-[1024px] 2xl:w-[1170px] mx-auto '>Статистика по способам оплаты</p>

                <div className="some w-auto  md:w-[760px] md:text-center lg:w-[1024px] 2xl:w-[1170px] form mx-auto flex mt-[30px] mb-[35px] rounded-[8px]">
                <Line  data={chartData} className=''  />
                </div>
        
</>
        )   
}


export default BarChart;