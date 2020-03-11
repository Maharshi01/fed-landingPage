import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function Homepgnine() {
  const [hloan_type, setHLoanType] = useState();
  let history = useHistory();

  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Desired Loan Type</h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <Route>
              <input
                id="R_LoanType01"
                class="radio-custom"
                name="R_LoanType"
                checked={
                  localStorage.getItem("hloan_type") == "fixed"
                    ? localStorage.getItem("hloan_type")
                    : ""
                }
                type="radio"
                onChange={e => {
                  console.log("Clicked1", e.target.checked);
                  setHLoanType(e.target.checked);
                  if (e.target.checked == true) {
                    localStorage.setItem("hloan_type", "fixed");
                    history.push("/hometen");
                    console.log("Clicked", e.target.checked);
                  }
                }}
              />

              <label for="R_LoanType01" class="radio-custom-label">
                FIXED
              </label>
            </Route>
          </div>

          <div class="radio_bottom_gap">
            <input
              id="R_LoanType02"
              class="radio-custom"
              name="R_LoanType"
              type="radio"
              checked={
                localStorage.getItem("hloan_type") == "adjustable"
                  ? localStorage.getItem("hloan_type")
                  : ""
              }
              onChange={e => {
                setHLoanType(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("hloan_type", "adjustable");
                  history.push("/hometen");
                  console.log("Clicked", e.target.checked);
                }
              }}
            />
            <label for="R_LoanType02" class="radio-custom-label">
              ADJUSTABLE
            </label>
          </div>
          <div>
            <input
              id="R_LoanType03"
              class="radio-custom"
              name="R_LoanType"
              type="radio"
              checked={
                localStorage.getItem("hloan_type") == "fixedoradjustable"
                  ? localStorage.getItem("hloan_type")
                  : ""
              }
              onChange={e => {
                setHLoanType(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("hloan_type", "fixedoradjustable");
                  history.push("/hometen");
                  console.log("Clicked", e.target.checked);
                }
              }}
            />
            <label for="R_LoanType03" class="radio-custom-label">
              FIXED_OR_ADJUSTABLE
            </label>
          </div>

          <div class="buttons_block">
            <Link to={'/homeeight'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back06"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepgnine;
