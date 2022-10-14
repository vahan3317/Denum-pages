import React from 'react'

function FormAccount() {
  return (
    <>
   <p className='font-[600] w-[320px]  text-[34px] md:text-[24px] text-[#333333] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]  mx-auto '>Формирование счета для оплаты юридическим лицом</p>

    <div className='mx-auto w-[320px] h-[600px]  md:w-[760px] md:text-center lg:w-[1024px] 2xl:w-[1170px] lg:h-[380px] form  rounded-[8px] mb-[35px] '>
        <div className='w-[100%]   lg:flex lg:justify-around mt-[30px]  '>
               <div className='mt-[44px]'>
                       <p className='text-[20px] font-[600] text-[#333333]'>Юридическое лицо</p>
                       <input type="text" className='md:w-[330px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px]' />
               </div>
               <div className='mt-[44px]'>
               <p><span className='text-[20px] font-[600] text-[#333333]'>Сумма</span><span className='text-[#5354E4] font-[600] text-[20px]'> ₽</span></p>
                        <input type="text" className='md:w-[330px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px] -pr-4' />
               </div>
             </div>
             <div>

        </div>
        <div className='w-[100%]    lg:flex lg:justify-around pt-[44px]  '>
               <div className='mt-[25px]'>
                       <p className='text-[20px] font-[600] text-[#333333]'>Email получателя счета</p>
                       <input type="text" className='md:w-[330px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px]' />
               </div>
               <div className='mt-[25px] '>
                        <p className='text-[20px] font-[600] text-[#333333]'>Номер заказа</p>
                        <input type="text" className='md:w-[330px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px] -pr-4' />
               </div>
               
             </div>
             <div>
              <div className=''>
             <button className='btn text-white w-[260px] h-[50px] flex justify-center items-center  mr-[40px] rounded-[13px] float-right  bg-[#5354E4]    mt-[25px]    '>Сформировать</button>
             </div>
        </div>
        
     </div>
     </>
  )
}

export default FormAccount