import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routenav from "./components/routenav";
import Header from "./components/Refianance/Header";
import Footer from "./components/Refianance/Footer";

function App() {
  localStorage.setItem("radiostatus1","")
  localStorage.setItem("radiostatus2","")
  localStorage.setItem("zipcode","")
  localStorage.setItem("city","")
  localStorage.setItem("state","")
  localStorage.setItem("home_value","200000")
  localStorage.setItem("mortgage_bal","")
  localStorage.setItem("add_cash","")
  localStorage.setItem("loan_type","")
  localStorage.setItem("prop_desc","")
  localStorage.setItem("spouse_stat","")
  localStorage.setItem("credit_grade","")
  localStorage.setItem("bankruptcy","")
  localStorage.setItem("emp_stat","")
  localStorage.setItem("mort_payments","")
  localStorage.setItem("fname","")
  localStorage.setItem("lname","")
  localStorage.setItem("address","")
  localStorage.setItem("czip","")
  localStorage.setItem("phone","")
  localStorage.setItem("hprop_desc","")
  localStorage.setItem("hloan_type","")
  localStorage.setItem("hcredit_grade","")
  localStorage.setItem("buy_home","")
  localStorage.setItem("found_home","")
  localStorage.setItem("prop_state","")
  localStorage.setItem("hzipcode","")
  localStorage.setItem("hcity","")
  localStorage.setItem("hstate","")
  localStorage.setItem("hpurchase_price","200000")
  localStorage.setItem("down_pmt","")
  localStorage.setItem("hbankruptcy","")
  localStorage.setItem("hemp_stat","")
  localStorage.setItem("hmort_payments","")
  localStorage.setItem("hspouse_stat","")
  localStorage.setItem("hfname","")
  localStorage.setItem("hlname","")
  localStorage.setItem("haddress","")  
  localStorage.setItem("hphone","")
  localStorage.setItem("hemail","")

  return (
    <div>
      {/* ----------------------------------------------Header part ------------------------------------------------ */}
     <Header/>
     <div class="section-part">
        <div class="container">
          <div class="section-fileds">
            <div id="step_home" class="display_block_height">

              
   <Routenav/>

   </div>
          </div>
        </div>
      </div>
         {/* ----------------------------------------------Footer part ------------------------------------------------ */}

   <Footer/>
   </div>
  );
}

export default App;
