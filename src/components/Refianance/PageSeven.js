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
  const [prop_desc, setPropertyDescription] = useState();
  let history = useHistory();
  console.log(localStorage.getItem("prop_desc"));
  return (
    <div id="refinance_block">
      <div class="refinance_inner_section">
        <h3 class="text-left color_r">Property Description</h3>
        <div class="refinance_inner_block">
          <div class="radio_bottom_gap">
            <input
              id="R_PropertyDescription01"
              class="radio-custom"
              name="R_PropertyDescription"
              type="radio"
              checked={
                localStorage.getItem("prop_desc") == "single_fam"
                  ? localStorage.getItem("prop_desc")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setPropertyDescription(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("prop_desc", "single_fam");
                  history.push("/refinance_eight");                
                }
              }}
            />
            <label for="R_PropertyDescription01" class="radio-custom-label">
              SINGLE_FAM
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="R_PropertyDescription02"
              class="radio-custom"
              name="R_PropertyDescription"
              type="radio"
              checked={
                localStorage.getItem("prop_desc") == "multi_fam"
                  ? localStorage.getItem("prop_desc")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setPropertyDescription(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("prop_desc", "multi_fam");
                  history.push("/refinance_eight");                
                }
              }}
            />
            <label for="R_PropertyDescription02" class="radio-custom-label">
              MULTI_FAM
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="R_PropertyDescription03"
              class="radio-custom"
              name="R_PropertyDescription"
              type="radio"
              checked={
                localStorage.getItem("prop_desc") == "condo"
                  ? localStorage.getItem("prop_desc")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setPropertyDescription(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("prop_desc", "condo");
                  history.push("/refinance_eight");                
                }
              }}
            />
            <label for="R_PropertyDescription03" class="radio-custom-label">
              CONDO
            </label>
          </div>
          <div class="radio_bottom_gap">
            <input
              id="R_PropertyDescription04"
              class="radio-custom"
              name="R_PropertyDescription"
              type="radio"
              checked={
                localStorage.getItem("prop_desc") == "townhome"
                  ? localStorage.getItem("prop_desc")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setPropertyDescription(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("prop_desc", "townhome");
                  history.push("/refinance_eight");                
                }
              }}
            />
            <label for="R_PropertyDescription04" class="radio-custom-label">
              TOWNHOME
            </label>
          </div>
          <div>
            <input
              id="R_PropertyDescription05"
              class="radio-custom"
              name="R_PropertyDescription"
              type="radio"
              checked={
                localStorage.getItem("prop_desc") == "mobilehome"
                  ? localStorage.getItem("prop_desc")
                  : ""
              }
              onChange={e => {
                console.log("Clicked1", e.target.checked);
                setPropertyDescription(e.target.checked);
                if (e.target.checked == true) {
                  localStorage.setItem("prop_desc", "mobilehome");
                  history.push("/refinance_eight");                
                }
              }}
            />
            <label for="R_PropertyDescription05" class="radio-custom-label">
              MOBILEHOME
            </label>
          </div>

          <div class="buttons_block">
          <Link to={'/refinance_six'}>
            <input
              type="button"
              name=""
              value="Back"
              class="f_backBtn"
              id="back07"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSeven;
