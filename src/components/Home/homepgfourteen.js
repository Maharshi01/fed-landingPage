import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgfourteen() {
  const [hemail, setHEmail] = useState();
  const [err,setErr]=useState()
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
                value={localStorage.getItem("hemail")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setErr("")
                  }
                    setHEmail(e.target.value)
                    localStorage.setItem("hemail",e.target.value)
                }}
              />
            </div>
            <p id="r_email_error" class="error_text">{err}</p>
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
                if(reg1.test(hemail)){
                  history.push("/homefifteen")
                }
                else{
                    setErr("Enter Valid Email")
                }
              }}
            />
          
            <Link to={'/homethirteen'}>
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

export default Homepgfourteen;
