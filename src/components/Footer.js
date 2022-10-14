import React from 'react'

function Footer() {
  return (
      <footer className='w-full border-t-2 border-solid border-gray-300'>
       <div className='mx-auto text-center  pt-[54px] mb-[54px] lg:w-[1070px] lg:flex lg:justify-between'>
        <div>
         <img src={require('../assets/Logo.png')} className=' mx-auto w-[122px]' />
         <p className='pt-[54px]'>Denum.Pay © 2022. Все права защищены.</p>
        </div>
        <div>
         <p>Прием платежей</p>
         <p className='pt-[20px]'>Отправка платежей</p>
        </div>
        <div>
         <p >Учет и Аналитика</p>
         <p className='pt-[20px]'>Профиль</p>
        </div>

       </div>
         
      </footer>
  )
}

export default Footer