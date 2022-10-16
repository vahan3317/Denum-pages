import React from 'react'
import BaseLayout from "../childComponents/MainIncome";
import Footer from '../Footer';

function TransactionDetails() {
  return (
    <div className='font-["Raleway"]'>
     <div className=' flex md:w-[760px] lg:w-[1024px] 2xl:w-[1170px] mx-auto pt-[38px]    '>
      
      <div className='mx-auto flex justify-center items-center md:mx-0'>
      <span className='  '>
       <svg width="9" height="22" viewBox="0 0 9 22" className='' fill="none" xmlns="http://www.w3.org/2300/svg">
       <path d="M0.45 11.6L7.2 20.6C7.77661 21.3688 9 20.961 9 20L9 2C9 1.03899 7.77661 0.63119 7.2 1.4L0.45 10.4C0.183333 10.7556 0.183333 11.2444 0.45 11.6Z" fill="#333333"/>
       </svg>
       </span>
      <span className='pl-[11px] text-[#333333] text-[34px] font-[600]'> Транзакции </span>
      </div>
      
      </div>
     <div class="mx-auto pt-[30px] w-[320px] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px] md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3">
         <div className='w-[320px] font-[600] mt-[22px] md:pt-0 md:w-[230px] md:h-[120px] lg:w-[320px] xl:w-[340px] 2xl:w-[370px] form rounded-[8px] 2xl:pt-[15px] pl-[20px] '>
          <p className='text-[20px] text-[#333333] text-center 2xl:text-left  '>Время транзакции</p>
          <div className='2xl:flex 2xl:justify-between'>
           <p className=' flex justify-center items-center  text-[40px] text-[#333333]'>01.09.2022</p>
           <div className=' flex justify-center items-center  text-[#5354E4]  2xl:text-[30px] 2xl:px-[34px]  '>12:22</div>
          </div>

         </div>
         <div className='w-[320px] font-[600] mt-[22px] md:pt-0 md:w-[230px] md:h-[120px] lg:w-[320px] xl:w-[340px] 2xl:w-[370px] form rounded-[8px] 2xl:pt-[15px] pl-[20px]  '>
          <p className='text-[#333333] text-[20px] text-center 2xl:text-left '>Способ</p>
          <p className='text-[#5354E4] text-[40px] text-center 2xl:text-left '>Картой</p>
         

         </div>
         <div className='w-[320px] font-[600] mt-[22px] md:pt-0 md:w-[230px] md:h-[120px] lg:w-[320px] xl:w-[340px] 2xl:w-[370px] form rounded-[8px] 2xl:pt-[15px] pl-[20px]'>
          <p className='text-[20px] text-[#333333] text-center 2xl:text-left  '>Сколько</p>
          <p className='text-[40px] text-[#333333] text-center 2xl:text-left '>41 250,00 <span className='text-[#5354E4]'> ₽ </span></p>
          

         </div>
         <div className='w-[320px] mt-[22px] font-[600] md:pt-0 md:w-[230px] md:h-[120px] lg:w-[320px] xl:w-[340px] 2xl:w-[370px] form rounded-[8px] 2xl:pt-[15px] pl-[20px] '>
          <p className='text-[20px] text-[#333333] text-center 2xl:text-left  '>% Комиссии</p>
          <p className='text-[40px] text-[#333333] text-center 2xl:text-left '>2.9 <span className='text-[#5354E4]'> % </span></p>
          

         </div>
         <div className='w-[320px] mt-[22px] font-[600] md:pt-0 md:w-[230px] md:h-[120px] lg:w-[320px] xl:w-[340px] 2xl:w-[370px] form rounded-[8px] 2xl:pt-[15px] pl-[20px] '>
         <p className='text-[20px] text-[#333333] text-center 2xl:text-left '>Сумма комиссии</p>
          <p className='text-[40px] text-[#333333] text-center 2xl:text-left '>107,30  <span className='text-[#5354E4]'> ₽ </span></p>
          

         </div>
         <div className='w-[320px] mt-[22px] font-[600] md:pt-0 md:w-[230px] md:h-[120px] lg:w-[320px] xl:w-[340px] 2xl:w-[370px] form rounded-[8px] 2xl:pt-[15px] pl-[20px] mb-[389px]'>
         <p className='text-[#333333] text-[20px] text-center 2xl:text-left '>Способ</p>
          <p className='text-[#5354E4] text-[40px] text-center 2xl:text-left '>Картой</p>

         </div>
      </div>
      
    </div>
  )
}

export default TransactionDetails