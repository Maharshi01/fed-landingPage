import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link ,useHistory} from "react-router-dom";
import "../style.css";
import axios from 'axios';
import { Z_STREAM_ERROR } from "zlib";
function Homepgeight() {
 const [down,setDown]=useState();
  return (
    <div>
    <div class="refinance_inner_section">
      <h3 class="text-left color_r">Down Payment</h3>
      <div class="refinance_inner_block">
        <div class="range_block">
          <div class="slider_div_01">
            <p>
              <span id="lf_output_s">
                {localStorage.getItem("down_pmt")}
              </span>
            </p>
            <input
              type="range"
              name="lf_lbs"
              min="50000"
              max="5000000"
              step="5000"
              value={localStorage.getItem("down_pmt")}
              class="sim_setup"
              id="lf_lbs_range_s"
              onChange={e => {
                setDown(e.target.value);
                localStorage.setItem("down_pmt", e.target.value);
                
              }}
            />
          </div>
        </div>
        <div class="buttons_block">
          <Link to={"/homenine"}>
            {" "}
            <input
              type="button"
              name=""
              value="Next"
              class="f_nextBtn"
              id="next03"
            />
          </Link>
          <Link to={"/homeseven"}>
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

export default Homepgeight;
