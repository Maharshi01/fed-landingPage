import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function PageSix() {
  const [loan_type, setLoanType] = useState();
  let history = useHistory();

  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Current Loan Type</h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <Route>
              <input
                id="R_LoanType01"
                class="radio-custom"
                name="R_LoanType"
                checked={
                  localStorage.getItem("loan_type") == "fixed"
                    ? localStorage.getItem("loan_type")
                    : ""
                }
                type="radio"
                onChange={e => {
                  console.log("Clicked1", e.target.checked);
                  setLoanType(e.target.checked);
                  if (e.target.checked == true) {
                    localStorage.setItem("loan_type", "fixed");
                    history.push("/refinance_seven");
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
                localStorage.getItem("loan_type") == "adjustable"
                  ? localStorage.getItem("loan_type")
                  : ""
              }
              onChange={e => {
                setLoanType(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("loan_type", "adjustable");
                  history.push("/refinance_seven");
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
                localStorage.getItem("loan_type") == "fixedoradjustable"
                  ? localStorage.getItem("loan_type")
                  : ""
              }
              onChange={e => {
                setLoanType(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("loan_type", "fixedoradjustable");
                  history.push("/refinance_seven");
                  console.log("Clicked", e.target.checked);
                }
              }}
            />
            <label for="R_LoanType03" class="radio-custom-label">
              FIXED_OR_ADJUSTABLE
            </label>
          </div>

          <div class="buttons_block">
            <Link to={'/refinance_five'}>
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

export default PageSix;
