import React, { useState } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style.css";
function PageFive() {
  const [add_cash, setAdditionalCash] = useState();
  return (
    <div>
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">
          How much additional cash do you wish to borrow?
        </h3>
        <div class="refinance_inner_block">
          <div class="range_block">
            <div class="slider_div_01">
              <p>
                <span id="lf_output_s">{localStorage.getItem("add_cash")}</span>
              </p>
              <input
                type="range"
                name="lf_lbs"
                min="50000"
                max="5000000"
                step="5000"
                value={localStorage.getItem("add_cash")}
                class="sim_setup"
                id="lf_lbs_range_s"
                onChange={e => {
                  setAdditionalCash(e.target.value);
                  localStorage.setItem("add_cash", e.target.value);
                  console.log(
                    "Hello-Mortgage",
                    localStorage.getItem("add_cash")
                  );
                }}
              />
            </div>
          </div>
          <div class="buttons_block">
            <Link to={"refinance_six"}>
              <input
                type="button"
                name=""
                value="Next"
                class="f_nextBtn"
                id="next03"
              />
            </Link>
            <Link to={"refinance_five"}>
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

export default PageFive;
