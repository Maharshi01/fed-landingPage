import React, { useState } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import "../style.css";

function PageSeven() {
  const [credit_grade, setCreditGrade] = useState();
  let history = useHistory();
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Credit Grade</h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="R_CreditGrade01"
              class="radio-custom"
              name="R_CreditGrade"
              type="radio"
              checked={
                localStorage.getItem("credit_grade") == "Excellent"
                  ? localStorage.getItem("credit_grade")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setCreditGrade(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("credit_grade", "Excellent");
                  history.push("/refinance_ten");                
                }
              }}
            />
            <label for="R_CreditGrade01" class="radio-custom-label">
              EXCELLENT
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="R_CreditGrade02"
              class="radio-custom"
              name="R_CreditGrade"
              type="radio"
              checked={
                localStorage.getItem("credit_grade") == "Good"
                  ? localStorage.getItem("credit_grade")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setCreditGrade(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("credit_grade", "Good");
                  history.push("/refinance_ten");                
                }
              }}
            />
            <label for="R_CreditGrade02" class="radio-custom-label">
              GOOD
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="R_CreditGrade03"
              class="radio-custom"
              name="R_CreditGrade"
              type="radio"
              checked={
                localStorage.getItem("credit_grade") == "Fair"
                  ? localStorage.getItem("credit_grade")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setCreditGrade(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("credit_grade", "Fair");
                  history.push("/refinance_ten");                
                }
              }}
            />
            <label for="R_CreditGrade03" class="radio-custom-label">
              FAIR
            </label>
          </div>
          <div>
            <input
              id="R_CreditGrade04"
              class="radio-custom"
              name="R_CreditGrade"
              type="radio"
              checked={
                localStorage.getItem("credit_grade") == "Poor"
                  ? localStorage.getItem("credit_grade")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setCreditGrade(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("credit_grade", "Poor");
                  history.push("/refinance_ten");                
                }
              }}
            />
            <label for="R_CreditGrade04" class="radio-custom-label">
              POOR
            </label>
          </div>

          <div class="buttons_block">
          <Link to={'/refinance_eight'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back09"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSeven;
