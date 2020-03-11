import React, { useState } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Mainstyle.css";
function PageThree() {
  const [home_value, setHomeValue] = useState();
  return (
    
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Estimated Home Value</h3>
        <div class="refinance_inner_block">
          <div class="range_block">
            <div class="slider_div_01">
              <p>
                <span id="lf_output_s">
                  {localStorage.getItem("home_value")}
                </span>
              </p>
              <input
                type="range"
                name="lf_lbs"
                min="50000"
                max="5000000"
                step="5000"
                value={localStorage.getItem("home_value")}
                class="sim_setup"
                id="lf_lbs_range_s"
                onChange={e => {
                  setHomeValue(e.target.value);
                  localStorage.setItem("home_value", e.target.value);
                  localStorage.setItem("mortgage_bal", 0.7 * e.target.value);
                  localStorage.setItem("add_cash", 0.8 * e.target.value);
                  console.log("Hello", e.target.value);
                }}
              />
            </div>
          </div>
          <div class="buttons_block">
            <Link to={"/refinance_four"}>
              {" "}
              <input
                type="button"
                name=""
                value="Next"
                class="f_nextBtn"
                id="next03"
              />
            </Link>
            <Link to={"/refinance_three"}>
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
    
  );
}

export default PageThree;
