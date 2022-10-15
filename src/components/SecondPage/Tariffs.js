import React from 'react'

function Tariffs() {
  return (
    <div className='mb-[180px]'>
      <p className='font-[600] w-[320px] text-[34px] mb-[30px] text-[#333333] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]  mx-auto  '>Тарифы</p>
      <div className=' md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]  mx-auto  form md:flex md:justify-around rounded-[8px]'>
       <div className='text-center border-r-2 border-solid pr-10 pb-[50px] '>
        <p className='pt-[30px] pb-[22px] text-[20px] font-[600] text-[#333333]'>Прием платежей</p>
        <img src={require('../../assets/tarifFirst.jpg')} className=' w-[320px] lg:w-[298px]  rounded-[8px] h-[379px] mx-auto' />
       </div>
       <div className='text-center border-r-2 border-solid pr-12 '>
       <p className='pt-[30px] pb-[22px] text-[20px] font-[600] text-[#333333]'>Прием платежей</p>
       <img src={require('../../assets/tarifSecond.jpg')} className=' w-[320px] lg:w-[298px]  rounded-[8px]  h-[379px] mx-auto' />
       </div>
       <div className='text-center'>
       <p className='pt-[30px] pb-[22px] text-[20px] font-[600] text-[#333333]'>Прием платежей</p>
       <img src={require('../../assets/tarifTirth.jpg')} className=' w-[320px] lg:w-[298px]  rounded-[8px] h-[379px] mx-auto' />
       </div>
      </div>
    </div>
  )
}

export default Tariffs