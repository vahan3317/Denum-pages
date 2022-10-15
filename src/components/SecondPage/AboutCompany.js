import React from 'react'

function AboutCompany() {
  return (
    
   <>
   <p className='font-[600] w-[320px] mt-[30px]  text-[34px] md:text-[24px] text-[#333333] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]  mx-auto '>О компании</p>

    <div className='mx-auto  w-[320px] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px] form  rounded-[8px] mb-[35px] font-["Raleway"] '>
        <div className='w-[100%]  text-center md:text-left   md:flex md:justify-around mt-[30px]    '>
               <div className='mt-[35px]'>
                       <p className='text-[20px] font-[600] text-[#333333] pt-[32px] md:pt-0'>Название (полностью)</p>
                       <input type="text" className=' w-[270px] md:w-[320px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className='mt-[12px] md:mt-[35px]'>
               <p><span className='text-[20px] font-[600] text-[#333333]'>ИНН</span></p>
                        <input type="text" className=' w-[270px] md:w-[320px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px] ' placeholder='112233' disabled />
               </div>
             </div>
             <div>

        </div>
        <div className='w-[100%]  text-center md:text-left   md:flex md:justify-around md:mt-[25px]   '>
               <div className=''>
                       <p className='text-[20px] font-[600] text-[#333333] pt-[32px] md:pt-0'>Вид деятельности</p>
                       <input type="text" className=' w-[270px]  md:w-[320px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className=''>
               <p><span className='text-[20px] font-[600] text-[#333333]'>ОГРН / ОРНИП</span></p>
                        <input type="text" className=' w-[270px]  md:w-[320px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px] ' placeholder='112233' disabled />
               </div>
             </div>
             <div>

        </div>
        <div className='w-[100%]  text-center   md:text-left  md:flex md:justify-around md:pt-[25px]    '>
               <div className=' '>
                       <p className='text-[20px] font-[600] text-[#333333]'>Юридический адрес</p>
                       <input type="text" className=' w-[270px]  md:w-[320px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className=' '>
                        <p className='text-[20px] font-[600] text-[#333333]'>Учредители</p>
                        <input type="text" className='w-[270px] md:w-[320px] lg:w-[430px] 2xl:w-[530px] text-[17px] text-[#333333] input rounded-[8px] mt-[13px] ' placeholder='Денум' disabled />
               </div>
               
             </div>
             <div>
             <div className='w-[100%]  text-center md:text-left   md:flex md:justify-around md:mt-[25px]   '>
               <div className='mb-[25px] md:mb-[50px]'>
                       <p className='text-[20px] font-[600] text-[#333333] pt-[32px] md:pt-0'>Фактический адрес</p>
                       <input type="text" className=' w-[270px]  md:w-[320px] lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px]' placeholder='Денум' disabled />
               </div>
               <div className=' '>
               <p><span className='text-[20px] font-[600] text-[#333333]'>Банковские реквизиты</span></p>
                        <input type="text" className=' w-[270px]  md:w-[320px] mb-[25px] md:mb-0 lg:w-[430px] 2xl:w-[530px] input rounded-[8px] mt-[13px] ' placeholder='112233' disabled />
               </div>
             </div>
             <div>

        </div>
        </div>
        
     </div>
     </>
  )
}

export default AboutCompany