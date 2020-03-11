import React, { useState } from "react";

import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import "../style.css";

function PageOne() {
  let history = useHistory();
  const [radiostatus1, setRadioStatus1] = useState();
  const [radiostatus2, setRadioStatus2] = useState();
  return (
    <div id="refinance_block">
      <div id="refinance_one" class="display_block_height_main">
        <h3 class="text-center color_r">
          ALERT: FED CUTS RATES!{" "}
          <span class="head_span">Eligible Homeowners</span>
        </h3>
        <p class="text-center color_a p_head">Can Save $271 / Month or More!</p>
        <h3 class="text-center color_a">Check if You Qualify Now</h3>
        <div class="refinance_inner_section">
          <h3 class="text-left color_r">Lead Product</h3>
          <div class="refinance_inner_block">
            <div>
              <input
                id="R_LeadProduct01"
                class="radio-custom"
                name="R_LeadProduct"
                type="checkbox"
                checked={
                  localStorage.getItem("radiostatus1") == "yes"
                    ? localStorage.getItem("radiostatus1")
                    : ""
                }
                onChange={e => {
                  console.log("Hello", e.target.checked);
                  setRadioStatus1(e.target.checked);
                  localStorage.setItem("radiostatus1", "yes");
                  localStorage.setItem("radiostatus2", "");
                  history.push("/refinance_two")
                }}
              />
              <label for="R_LeadProduct01" class="radio-custom-label">
                YES
              </label>
            </div>
            <div>
              <input
                id="R_LeadProduct02"
                class="radio-custom"
                name="R_LeadProduct"
                type="checkbox"
                checked={
                  localStorage.getItem("radiostatus2") == "no"
                    ? localStorage.getItem("radiostatus2")
                    : ""
                }
                onChange={e => {
                  console.log("Hello", e.target.checked);
                  setRadioStatus2(e.target.checked);
                  localStorage.setItem("radiostatus1", "");
                  localStorage.setItem("radiostatus2", "no");
                  history.push("/homeone")
                }}
              />
              <label for="R_LeadProduct02" class="radio-custom-label">
                NO
              </label>
            </div>
            <p id="r_lp_error" class="error_text"></p>

            <div class="buttons_block">
              {/* <Link to={`/refinance_two`}>
                <input
                  type="button"
                  name=""
                  value="Next"
                  class="f_nextBtn"
                  id="next01"
                />
              </Link> */}
              <input
                type="button"
                name=""
                value="Back"
                class="f_backBtn"
                id="back01"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
