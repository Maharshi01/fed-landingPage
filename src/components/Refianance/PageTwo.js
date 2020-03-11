import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link ,useHistory} from "react-router-dom";
import "../style.css";
import axios from 'axios';

import { Z_STREAM_ERROR } from "zlib";
function PageTwo() {
  const [zip, setZip] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [show,setShow]=useState(false);
  const [error,setError]=useState();
  let history=useHistory()
  useEffect(() => {
    if(localStorage.getItem("city")!=""){
      setShow(true)
    }
  }, []);
  return (
  
    <div class="display_block_height">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Property zip code</h3>
        <div class="refinance_inner_block">
          <div class="zip_block">
            <div class="form-group">
              <label for="refinance_zip">Zip Code</label>
              <input
                type="text"
                class="form-control input_text data_bind_zip"
                id="refinance_zip"
                name="refinance_zip"
                value={localStorage.getItem("zipcode")}
                onChange={e => {
                  if(e.target.value>0){
                    setError("")
                  }
                  setZip(e.target.value);
                  localStorage.setItem("zipcode", e.target.value);
                  if(e.target.value.length==5){
                    const config = {
                      url: `https://zip.getziptastic.com/v2/US/${e.target.value}`,
                      method: "get", //Method                     
                    };
                    axios(config)
                      .then(response => {
                        console.log("Response", response);
                        if(response.status==200){
                          setShow(true)
                          setCity(response.data.city)
                          setState(response.data.state)
                          localStorage.setItem("city",response.data.city)
                          localStorage.setItem("state",response.data.state)
                        }
                        else{
                          setError("Enter Valid Zip");
                        }
                       
                      })
                      .catch(err => {
                        console.log("Getting Publishers List Error", err);
                      });
                  
                  }
                }}
              />
            </div>
            <p id="r_zip_error" class="error_text">{error}</p>
         {show &&
         <div>
            <div class="city-wrap">
              <div class="form-group">
                <label for="city">City</label>
                <input
                  type="text"
                  class="form-control input_text data_bind_city"
                  name="city"
                  id="city"
                  value={localStorage.getItem("city")?localStorage.getItem("city"):city}
                  onChange={e => {
                    setCity(e.target.value);
                    localStorage.setItem("city", e.target.value);
                  }}
                  readonly
                />
              </div>
            </div>
            <div class="state-wrap">
              <div class="form-group">
                <label for="state">State</label>
                <input
                  type="text"
                  class="form-control input_text data_bind_state"
                  name="state"
                  id="state"
                  value={localStorage.getItem("state")?localStorage.getItem("state"):state}
                  onChange={e => {
                    setState(e.target.value);
                    localStorage.setItem("state", e.target.value);
                  }}
                  readonly
                />
              </div>
            </div>
            </div>
            }
          </div>
                
          <div class="buttons_block">
            
              <input
                type="button"
                name=""
                value="Next"
                class="f_nextBtn"
                id="next02"
                onClick={()=>{
                  if(localStorage.getItem("zipcode").length>0){
                  if(localStorage.getItem("zipcode").length<5 ){
                    setError("Enter valid Zipcode")
                  }
                  if(localStorage.getItem("zipcode").length==5){
                    history.push('/refinance_three')
                  }
                }
                else{
                  setError("Enter valid Zipcode1")
                }
                }}
              />
           
            <Link to={"/refinance_one"}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back02"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
   

  );
}

export default PageTwo;
