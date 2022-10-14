import React from 'react'
import Dropdown from './Dropdown'

function MainIncomeChild() {
  return (
    <div className='mx-auto text-center md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]   md:flex md:justify-between  mt-[30px] '>
     <div className=' font-[600] text-[34px] text-[#333333] '>
     Главные цифры доходов
     </div>
     <div className='mt-[10px]'>
      <Dropdown />
     </div>
    </div>
  )
}

export default MainIncomeChild