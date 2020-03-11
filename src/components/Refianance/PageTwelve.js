import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function PageTwelve() {
  const [mort_payments, setMortPayments] = useState();
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">
          How many late mortgage payments have you had in the past 12 months?
        </h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="R_MortgagePayments01"
              class="radio-custom"
              name="R_MortgagePayments"
              type="radio"
              checked={
                localStorage.getItem("mort_payments") == "none"
                  ? localStorage.getItem("mort_payments")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setMortPayments(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("mort_payments", "none");
                  history.push("/refinance_thirteen");                
                }
              }}
            />
            <label for="R_MortgagePayments01" class="radio-custom-label">
              NONE
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="R_MortgagePayments02"
              class="radio-custom"
              name="R_MortgagePayments"
              type="radio"
              checked={
                localStorage.getItem("mort_payments") == "one"
                  ? localStorage.getItem("mort_payments")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setMortPayments(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("mort_payments", "one");
                  history.push("/refinance_thirteen");                
                }
              }}
            />
            <label for="R_MortgagePayments02" class="radio-custom-label">
              ONE
            </label>
          </div>
          <div>
            <input
              id="R_MortgagePayments03"
              class="radio-custom"
              name="R_MortgagePayments"
              type="radio"
              checked={
                localStorage.getItem("mort_payments") == "twoormore"
                  ? localStorage.getItem("mort_payments")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setMortPayments(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("mort_payments", "twoormore");
                  history.push("/refinance_thirteen");                
                }
              }}
            />
            <label for="R_MortgagePayments03" class="radio-custom-label">
              TWO_OR_MORE
            </label>
          </div>

          <div class="buttons_block">
          <Link to={'/refinance_eleven'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back12"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwelve;
