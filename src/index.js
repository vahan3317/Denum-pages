import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Profile from './components/SecondPage/Profile';
import  Navbar  from './components/Navbar';
import TransactionDetails from './components/TransactionDetails/TransactionDetails';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Navbar />
    <Routes>
      
      <Route path="/" element={<App />} />
      
      <Route path="/profile" element={<Profile />} />
      <Route path="/TransactionDetails" element={<TransactionDetails />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
