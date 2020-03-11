import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgeleven() {
  const [hemp_stat, setHEmpStat] = useState();
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Are you currently employed?</h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap" class="radio_bottom_gap">
            <input
              id="R_CurrentlyEmployed01"
              class="radio-custom"
              name="R_CurrentlyEmployed"
              type="radio"
              checked={
                localStorage.getItem("hemp_stat") == "yes"
                  ? localStorage.getItem("hemp_stat")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHEmpStat(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("hemp_stat", "yes");
                  history.push("/hometwelve");                
                }
              }}
            >
              
            </input>
            <label for="R_CurrentlyEmployed01" class="radio-custom-label">
              YES
            </label>
          </div>
          <div>
            <input
              id="R_CurrentlyEmployed02"
              class="radio-custom"
              name="R_CurrentlyEmployed"
              type="radio"
              checked={
                localStorage.getItem("hemp_stat") == "no"
                  ? localStorage.getItem("hemp_stat")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHEmpStat(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("hemp_stat", "no");
                  history.push("/hometwelve");                
                }
              }}
            />
            <label for="R_CurrentlyEmployed02" class="radio-custom-label">
              NO
            </label>
          </div>

          <div class="buttons_block">
          <Link to={'/hometen'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back11"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepgeleven;
