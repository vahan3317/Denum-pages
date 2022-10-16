import React from 'react'

function ConnectPay() {
  return (

<>
<p className='font-[600] w-[320px]  text-[34px] md:text-[34px] text-[#333333] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]  mx-auto mb-[30px] '>Подключенные способы оплаты</p>

<div className='w-[320px] mx-auto text-center form md:w-[760px] lg:w-[1024px] 2xl:w-[1170px] mb-[110px] rounded-[8px] '>

        <div className= 'pt-4 md:flex pt-[37px]'>
                 <div>
                    <div className='md:flex md:w-[400px] lg:w-[500px] md:justify-around'>
                      <div>Картой (интернет-эквайринг)</div>
                     <div>
                     <label for="default-toggle" class="inline-flex  relative items-center cursor-pointer">
                       <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                       <div class="w-[55px] h-[30px]  bg-gray-200 peer-focus:outline-none    rounded-[23px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
                       </label> 
                      </div>

                    </div>
                    
                      
                      <div className='md:flex md:w-[395px] lg:w-[490px] md:justify-around'>
                      <div className='pl-[8px]'>Со счета мобильного телефона</div>
                      <div className=''>
                 <label for="checked-toggle" class="inline-flex relative   items-center cursor-pointer">
                     <input type="checkbox" value="" id="checked-toggle" class="sr-only peer " />
                     <div class="w-[55px] h-[30px] bg-gray-200 peer-focus:outline-none    rounded-[23px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
                   </label>
                    </div>

                    
                    </div>
                 </div>
                  <div className='border-l-2 border-solid'>
                    <div className='md:flex md:w-[320px] lg:w-[500px] 2xl:w-[629px] md:justify-between '>
                      <div className='md:pl-[21px]'> СБП </div>
                      <div class="   ">
                   <label for="teal-toggle" class="inline-flex relative    items-center  cursor-pointer">
                    <input type="checkbox" value="" id="teal-toggle" class="sr-only peer" />
                    <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700  peer-focus:ring-blue-400 dark:peer-focus:ring-[#5354E4] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
                  </label>
                  </div>
                    </div>
                    <div className='md:flex md:w-[320px] lg:w-[500px] 2xl:w-[629px] md:justify-between'>
                      <div className='md:pl-[21px]'> Рассрочка </div>
                      <div >
                   <label for="disabled-checked-toggle" class="inline-flex   relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="disabled-checked-toggle" class="sr-only peer" checked disabled />
                    <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
                  </label>
                </div>
                    </div>
                  </div>
        </div>
    
    
    <div className='md:flex md:w-[720px] lg:w-[1000px] 2xl:w-[1129px]  md:justify-between md:pt-[12px]'>
      <div className='md:pl-[30px] lg:pl-[57px] mb-4  lg:mb-12'>В точке продаж картой (торговый эквайринг)</div>
      <div className=' md:block '>
              <label for="green-toggle" class="inline-flex mb-4 relative items-center  cursor-pointer">
               <input type="checkbox" value="" id="green-toggle" class="sr-only peer" />
               <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
               
             </label>
             </div>
      
    </div>

</div>


</>




  )
}

export default ConnectPay