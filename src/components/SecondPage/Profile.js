import React from 'react'
import Footer from '../Footer'
import NavBar from '../Navbar'
import Connection from './Connection'

import AboutCompany from './AboutCompany'
import Tariffs from './Tariffs'
function Profile() {
  return (
    <div>
     
     <AboutCompany />
     <Connection />
     <Tariffs />
     <Footer />
     </div>
  )
}

export default Profile