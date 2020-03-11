import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";
import axios from 'axios';

function PageFourteen() {
  const [fname, setFirstName] = useState();
  const [lname, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [czip, setCzip] = useState();
  const [phone, setPhone] = useState();
 const [fname_err,setFnameErr]=useState()
 const [lname_err,setLnameErr]=useState()
 const [phone_err,setPhoneErr]=useState()
 const [state_err,setStateErr]=useState()
 const [city_err,setCityErr]=useState()
 const [address_err,setAddressErr]=useState()
 const [czip_err,setCzipErr]=useState()
  let history = useHistory();
  const submit=()=>{
      const data={
          access_key:"ff616384006f",
          campaign_id:445,
          email:localStorage.getItem("email"),
          phone:localStorage.getItem("phone"),
          firstname:localStorage.getItem("fname"),
          lastname:localStorage.getItem("lname"),
          address:localStorage.getItem("address"),
          zipcode:localStorage.getItem("zipcode"),
          state:localStorage.getItem("state"),
          city:localStorage.getItem("city"),
          loan_type:localStorage.getItem("loan_type"),
          refinance:localStorage.getItem("radiostatus1"),
          est_home_val:localStorage.getItem("home_value"),
          mortgage_bal:localStorage.getItem("mortgage_bal"),
          add_cash:localStorage.getItem("add_cash"),
          prop_desc:localStorage.getItem("prop_desc"),
          veteran_stat:localStorage.getItem("spouse_stat"),
          credit_grade:localStorage.getItem("credit_grade"),
          bankruptcy_stat:localStorage.getItem("bankruptcy"),
          curr_employed:localStorage.getItem("emp_stat"),
          mort_payments:localStorage.getItem("mort_payments")

      }
    const config = {
        url: `https://live.leadswatch.com/api/v1/lead/create`,
        method: "post", //Method 
        data:data                    
      };
      axios(config)
        .then(response => {
          console.log("Response", response);
        })
        .catch(err => {
          console.log("Getting Publishers List Error", err);
        });
  }
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">
          Great News! Your results are ready to view <br />
          <span class="contact_span">
            Enter your info so we can personalize your results.
          </span>
        </h3>
        <div class="refinance_inner_block">
          <div class="details_block">
            <div class="form-group">
              <label for="r_fn">First Name</label>
              <input
                type="text"
                class="form-control input_text"
                id="r_fn"
                name="r_fn"
                value={localStorage.getItem("fname")}
                onChange={(e)=>{
                  if(e.target.value.length>=0){
                    setFnameErr("")
                  }
                  
                    setFirstName(e.target.value)
                    localStorage.setItem("fname",e.target.value)
                  
                  
                }}
              />
            </div>
              <p id="r_fn_error" class="error_text">{fname_err}</p>

            <div class="form-group">
              <label for="r_ln">Last Name</label>
              <input
                type="text"
                class="form-control input_text"
                id="r_ln"
                name="r_ln"
                value={localStorage.getItem("lname")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setLnameErr("")
                  }
                    
                    setLastName(e.target.value)
                    localStorage.setItem("lname",e.target.value)
                }}
              />
            </div>
              <p id="r_ln_error" class="error_text">{lname_err}</p>

            <div class="form-group">
              <label for="r_address">Address</label>
              <input
                type="text"
                class="form-control input_text"
                id="r_address"
                name="r_address"
                value={localStorage.getItem("address")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setAddressErr("")
                  }
                    
                    setAddress(e.target.value)
                    localStorage.setItem("address",e.target.value)
                }}
              />
            </div>
              <p id="r_add_error" class="error_text">{address_err}</p>

            <div class="form-group">
              <label for="r_city">City</label>
              <input
                type="text"
                class="form-control input_text data_bind_city"
                id="r_city"
                name="r_city"
                value={localStorage.getItem("city")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setCityErr("")
                  }
                    
                    setCity(e.target.value)
                    localStorage.setItem("city",e.target.value)
                }}
              />
            </div>
              <p id="r_city_error" class="error_text">{city_err}</p>

            <div class="form-group">
              <label for="r_state">State</label>
              <input
                type="text"
                class="form-control input_text data_bind_state"
                id="r_state"
                name="r_state"
                value={localStorage.getItem("state")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setStateErr("")
                  }
                    
                    setState(e.target.value)
                    localStorage.setItem("state",e.target.value)
                }}
              />
            </div>
              <p id="r_state_error" class="error_text">{state_err}</p>

            <div class="form-group">
              <label for="r_zip">Current address zip code</label>
              <input
                type="text"
                class="form-control input_text data_bind_zip"
                id="r_zip"
                name="r_zip"
                value={localStorage.getItem("zipcode")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setCzipErr("")
                  }
                    
                    setCzip(e.target.value)
                    localStorage.setItem("zipcode",e.target.value)
                }}
              />
            </div>
              <p id="r_cZip_error" class="error_text">{czip_err}</p>

            <div class="form-group">
              <label for="r_ph">Primary Phone</label>
              <input
                type="text"
                class="form-control input_text"
                id="r_ph"
                name="r_ph"
                value={localStorage.getItem("phone")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setPhoneErr("")
                  }
                    
                    setPhone(e.target.value)
                    localStorage.setItem("phone",e.target.value)
                }}
              />
            </div>
              <p id="r_pphone_error" class="error_text">{phone_err}</p>
          </div>
          <div class="buttons_block">
            <input
              type="submit"
              name=""
              value="Submit"
              class="f_nextBtn"
              id="R_submit"
              onClick={()=>{
                 if(!fname&&!lname&&!address&&!city&&!state&&!czip&&!phone){
                       setAddressErr("Address is Required Field*")
                       setPhoneErr("Phone is required field*")
                       setCityErr("City is Required Field*")
                       setCzipErr("Zip code is Required Field*")
                       setStateErr("State is Required Field*")
                       setFnameErr("FirstName is Required Field*")
                       setLnameErr("Lastname is Required field*")
                }
                if(!fname){
                  setFnameErr("FirstName is Required Field*")
                }else{
                  let reg = /^[A-Za-z]+$/;
                  if(!reg.test(fname)){
                     setFnameErr("FirstName should contain only Characters")
                  } 
                }
                if(!lname){
                  setLnameErr("Lastname is Required field*")
                }
                else{
                  let reg = /^[A-Za-z]+$/;
                  if(!reg.test(lname)){
                     setFnameErr("LastName should contain only Characters")
                  } 
                }
                if(!phone){
                  setPhoneErr("Phone is required field*")
                }
                if(!address){
                  setAddressErr("Address is Required Field*")
                }
                if(!state){
                  setStateErr("State is Required Field*")
                }
                else{
                  let reg = /^[A-Za-z]+$/;
                  if(!reg.test(state)){
                     setStateErr("State should contain only Characters")
                  } 
                }
                if(!city){
                  setCityErr("City is Required Field*")
                }
                else{
                  let reg = /^[A-Za-z]+$/;
                  if(!reg.test(city)){
                     setCityErr("City should contain only Characters")
                  } 
                }
                if(!czip){
                  setCzipErr("Zip code is Required Field*")
                }
                console.log(
                localStorage.getItem("radiostatus1"),
                localStorage.getItem("radiostatus2"),
                localStorage.getItem("zipcode"),
                localStorage.getItem("city"),
                localStorage.getItem("state"),
                localStorage.getItem("home_value"),
                localStorage.getItem("mortgage_bal"),
                localStorage.getItem("add_cash"),
                localStorage.getItem("loan_type"),
                localStorage.getItem("prop_desc"),
                localStorage.getItem("spouse_stat"),
                localStorage.getItem("credit_grade"),
                localStorage.getItem("bankruptcy"),
                localStorage.getItem("emp_stat"),
                localStorage.getItem("mort_payments"),
                localStorage.getItem("fname"),
                localStorage.getItem("lname"),
                localStorage.getItem("city"),
                localStorage.getItem("state"),
                localStorage.getItem("address"),
                localStorage.getItem("czip"),
                localStorage.getItem("phone")
              
              )
            submit();
            }}
              
            />
             <Link to={'/refinance_thirteen'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back14"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFourteen;
