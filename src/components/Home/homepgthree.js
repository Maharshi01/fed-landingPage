import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgthree() {
  const [hbuy_home, setHBuyhome] = useState();
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="homeFields_inner_section">
        <h3 class="text-left color_r">When are you likely to buy a home?</h3>
        <div class="homeFields_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="hf_buyhome01"
              class="radio-custom"
              name="hf_buyhome"
              type="checkbox"
              checked={
                localStorage.getItem("buy_home") == "Immediately"
                  ? localStorage.getItem("buy_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBuyhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("buy_home", "Immediately");
                  history.push("/homefour");                
                // }
              }}
            />
            <label for="hf_buyhome01" class="radio-custom-label">
              Immediately
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="hf_buyhome02"
              class="radio-custom"
              name="hf_buyhome"
              type="checkbox"
              checked={
                localStorage.getItem("buy_home") == "30_days"
                  ? localStorage.getItem("buy_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBuyhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("buy_home", "30_days");
                  history.push("/homefour");                
                // }
              }}
            />
            <label for="hf_buyhome02" class="radio-custom-label">
              30_days
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="hf_buyhome03"
              class="radio-custom"
              name="hf_buyhome"
              type="checkbox"
              checked={
                localStorage.getItem("buy_home") == "60_days"
                  ? localStorage.getItem("buy_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBuyhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("buy_home", "60_days");
                  history.push("/homefour");                
                // }
              }}
            />
            <label for="hf_buyhome03" class="radio-custom-label">
              60_days
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="hf_buyhome04"
              class="radio-custom"
              name="hf_buyhome"
              type="checkbox"
              checked={
                localStorage.getItem("buy_home") == "90_days"
                  ? localStorage.getItem("buy_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBuyhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("buy_home", "90_days");
                  history.push("/homefour");                
                // }
              }}
            />
            <label for="hf_buyhome04" class="radio-custom-label">
              90_days
            </label>
          </div>
          <div>
            <input
              id="hf_buyhome05"
              class="radio-custom"
              name="hf_buyhome"
              type="checkbox"
              checked={
                localStorage.getItem("buy_home") == "no_time_constraint"
                  ? localStorage.getItem("buy_home")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setHBuyhome(e.target.checked);
                // if (e.target.checked == true) {
                  localStorage.setItem("buy_home", "no_time_constraint");
                  history.push("/homefour");                
                // }
              }}
            />
            <label for="hf_buyhome05" class="radio-custom-label">
              no_time_constraint
            </label>
          </div>

          <div class="buttons_block">
            <Link to={'hometwo'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="h_back04"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepgthree;
