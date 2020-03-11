import React, { useState } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Mainstyle.css";
function PageFour() {
  const [mortgage_value, setMortgageValue] = useState();
  return (
    <div>
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Mortgage Balance</h3>
        <div class="refinance_inner_block">
          <div class="range_block">
            <div class="slider_div_01">
              <p>
                <span id="lf_output_s">
                  {localStorage.getItem("mortgage_bal")}
                </span>
              </p>
              <input
                type="range"
                name="lf_lbs"
                min="50000"
                max="5000000"
                step="5000"
                value={localStorage.getItem("mortgage_bal")}
                class="sim_setup"
                id="lf_lbs_range_s"
                onChange={e => {
                  setMortgageValue(e.target.value);
                  localStorage.setItem("mortgage_bal", e.target.value);
                  console.log(
                    "Hello-Mortgage",
                    localStorage.getItem("mortgage_bal")
                  );
                }}
              />
            </div>
          </div>
          <div class="buttons_block">
            <Link to={"/refinance_five"}>
              <input
                type="button"
                name=""
                value="Next"
                class="f_nextBtn"
                id="next03"
              />
            </Link>
            <Link to={"/refinance_four"}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back03"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFour;
