import React from 'react';

import Mainpage from "./Refianance/Mainpage";
import PageOne from "./Refianance/PageOne"
import PageTwo from "./Refianance/PageTwo"
import PageThree from "./Refianance/PageThree"
import PageFour from "./Refianance/PageFour"
import PageFive from "./Refianance/PageFive"
import PageSix from "./Refianance/PageSix"
import PageSeven from "./Refianance/PageSeven"
import PageEight from "./Refianance/PageEight"
import PageNine from "./Refianance/PageNine"
import PageTen from "./Refianance/PageTen"
import PageEleven from "./Refianance/PageEleven"
import PageTwelve from "./Refianance/PageTwelve"
import PageThirteen from "./Refianance/PageThirteen"
import PageFourteen from "./Refianance/PageFourteen"
import homepgone from "./Home/homepgone"
import homepgtwo from "./Home/homepgtwo"
import homepgthree from "./Home/homepgthree"
import homepgfour from "./Home/homepgfour"
import homepgfive from "./Home/homepgfive"
import homepgsix from "./Home/homepgsix"
import homepgseven from "./Home/homepgseven"
import homepgeight from "./Home/homepgeight"
import homepgnine from "./Home/homepgnine"
import homepgten from "./Home/homepgten"
import homepgeleven from "./Home/homepgeleven"
import homepgtwelve from "./Home/homepgtwelve"
import homepgthirteen from "./Home/homepgthirteen"
import homepgfourteen from "./Home/homepgfourteen"
import homepgfifteen from "./Home/homepgfifteen"
import PageShell from "./PageShell"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 const Routenav=()=>{
    return(
      <Router>
      <div>
      <Route exact path="/" component={PageShell(Mainpage)} />
      <Route exact path="/refinance_one" component={PageShell(PageOne)} />
      <Route exact path="/refinance_two" component={PageShell(PageTwo)} />
      <Route exact path="/refinance_three" component={PageShell(PageThree)} />
      <Route exact path="/refinance_four" component={PageShell(PageFour)} />
      <Route exact path="/refinance_five" component={PageShell(PageFive)} />
      <Route exact path="/refinance_six" component={PageShell(PageSix)} />
      <Route exact path="/refinance_seven" component={PageShell(PageSeven)} />
      <Route exact path="/refinance_eight" component={PageShell(PageEight)} />
      <Route exact path="/refinance_nine" component={PageShell(PageNine)} />
      <Route exact path="/refinance_ten" component={PageShell(PageTen)} />
      <Route exact path="/refinance_eleven" component={PageShell(PageEleven)} />
      <Route exact path="/refinance_twelve" component={PageShell(PageTwelve)} />
      <Route exact path="/refinance_thirteen" component={PageShell(PageThirteen)} />
      <Route exact path="/refinance_fourteen" component={PageShell(PageFourteen)} />
      <Route exact path="/homeone" component={PageShell(homepgone)} />
      <Route exact path="/hometwo" component={PageShell(homepgtwo)} />
      <Route exact path="/homethree" component={PageShell(homepgthree)} />
      <Route exact path="/homefour" component={PageShell(homepgfour)} />
      <Route exact path="/homefive" component={PageShell(homepgfive)} />
      <Route exact path="/homesix" component={PageShell(homepgsix)} />
      <Route exact path="/homeseven" component={PageShell(homepgseven)} />
      <Route exact path="/homeeight" component={PageShell(homepgeight)} />
      <Route exact path="/homenine" component={PageShell(homepgnine)} />
      <Route exact path="/hometen" component={PageShell(homepgten)} />
      <Route exact path="/hometwelve" component={PageShell(homepgtwelve)} />
      <Route exact path="/homeeleven" component={PageShell(homepgeleven)} />
      <Route exact path="/homethirteen" component={PageShell(homepgthirteen)} />
      <Route exact path="/homefourteen" component={PageShell(homepgfourteen)} />
      <Route exact path="/homefifteen" component={PageShell(homepgfifteen)} />

          
       
      </div>
    </Router>
    );
}
export default Routenav;
