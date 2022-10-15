import React from 'react'

function Footer() {
  return (
      <footer className='w-full border-t-2 border-solid border-gray-300'>
       <div className='mx-auto text-center  pt-[54px] mb-[54px] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px] lg:flex lg:justify-between'>
        <div>
         <img src={require('../assets/Logo.png')} className='  w-[122px]' />
         <p className='pt-[54px] '>Denum.Pay © 2022. Все права защищены.</p>
        </div>
        <div>
         <p className='text-left'>Прием платежей</p>
         <p className='pt-[20px] '>Отправка платежей</p>
        </div>
        <div>
         <p  >Учет и Аналитика</p>
         <p className='pt-[20px] text-left'>Профиль</p>
        </div>

       </div>
         
      </footer>
  )
}

export default Footer