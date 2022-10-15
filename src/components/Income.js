import React from 'react'
import BaseLayout from "./childComponents/MainIncome";
import MainIncomeChild from './childComponents/MainIncomeChild';
function Income() {
  return (
    <div className='mx-auto'>
     <MainIncomeChild />
    
    
    <div className=' w-[320px] md:w-[796px] lg:w-[1053px] 2xl:w-[1270px]     md:flex md:justify-self-start mx-auto '>
        <BaseLayout>
       <BaseLayout.Header>
         <h1>Кол-во транзакций</h1>
       </BaseLayout.Header>

       <BaseLayout.Body>
         <p>210</p>
         
       </BaseLayout.Body>

       <BaseLayout.Footer>
         <p><span className='text-[#7D7D7D] text-[16px] font-[500]'>Из них от юр. лиц -</span> 12</p>
       </BaseLayout.Footer>
     </BaseLayout>
     <BaseLayout>


       <BaseLayout.Header>
         <h1>Поступления</h1>
       </BaseLayout.Header>

       <BaseLayout.Body>
         <p>510 000 <span className='text-[#5354E4] '> ₽</span> </p>
         
       </BaseLayout.Body>

       <BaseLayout.Footer>
         <p><span className='text-[#7D7D7D] text-[16px] font-[500]'>4 730 ₽</span> не принято</p>
       </BaseLayout.Footer>
     </BaseLayout>



     <BaseLayout>
       <BaseLayout.Header>
         <h1>Успешность платежей</h1>
       </BaseLayout.Header>

       <BaseLayout.Body>
         <p>99,7 <span className='text-[#5354E4] '> %</span></p>
         
       </BaseLayout.Body>

       <BaseLayout.Footer>
         <p><span className='text-[#7D7D7D] text-[16px] font-[500]'>Количество ошибок -</span>1</p>
       </BaseLayout.Footer>
     </BaseLayout>
   </div>
  </div>
  )
}

export default Income