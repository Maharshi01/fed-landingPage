import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgfive() {
  const [prop_state, setPropertyState] = useState();
  const [err,setErr]=useState()
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="homeFields_inner_section">
        <h3 class="text-left color_r">State property located in</h3>
        <div class="homeFields_inner_block">
          <div class="textInput_block">
            <div class="form-group">
              <input
                type="text"
                class="form-control input_text"
                id="homeFields_prop"
                name="homeFields_prop"
                value={localStorage.getItem("prop_state")}
                onChange={(e)=>{
                  if(e.target.value.length>0){
                    setErr("")
                  }
                    setPropertyState(e.target.value)
                    localStorage.setItem("prop_state",e.target.value)
                }}
              />
            </div>
            <p id="hf_sprop_error" class="error_text">{err}</p>
          </div>
          <div class="buttons_block">
              
            <input
              type="button"
              name=""
              value="Next"
              class="f_nextBtn"
              id="h_next06"
              onClick={()=>{
                if(!prop_state){
                  setErr("State is required field*")
                }
                else{
                  history.push('/homesix')
                }
              }}
            />
           
            <Link to={'/homefour'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="h_back06"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepgfive;
