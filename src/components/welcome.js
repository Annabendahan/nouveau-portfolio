import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './menu.css'
import pic1 from '../images/Anna.png';
import { FaLocationArrow } from 'react-icons/fa';




class Welcome extends Component {

  state = {
      show: 1
    }

render() {



  return(
    <div className="welcome">
    <div className= "welcomeText">
     <h1> ANNA </h1>
      <h2> BIENVENUE DANS MON PORTFOLIO </h2>

<div className="nextwP" onClick= {this.props.handleClickPlus}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="25.5" stroke="white"/>
<line x1="38" y1="50.5" x2="59" y2="50.5" stroke="white"/>
<path d="M60 51L54 46" stroke="white"/>
<line x1="60.0403" y1="50.3762" x2="54.3294" y2="55.3762" stroke="white"/>
</svg> </div>

    </div>
      <div className="ProfilePic">

      </div>
    </div>

    )
}

}


export default Welcome;
