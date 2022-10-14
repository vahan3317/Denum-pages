import { useEffect, useState } from "react"
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";

import Income from "./components/Income";
import Transactions from "./components/Transactions";
import FormLink from "./components/FormLink";
import FormAccount from "./components/FormAccount";

import BarChart from "./components/BarChart"; 
import {UserData} from './Data'
import {SecondData} from './SecondData'
import ConnectPay from "./components/ConnectPay";
import Footer from "./components/Footer";

function App() {
 const [userData,setUserData] =useState({
  
    labels:UserData.map((data) =>data.year),
    
   datasets:[{
      label:"Картой",

     data:UserData.map((data) => data.userGain),
     backgroundColor:'#5354E4',
     width:'30px',
     height:'30px',
     borderRadius:'5px',
     borderColor:'#5354E4',
     color:'lightGray',
     borderWidth : 2,
     
    
    },
    {
    label:"СПБ",
    data:SecondData.map((data) => data.userGains),
    backgroundColor:'#B338FF',
    borderColor:'#B338FF',
    
     
   },
  
  ]
   })

  return (
    <div className="App bg-[#FFFFF] ">
     <Navbar />
    <Income />
    <Transactions />
    <FormLink />
    <FormAccount />
    <BarChart chartData ={userData} />
    <ConnectPay />
    <Footer />
    
  
    </div>
  );
}

export default App;
