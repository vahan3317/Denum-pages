import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <nav className="">
        <div className=" mx-auto    ">
          <div className="flex h-[100px] items-center  justify-between border-b-2 border-[rgba(51, 51, 51, 0.4)]  ">
           <div className=" w-[320px] md:w-[760px] lg:w-[1024px] 2xl:w-[1170px]      flex justify-between mx-auto">
            <div className="flex justify-center items-center ">
              <Link to={`/`}> <img src={require('../assets/Logo.png')} className='w-[122px]' /></Link>
            </div>
            <div>
            <div  className="hidden lg:flex lg:justify-center lg:items-center   lg:block    ">
                <Link
                  to={`/`}
                  className="w-[160px] h-[44px] 2xl:w-[217px] 2xl:h-[44px] focus:border-2 focus:border-[#5354E4] focus:text-[#5354E4] flex justify-center items-center   block  rounded-[12px] "
                >
                  <svg width="18" height="19"  viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_313_73)">
                  <path d="M9 18.5L6.75 15.125H7.875V12.875H10.125V15.125H11.25L9 18.5ZM16.875 1.625V10.625H1.125V1.625H16.875ZM18 0.5H0V11.75H18V0.5Z" fill="#333333"/>
                  <path d="M9 2.75C9.89511 2.75 10.7536 3.10558 11.3865 3.73851C12.0194 4.37145 12.375 5.22989 12.375 6.125C12.375 7.02011 12.0194 7.87855 11.3865 8.51149C10.7536 9.14442 9.89511 9.5 9 9.5H14.625V8.375H15.75V3.875H14.625V2.75H9ZM5.625 6.125C5.625 5.22989 5.98058 4.37145 6.61351 3.73851C7.24645 3.10558 8.10489 2.75 9 2.75H3.375V3.875H2.25V8.375H3.375V9.5H9C8.10489 9.5 7.24645 9.14442 6.61351 8.51149C5.98058 7.87855 5.625 7.02011 5.625 6.125Z" fill="#333333"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_313_73">
                  <rect width="18" height="18"  transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span className="pl-[8px]">
                    Прием платежей
                  </span>
                </Link>

                <Link
                 to={`/TransactionDetails`}
                  className="w-[160px] h-[44px] 2xl:w-[217px] 2xl:h-[44px] group   hover:border-2 border-[#5354E4] hover:text-[#5354E4]  flex justify-center items-center   block  rounded-[12px]"
                >
                  <svg width="18" height="18"  viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 15V9.375M10 15V6M14.5 15V12.75M16.75 1.5H3.25C2.65326 1.5 2.08097 1.73705 1.65901 2.15901C1.23705 2.58097 1 3.15326 1 3.75V17.25C1 17.8467 1.23705 18.419 1.65901 18.841C2.08097 19.2629 2.65326 19.5 3.25 19.5H16.75C17.3467 19.5 17.919 19.2629 18.341 18.841C18.7629 18.419 19 17.8467 19 17.25V3.75C19 3.15326 18.7629 2.58097 18.341 2.15901C17.919 1.73705 17.3467 1.5 16.75 1.5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span className="pl-[8px]">
                  Учет и Аналитика
                  </span>
                </Link>

                <a
                  href="#"
                  className="w-[160px] h-[44px] w-[180px] xl:w-[217px] 2xl:h-[44px] hover:border-2 border-[#5354E4] hover:text-[#5354E4] flex justify-center items-center   block  rounded-[12px]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_301_139)">
                  <path d="M9 0.5L11.25 3.875H10.125V6.125H7.875V3.875H6.75L9 0.5ZM16.875 8.375V17.375H1.125V8.375H16.875ZM18 7.25H0V18.5H18V7.25Z" fill="#003000"/>
                  <path d="M9 9.5C9.44321 9.5 9.88208 9.5873 10.2916 9.75691C10.701 9.92652 11.0731 10.1751 11.3865 10.4885C11.6999 10.8019 11.9485 11.174 12.1181 11.5834C12.2877 11.9929 12.375 12.4318 12.375 12.875C12.375 13.3182 12.2877 13.7571 12.1181 14.1666C11.9485 14.576 11.6999 14.9481 11.3865 15.2615C11.0731 15.5749 10.701 15.8235 10.2916 15.9931C9.88208 16.1627 9.44321 16.25 9 16.25H14.625V15.125H15.75V10.625H14.625V9.5H9ZM5.625 12.875C5.625 11.9799 5.98058 11.1214 6.61351 10.4885C7.24645 9.85558 8.10489 9.5 9 9.5H3.375V10.625H2.25V15.125H3.375V16.25H9C8.10489 16.25 7.24645 15.8944 6.61351 15.2615C5.98058 14.6286 5.625 13.7701 5.625 12.875Z" fill="#003000"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_301_139">
                  <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span className="pl-[8px]">
                    Отправка платежей
                  </span>
                </a>

               
                <Link
                 to="/profile"
                  className="w-[160px] h-[44px] 2xl:w-[217px] 2xl:h-[44px] focus:border-2 focus:border-[#5354E4] focus:text-[#5354E4]  flex justify-center items-center   block  rounded-[12px]"
                >
                  <svg width="18" height="18" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_301_116)">
                    <path d="M7.9991 8.86667C8.85108 8.86667 9.68393 8.60666 10.3923 8.11952C11.1007 7.63238 11.6528 6.93998 11.9789 6.1299C12.3049 5.31981 12.3902 4.42842 12.224 3.56843C12.0578 2.70845 11.6475 1.91851 11.0451 1.2985C10.4427 0.678482 9.6751 0.256248 8.83949 0.0851872C8.00388 -0.0858739 7.13774 0.00192089 6.35062 0.337469C5.56349 0.673018 4.89072 1.24125 4.41738 1.97031C3.94405 2.69936 3.69141 3.5565 3.69141 4.43334C3.69141 5.60913 4.14525 6.73676 4.9531 7.56817C5.76095 8.39959 6.85663 8.86667 7.9991 8.86667ZM7.9991 1.26667C8.60766 1.26667 9.20255 1.45239 9.70855 1.80035C10.2145 2.14831 10.6089 2.64287 10.8418 3.2215C11.0747 3.80014 11.1356 4.43685 11.0169 5.05112C10.8982 5.66539 10.6051 6.22964 10.1748 6.67251C9.7445 7.11537 9.19624 7.41697 8.59938 7.53916C8.00251 7.66134 7.38385 7.59863 6.82161 7.35895C6.25938 7.11928 5.77883 6.7134 5.44073 6.19264C5.10263 5.67189 4.92218 5.05964 4.92218 4.43334C4.92218 3.59348 5.24635 2.78803 5.82339 2.19416C6.40042 1.6003 7.18305 1.26667 7.9991 1.26667Z" fill="#333333"/>
                    <path d="M15.6738 13.5343C14.687 12.4608 13.4977 11.6058 12.1788 11.0214C10.8599 10.437 9.43902 10.1356 8.00308 10.1356C6.56713 10.1356 5.14627 10.437 3.82736 11.0214C2.50845 11.6058 1.3192 12.4608 0.332309 13.5343C0.118348 13.7695 -0.000484254 14.0798 1.48327e-06 14.402V17.7333C1.48327e-06 18.0693 0.129671 18.3915 0.360485 18.629C0.591299 18.8665 0.90435 19 1.23077 19H14.7692C15.0957 19 15.4087 18.8665 15.6395 18.629C15.8703 18.3915 16 18.0693 16 17.7333V14.402C16.0022 14.0807 15.8856 13.7705 15.6738 13.5343ZM14.7692 17.7333H1.23077V14.3957C2.10291 13.4505 3.15279 12.6979 4.31653 12.1836C5.48026 11.6693 6.73351 11.4041 8 11.4041C9.26649 11.4041 10.5197 11.6693 11.6835 12.1836C12.8472 12.6979 13.8971 13.4505 14.7692 14.3957V17.7333Z" fill="#333333"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_301_116">
                    <rect width="16" height="19" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span className="pl-[8px] ">
                      Профиль
                    </span>
                </Link>
                
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#5354E4] w-[36px] h-[36px] text-white rounded-[24px]  lg:px-0">D</div>    
            <div className=" flex block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            
           </div>
           
           
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              
                <Link
                  to={`/`}
                  className="w-[160px] h-[44px] 2xl:w-[217px] 2xl:h-[44px] focus:border-2 focus:border-[#5354E4] focus:text-[#5354E4] flex justify-center items-center   block  rounded-[12px] "
                >
                  <svg width="18" height="19"  viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_313_73)">
                  <path d="M9 18.5L6.75 15.125H7.875V12.875H10.125V15.125H11.25L9 18.5ZM16.875 1.625V10.625H1.125V1.625H16.875ZM18 0.5H0V11.75H18V0.5Z" fill="#333333"/>
                  <path d="M9 2.75C9.89511 2.75 10.7536 3.10558 11.3865 3.73851C12.0194 4.37145 12.375 5.22989 12.375 6.125C12.375 7.02011 12.0194 7.87855 11.3865 8.51149C10.7536 9.14442 9.89511 9.5 9 9.5H14.625V8.375H15.75V3.875H14.625V2.75H9ZM5.625 6.125C5.625 5.22989 5.98058 4.37145 6.61351 3.73851C7.24645 3.10558 8.10489 2.75 9 2.75H3.375V3.875H2.25V8.375H3.375V9.5H9C8.10489 9.5 7.24645 9.14442 6.61351 8.51149C5.98058 7.87855 5.625 7.02011 5.625 6.125Z" fill="#333333"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_313_73">
                  <rect width="18" height="18"  transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span className="pl-[8px]">
                    Прием платежей
                  </span>
                </Link>

                <Link
                 to={`/TransactionDetails`}
                  className="w-[160px] h-[44px] 2xl:w-[217px] 2xl:h-[44px] focus:border-2 focus:border-[#5354E4] focus:text-[#5354E4]  flex justify-center items-center   block  rounded-[12px]"
                >
                  <svg width="18" height="18"  viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 15V9.375M10 15V6M14.5 15V12.75M16.75 1.5H3.25C2.65326 1.5 2.08097 1.73705 1.65901 2.15901C1.23705 2.58097 1 3.15326 1 3.75V17.25C1 17.8467 1.23705 18.419 1.65901 18.841C2.08097 19.2629 2.65326 19.5 3.25 19.5H16.75C17.3467 19.5 17.919 19.2629 18.341 18.841C18.7629 18.419 19 17.8467 19 17.25V3.75C19 3.15326 18.7629 2.58097 18.341 2.15901C17.919 1.73705 17.3467 1.5 16.75 1.5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span className="pl-[8px] ">
                  Учет и Аналитика
                  </span>
                </Link>

                <a
                  href="#"
                  className="w-[160px] h-[44px] w-[180px] xl:w-[217px] 2xl:h-[44px] hover:border-2 border-[#5354E4] hover:text-[#5354E4] flex justify-center items-center   block  rounded-[12px]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_301_139)">
                  <path d="M9 0.5L11.25 3.875H10.125V6.125H7.875V3.875H6.75L9 0.5ZM16.875 8.375V17.375H1.125V8.375H16.875ZM18 7.25H0V18.5H18V7.25Z" fill="#003000"/>
                  <path d="M9 9.5C9.44321 9.5 9.88208 9.5873 10.2916 9.75691C10.701 9.92652 11.0731 10.1751 11.3865 10.4885C11.6999 10.8019 11.9485 11.174 12.1181 11.5834C12.2877 11.9929 12.375 12.4318 12.375 12.875C12.375 13.3182 12.2877 13.7571 12.1181 14.1666C11.9485 14.576 11.6999 14.9481 11.3865 15.2615C11.0731 15.5749 10.701 15.8235 10.2916 15.9931C9.88208 16.1627 9.44321 16.25 9 16.25H14.625V15.125H15.75V10.625H14.625V9.5H9ZM5.625 12.875C5.625 11.9799 5.98058 11.1214 6.61351 10.4885C7.24645 9.85558 8.10489 9.5 9 9.5H3.375V10.625H2.25V15.125H3.375V16.25H9C8.10489 16.25 7.24645 15.8944 6.61351 15.2615C5.98058 14.6286 5.625 13.7701 5.625 12.875Z" fill="#003000"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_301_139">
                  <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span className="pl-[8px]">
                    Отправка платежей
                  </span>
                </a>

               
                <Link
                 to="/profile"
                  className="w-[160px] h-[44px] 2xl:w-[217px] 2xl:h-[44px] focus:border-2 focus:border-[#5354E4] focus:text-[#5354E4]  flex justify-center items-center   block  rounded-[12px]"
                >
                  <svg width="18" height="18" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_301_116)">
                    <path d="M7.9991 8.86667C8.85108 8.86667 9.68393 8.60666 10.3923 8.11952C11.1007 7.63238 11.6528 6.93998 11.9789 6.1299C12.3049 5.31981 12.3902 4.42842 12.224 3.56843C12.0578 2.70845 11.6475 1.91851 11.0451 1.2985C10.4427 0.678482 9.6751 0.256248 8.83949 0.0851872C8.00388 -0.0858739 7.13774 0.00192089 6.35062 0.337469C5.56349 0.673018 4.89072 1.24125 4.41738 1.97031C3.94405 2.69936 3.69141 3.5565 3.69141 4.43334C3.69141 5.60913 4.14525 6.73676 4.9531 7.56817C5.76095 8.39959 6.85663 8.86667 7.9991 8.86667ZM7.9991 1.26667C8.60766 1.26667 9.20255 1.45239 9.70855 1.80035C10.2145 2.14831 10.6089 2.64287 10.8418 3.2215C11.0747 3.80014 11.1356 4.43685 11.0169 5.05112C10.8982 5.66539 10.6051 6.22964 10.1748 6.67251C9.7445 7.11537 9.19624 7.41697 8.59938 7.53916C8.00251 7.66134 7.38385 7.59863 6.82161 7.35895C6.25938 7.11928 5.77883 6.7134 5.44073 6.19264C5.10263 5.67189 4.92218 5.05964 4.92218 4.43334C4.92218 3.59348 5.24635 2.78803 5.82339 2.19416C6.40042 1.6003 7.18305 1.26667 7.9991 1.26667Z" fill="#333333"/>
                    <path d="M15.6738 13.5343C14.687 12.4608 13.4977 11.6058 12.1788 11.0214C10.8599 10.437 9.43902 10.1356 8.00308 10.1356C6.56713 10.1356 5.14627 10.437 3.82736 11.0214C2.50845 11.6058 1.3192 12.4608 0.332309 13.5343C0.118348 13.7695 -0.000484254 14.0798 1.48327e-06 14.402V17.7333C1.48327e-06 18.0693 0.129671 18.3915 0.360485 18.629C0.591299 18.8665 0.90435 19 1.23077 19H14.7692C15.0957 19 15.4087 18.8665 15.6395 18.629C15.8703 18.3915 16 18.0693 16 17.7333V14.402C16.0022 14.0807 15.8856 13.7705 15.6738 13.5343ZM14.7692 17.7333H1.23077V14.3957C2.10291 13.4505 3.15279 12.6979 4.31653 12.1836C5.48026 11.6693 6.73351 11.4041 8 11.4041C9.26649 11.4041 10.5197 11.6693 11.6835 12.1836C12.8472 12.6979 13.8971 13.4505 14.7692 14.3957V17.7333Z" fill="#333333"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_301_116">
                    <rect width="16" height="19" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span className="pl-[8px] ">
                      Профиль
                    </span>
                </Link>
                
              
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;