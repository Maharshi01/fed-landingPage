import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link ,useHistory} from "react-router-dom";
import "../style.css";
import axios from 'axios';
import { Z_STREAM_ERROR } from "zlib";
function Homepgseven() {
 const [homevalue,setHomeValue]=useState();
  return (
    <div>
    <div class="refinance_inner_section">
      <h3 class="text-left color_r">Estimated Purchase Price</h3>
      <div class="refinance_inner_block">
        <div class="range_block">
          <div class="slider_div_01">
            <p>
              <span id="lf_output_s">
                {localStorage.getItem("hpurchase_price")}
              </span>
            </p>
            <input
              type="range"
              name="lf_lbs"
              min="50000"
              max="5000000"
              step="5000"
              value={localStorage.getItem("hpurchase_price")}
              class="sim_setup"
              id="lf_lbs_range_s"
              onChange={e => {
                setHomeValue(e.target.value);
                localStorage.setItem("hpurchase_price", e.target.value);
                 localStorage.setItem("down_pmt", (0.2 * (e.target.value?e.target.value:200000)));
                // localStorage.setItem("add_cash", 0.8 * e.target.value);
                console.log("Hello", e.target.value);
              }}
            />
          </div>
        </div>
        <div class="buttons_block">
          <Link to={"/homeeight"}>
            {" "}
            <input
              type="button"
              name=""
              value="Next"
              class="f_nextBtn"
              id="next03"
            />
          </Link>
          <Link to={"/homesix"}>
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

export default Homepgseven;
