import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import "./Mainstyle.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div class="header-part">
    <div class="container-fluid">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="header">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="index.html">
                  <img src={logo} alt={"logo"}/>  
                </a>
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Header;