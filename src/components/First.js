import React from "react";

import { BrowserRouter, Route,Link } from "react-router-dom";
import "./Mainstyle.css";
function First() {
  const hello=()=>{

  }
  return (
 <div >

 
    <div>
    <img src="../assets/refinance.jpg" id="refinance" />
    <Link
                          to={`/refinance_one` }
                    >
                           <p class="first_page_image"  >Refinance</p>
                          </Link>
   
  </div>
  <div>
    <img src="../assets/home.jpg" id="homeFields" />
    <p class="first_page_image">Home Field</p>
  </div>
  </div>
  );
}

export default First;
