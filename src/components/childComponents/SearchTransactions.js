import React from 'react'

function SearchTransactions() {
  return (
    // <div className=' mx-auto w-[320px] md:w-[730px] lg:w-[990px] lg:w-[1053px] xl:w-[1170px] md:flex md:justify-between   '>
    //  <div className='text-center font-[600] text-[34px] text-[#333333] '>
    //  Транзакции
    //  </div>
    // <div className='relative ] '>
    // <input type="search" id="search-dropdown" class="block p-2.5 mx-auto w-[270px] md:w-[340px] z-50 " placeholder="Search" required />
    //         <button type="submit" class="absolute w-[40px]  h-[40px] top-0 xl:right-1  rounded-[8px]  p-2.5 bg-[#5354E4]"><svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    // </div>
    // </div>

    <div className='mx-auto w-[270px] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]   md:flex md:justify-between  mt-[30px] '>
    <div className=' font-[600] text-[34px] text-[#333333] '>
    Транзакции
    </div>
    <div className='mt-[10px] relative'>
    <input type="search" id="search-dropdown" class="block p-2.5 inp mx-auto border-none font-[400] text-[19px] text-[#757575] w-[270px] md:w-[340px] z-50 " placeholder="Поиск..." required />
          <button type="submit" class="absolute  left-[226px] md:left-[296px] top-[2px] text-white  w-[40px]   h-[40px] top-0 xl:right-1  rounded-[8px]  p-2.5 bg-[#5354E4]"><svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    </div>
   </div>
  )
}

export default SearchTransactions