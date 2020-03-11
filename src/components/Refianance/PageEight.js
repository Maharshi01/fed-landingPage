import React, { useState } from "react";

import { BrowserRouter, Route, Link, Redirect,useHistory } from "react-router-dom";
import "../style.css";

function PageSeven() {
  const [spousestat, setSpouseStat] = useState();
let history=useHistory();
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">
          You or your spouse a servicemember or veteran?
        </h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="R_Spouse01"
              class="radio-custom"
              name="R_Spouse"
              type="radio"
              checked={
                localStorage.getItem("spouse_stat") == "yes"
                  ? localStorage.getItem("spouse_stat")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setSpouseStat(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("spouse_stat", "yes");
                  history.push("/refinance_nine");                
                }
              }}
            />
            <label for="R_Spouse01" class="radio-custom-label">
              YES
            </label>
          </div>
          <div>
            <input
              id="R_Spouse02"
              class="radio-custom"
              name="R_Spouse"
              type="radio"
              checked={
                localStorage.getItem("spouse_stat") == "no"
                  ? localStorage.getItem("spouse_stat")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setSpouseStat(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("spouse_stat", "no");
                  history.push("/refinance_nine");                
                }
              }}
            />
            <label for="R_Spouse02" class="radio-custom-label">
              NO
            </label>
          </div>

          <div class="buttons_block">
          <Link to={'/refinance_seven'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back08"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSeven;
