import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function PageThirteen() {
  const [email, setEmail] = useState();
  const [error,setError]=useState()
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Email</h3>
        <div class="refinance_inner_block">
          <div class="email_block">
            <div class="form-group">
              <label for="refinance_email">Email</label>
              <input
                type="text"
                class="form-control input_text"
                id="refinance_email"
                name="refinance_email"
                value={localStorage.getItem("email")}
                onChange={(e)=>{
                 
                  if(e.target.value.length>0){
                    setError("")
                  }
                    setEmail(e.target.value)
                    localStorage.setItem("email",e.target.value)
                }}
              />
            </div>
            <p id="r_email_error" class="error_text">{error}</p>
          </div>
          <div class="buttons_block">
              
            <input
              type="button"
              name=""
              value="Next"
              class="f_nextBtn"
              id="next13"
              onClick={()=>{
                var reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(reg1.test(email)){
                  history.push("/refinance_fourteen")
                }
                else{
                  setError("Enter Valid Email")
                }
              }}
            />
           
            <Link to={'/refinance_twelve'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back13"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageThirteen;
