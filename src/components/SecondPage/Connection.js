import React from 'react'

function ConnectPay() {
  return (
   <>
   <p className='font-[600] w-[320px] text-[34px] mb-[30px] text-[#333333] lg:w-[1170px] mx-auto '>Подключенные способы оплаты</p>

    <div className='w-[320px] lg:h-[216px] mb-[110px] form mx-auto lg:w-[1170px] lg:flex lg:justify-between text-[20px] font-[600] text-[#333333] rounded-[8px]'>
        <div>
             <div className='w-auto lg:w-[500px] pt-[37px] pl-[40px] lg:flex justify-between  '>
                  <p>Выплаты</p>
                  <p>
                     <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                      <div class="w-[55px] h-[30px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label> 
                   </p>
              </div>
              <div className='w-auto lg:w-[500px] pt-[29px] pl-[40px] lg:flex justify-between'>
                  <p>Интернет-эквайринг</p>
                  <p>
                  <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" />
                    <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                   </p>
              </div>
              <div className='w-auto lg:w-[500px] pt-[29px] pl-[40px] lg:flex justify-between'>
                  <p>Система Быстрых Платежей</p>
                  <p>
                  <label for="red-toggle" class="inline-flex relative items-center  cursor-pointer">
                  <input type="checkbox" value="" id="red-toggle" class="sr-only peer"  />
                  <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                   </p>
              </div>
             

         </div>


         <div className=''>
             <div className='w-auto lg:w-[600px] mt-[37px] pl-[40px] lg:flex justify-between border-l-2 border-solid border-gray-300  '>
                  <p>Мобильная коммерция</p>
                  <p className='pr-[40px]'>
                  <div class="  ">
                  <label for="teal-toggle" class="inline-flex relative items-center  cursor-pointer">
                   <input type="checkbox" value="" id="teal-toggle" class="sr-only peer"  />
                   <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                 </label>
               

                </div>
                   </p>
              </div>
              <div className='w-auto lg:w-[600px] pt-[29px] pl-[40px] lg:flex justify-between border-l-2 border-solid border-gray-300 '>
                  <p>Торговый эквайринг</p>
                  <p className='pr-[40px]'>
                  <label for="disabled-checked-toggle" class="inline-flex relative items-center cursor-pointer">
                   <input type="checkbox" value="" id="disabled-checked-toggle" class="sr-only peer"  checked  />
                   <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   </label>
                   </p>
              </div>
              <div className='w-auto lg:w-[600px] pt-[29px] pl-[40px] lg:flex justify-between border-l-2 border-solid border-gray-300 '>
                  <p>Рассрочка</p>
                  <p className='pr-[20px]'>
                  <label for="purple-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" id="purple-toggle" class="sr-only peer"  />
                  <div class="w-[55px] h-[30px] bg-gray-200 rounded-[23px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[23px] after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  
                </label>
                   </p>
              </div>
           

         </div>
     </div>
    </>
  )
}

export default ConnectPay