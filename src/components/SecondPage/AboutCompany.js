import React from 'react'

function AboutCompany() {
  return (
    <>
   <p className='font-[600] w-[320px] pt-[30px] text-[34px] text-[#333333] lg:w-[1170px]  mx-auto '>О компании</p>

    <div className='mx-auto w-[320px] h-[900px]  lg:w-[1170px] lg:h-[504px] form  rounded-[8px] mb-[35px] '>
        <div className='w-[100%]   lg:flex lg:justify-around mt-[35px]  '>
               <div className='mt-[25px]'>
                       <p className='text-[20px] font-[600] text-[#333333]'>Название (полностью)</p>
                       <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className='mt-[25px]'>
               <p className='text-[20px] font-[600] text-[#333333]'>ИНН</p>
                <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px] -pr-4' placeholder='Денум' disabled />
               </div>
             </div>
             <div>

        </div>
        <div className='w-[100%]    lg:flex lg:justify-around  '>
               <div className='mt-[25px]'>
                       <p className='text-[20px] font-[600] text-[#333333]'>Вид деятельности</p>
                       <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className='mt-[25px] '>
                        <p className='text-[20px] font-[600] text-[#333333]'>ОГРН / ОРНИП</p>
                        <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px] -pr-4' placeholder='Денум' disabled />
               </div>
               
             </div>
             <div className='w-[100%]    lg:flex lg:justify-around   '>
               <div className='mt-[25px]'>
                       <p className='text-[20px] font-[600] text-[#333333]'>Юридический адрес</p>
                       <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className='mt-[25px] '>
                        <p className='text-[20px] font-[600] text-[#333333]'>Учредители</p>
                        <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px] -pr-4' placeholder='Денум' disabled />
               </div>
               
             </div>
             <div className='w-[100%]    lg:flex lg:justify-around   '>
               <div className='mt-[25px]'>
                       <p className='text-[20px] font-[600] text-[#333333]'>Фактический адрес</p>
                       <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px]'  placeholder='Денум' disabled />
               </div>
               <div className='mt-[25px] '>
                        <p className='text-[20px] font-[600] text-[#333333]'>Банковские реквизиты</p>
                        <input type="text" className='lg:w-[530px] input rounded-[8px] mt-[13px] -pr-4' placeholder='Денум' disabled />
               </div>
               
             </div>
             <div>
              
        </div>
        
     </div>
     </>
  )
}

export default AboutCompany