import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgfour() {
  const [hfound_home, setHFoundhome] = useState();
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="homeFields_inner_section">
        <h3 class="text-left color_r">Have you found a home?</h3>
        <div class="homeFields_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="hf_foundhome01"
              class="radio-custom"
              name="hf_foundhome"
              type="checkbox"
              checked={
                localStorage.getItem("found_home") == "yes"
                  ? localStorage.getItem("found_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHFoundhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("found_home", "yes");
                  history.push("/homefive");                
                // }
              }}
            />
            <label for="hf_foundhome01" class="radio-custom-label">
              Yes
            </label>
          </div>
          <div>
            <input
              id="hf_foundhome02"
              class="radio-custom"
              name="hf_foundhome"
              type="checkbox"
              checked={
                localStorage.getItem("found_home") == "no"
                  ? localStorage.getItem("found_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHFoundhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("found_home", "no");
                  history.push("/homefive");                
                // }
              }}
            />
            <label for="hf_foundhome02" class="radio-custom-label">
              No
            </label>
          </div>

          <div class="buttons_block">
            <Link to={'homethree'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="h_back05"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepgfour;
