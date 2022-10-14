import React from 'react'

function Tariffs() {
  return (
    <div className='mb-[180px]'>
      <p className='font-[600] w-[320px] text-[34px] mb-[30px] text-[#333333] lg:w-[1170px] mx-auto  '>Тарифы</p>
      <div className='w-auto lg:w-[1170px] lg:h-[504px] mx-auto  form lg:flex lg:justify-around rounded-[8px]'>
       <div className='text-center'>
        <p className='pt-[30px] pb-[22px] text-[20px] font-[600] text-[#333333]'>Прием платежей</p>
        <img src={require('../../assets/tarifFirst.jpg')} className='w-[298px] form rounded-[8px] h-[379px]' />
       </div>
       <div className='text-center'>
       <p className='pt-[30px] pb-[22px] text-[20px] font-[600] text-[#333333]'>Прием платежей</p>
       <img src={require('../../assets/tarifFirst.jpg')} className='w-[298px] form rounded-[8px]  h-[379px]' />
       </div>
       <div className='text-center'>
       <p className='pt-[30px] pb-[22px] text-[20px] font-[600] text-[#333333]'>Прием платежей</p>
       <img src={require('../../assets/tarifFirst.jpg')} className='w-[298px] form rounded-[8px] h-[379px]' />
       </div>
      </div>
    </div>
  )
}

export default Tariffs