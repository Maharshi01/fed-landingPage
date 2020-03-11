import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link ,useHistory} from "react-router-dom";
import "../style.css";
import axios from 'axios';
import { Z_STREAM_ERROR } from "zlib";
function Homepgsix() {
  const [hzip, setHZip] = useState();
  const [hcity, setHCity] = useState();
  const [hstate, setHState] = useState();
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
                value={localStorage.getItem("hzipcode")}
                onChange={e => {
                  if(e.target.value.length>0){
                    setError("")
                  }
                  setHZip(e.target.value);
                  localStorage.setItem("hzipcode", e.target.value);
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
                          setHCity(response.data.city)
                          setHState(response.data.state)
                          localStorage.setItem("hcity",response.data.city)
                          localStorage.setItem("hstate",response.data.state)
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
                  value={localStorage.getItem("hcity")?localStorage.getItem("hcity"):hcity}
                  onChange={e => {
                    setHCity(e.target.value);
                    localStorage.setItem("hcity", e.target.value);
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
                  value={localStorage.getItem("hstate")?localStorage.getItem("hstate"):hstate}
                  onChange={e => {
                    setHState(e.target.value);
                    localStorage.setItem("hstate", e.target.value);
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
                  if(localStorage.getItem("hzipcode").length>0){
                  if(localStorage.getItem("hzipcode").length<5 ){
                    setError("Enter valid Zipcode")
                  }
                  if(localStorage.getItem("hzipcode").length==5){
                    history.push('/homeseven')
                  }
                }
                else{
                  setError("Enter valid Zipcode1")
                }
                }}
              />
           
            <Link to={"/homefive"}>
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

export default Homepgsix;
