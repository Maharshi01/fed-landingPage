import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgten() {
  const [hbankruptcy, setHBankruptcy] = useState();
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">
          Have you been in bankruptcy or foreclosure in the past three years?
        </h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="R_Bankruptcy01"
              class="radio-custom"
              name="R_Bankruptcy"
              type="radio"
              checked={
                localStorage.getItem("hbankruptcy") == "yes"
                  ? localStorage.getItem("hbankruptcy")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBankruptcy(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("hbankruptcy", "yes");
                  history.push("/homeeleven");                
                }
              }}
            />
            <label for="R_Bankruptcy01" class="radio-custom-label">
              YES
            </label>
          </div>
          <div>
            <input
              id="R_Bankruptcy02"
              class="radio-custom"
              name="R_Bankruptcy"
              type="radio"
              checked={
                localStorage.getItem("hbankruptcy") == "no"
                  ? localStorage.getItem("hbankruptcy")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBankruptcy(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("hbankruptcy", "no");
                  history.push("/homeeleven");                
                }
              }}
            />
            <label for="R_Bankruptcy02" class="radio-custom-label">
              NO
            </label>
          </div>

          <div class="buttons_block">
          <Link to={'/homenine'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back10"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepgten;
