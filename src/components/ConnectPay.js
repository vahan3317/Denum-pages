import React from 'react'

function ConnectPay() {
  return (
   <>
   <p className='font-[600] w-[320px] text-[34px] mb-[30px] text-[#333333] md:w-[760px]  lg:w-[1024px] 2xl:w-[1170px] mx-auto '>Подключенные способы оплаты</p>

    <div className='w-[320px] lg:h-[216px] mb-[110px] form mx-auto md:w-[760px]  lg:w-[1024px] 2xl:w-[1170px] md:flex md:justify-around'>
        <div>
             <div className='md:w-[500px] lg:w-[500px] pt-[37px] pl-[40px]   md:flex md:justify-between '>
                  <p className='pl-[40px]   '>Картой (интернет-эквайринг)</p>
                  <div className='pr-[20px]'>
                     <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                      <div class="w-[55px] h-[30px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label> 
                   </div>
              </div>
              <div className=' md:w-[500px] lg:w-[500px] pt-[29px] pl-[40px] md:flex md:justify-between'>
                  <p className='pl-[40px]   '>Картой (интернет-эквайринг)</p>
                  <div className='pr-[20px]'>
                  <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="checked-toggle" class="sr-only peer " />
                    <div class="w-[55px] h-[30px] bg-gray-200  rounded-[23px] peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                   </div>
              </div>
              <p className='pt-[29px] pl-[80px] '>В точке продаж картой (торговый эквайринг)</p>
              <div className='md:block lg:hidden pl-[40px] md:pl-[80px] lg:float-right lg:mt-[25px]   lg:pr-[20px]'>
              <label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
               <input type="checkbox" value="" id="green-toggle" class="sr-only peer" />
               <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
               
             </label>
               </div>

         </div>


         <div className=''>
             <div className='md:w-[390px] lg:w-[600px]  mt-[37px] pl-[40px] lg:flex justify-between border-l-2 border-solid border-gray-300  '>
                  <p >СБП</p>
                  <p className='pr-[40px]    '>
                  <div class=" lg:pr-[60px] 2xl:-mr-[60px]   ">
                  <label for="teal-toggle" class="inline-flex relative items-center  cursor-pointer">
                   <input type="checkbox" value="" id="teal-toggle" class="sr-only peer" />
                   <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                 </label>
                  </div>
                   </p>
              </div>
              <div className='w-auto lg:w-[600px] pt-[29px] pl-[40px] lg:flex justify-between border-l-2 border-solid border-gray-300 '>
                  <p>Рассрочка</p>
                  <p className='pr-[40px] lg:pr-[100px] 2xl:pr-[40px] '>
                  <label for="disabled-checked-toggle" class="inline-flex relative items-center cursor-pointer">
                   <input type="checkbox" value="" id="disabled-checked-toggle" class="sr-only peer" checked disabled />
                   <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   </label>
                   </p>
              </div>
              <div className='hidden lg:block lg:float-right lg:mt-[25px] lg:pr-[20px] '>
              <label for="green-toggle" class="inline-flex relative items-center lg:pr-[80px] 2xl:pr-[20px]  cursor-pointer">
               <input type="checkbox" value="" id="green-toggle" class="sr-only peer" />
               <div class="w-[55px] h-[30px]  bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
               
             </label>
               </div>

         </div>
     </div>
    </>
  )
}

export default ConnectPay