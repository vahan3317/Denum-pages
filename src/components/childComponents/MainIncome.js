import React from "react"

function Header() {
 return null
}

function Body() {
 return null
}

function Footer() {
 return null
}

class BaseLayout extends React.Component {
 static Header = Header
 static Body = Body
 static Footer = Footer

 render() {
   const {children} = this.props
   const header = children.find(child => child.type === Header)
   const body = children.find(child => child.type === Body)
   const footer = children.find(child => child.type === Footer)
   
   return (
     <div class=" mx-auto w-[320px] md:w-[230px] lg:w-[320px]  cards bg-[#FFFFFF] mt-[30px] mb-[35px] pt-[15px] px-[20px] pb-[22px] rounded-[8px] font-['Raleway']">
       <header className="font-['Raleway'] font-[600] text-[20px] text-[#333333]">
         {header ? header.props.children : null}
       </header>
       <main className="font-[600] text-[40px] text-[#333333]">
         {body ? body.props.children : null}
       </main>
       <footer>
         {footer ? footer.props.children : null}
       </footer>
     </div>      
   )
 }
}

export default BaseLayout