import React from 'react'

function ConnectPay() {
  return (
   <>
   <div className='w-[320px] mx-auto text-center form md:w-[760px] lg:w-[1024px] 2xl:w-[1170px] mb-[110px] '>

<div className= 'pt-4 md:flex pt-[37px] rounded-[8px] text-[22px] text-[#333333] font-[600] '>
         <div className='mb-4'>
            <div className='md:flex md:w-[380px] lg:w-[500px] md:justify-between'>
              <div className='md:pl-[21px]'>Выплаты</div>
             <div className='md:pr-4'>
             <label for="default-toggle" class="inline-flex  relative items-center cursor-pointer">
               <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
               <div class="w-[55px] h-[30px]  bg-gray-200 peer-focus:outline-none    rounded-[23px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
               </label> 
              </div>

            </div>
            <div className='md:flex md:w-[380px] lg:w-[500px] md:justify-between mt-2'>
              <div className='md:pl-[21px]'>Интернет-эквайринг</div>
             <div className='md:pr-4'>
             <label for="default-toggle" class="inline-flex  relative items-center cursor-pointer">
               <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
               <div class="w-[55px] h-[30px]   bg-gray-200 peer-focus:outline-none    rounded-[23px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
               </label> 
              </div>

            </div>
            
              
              <div className='md:flex md:w-[380px] lg:w-[500px] md:justify-between mt-2'>
              <div className='md:pl-[21px]'>Система Быстрых Платежей</div>
              <div className='md:pr-4'>
         <label for="checked-toggle" class="inline-flex relative   items-center cursor-pointer">
             <input type="checkbox" value="" id="checked-toggle" class="sr-only peer " />
             <div class="w-[55px] h-[30px] bg-gray-200 peer-focus:outline-none    rounded-[23px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
           </label>
            </div>
            
            

            
            </div>
         </div>
          <div className='border-l-2 border-solid'>
            <div className='md:flex md:w-[380px] lg:w-[515px] xl:w-[515px] 2xl:w-[665px] md:justify-between  '>
              <div className='md:pl-[21px]'>Мобильная коммерция </div>
              <div class="  md:pr-4 ">
           <label for="teal-toggle" class="inline-flex relative    items-center  cursor-pointer">
            <input type="checkbox" value="" id="teal-toggle" class="sr-only peer" />
            <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700  peer-focus:ring-blue-400 dark:peer-focus:ring-[#5354E4] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
          </label>
          </div>
            </div>
            <div className='md:flex md:w-[365px] lg:w-[500px] xl:w-[500px] 2xl:w-[650px] md:justify-between mt-2 '>
              <div className='md:pl-[21px]'> Торговый эквайринг </div>
              <div class="   ">
           <label for="teal-toggle" class="inline-flex relative    items-center  cursor-pointer">
            <input type="checkbox" value="" id="teal-toggle" class="sr-only peer" />
            <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700  peer-focus:ring-blue-400 dark:peer-focus:ring-[#5354E4] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-[#5354E4]"></div>
          </label>
          </div>
            </div>
            <div className='md:flex md:w-[365px] lg:w-[500px] xl:w-[500px] 2xl:w-[650px] md:justify-between mt-2 '>
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




</div>

    </>
  )
}

export default ConnectPay