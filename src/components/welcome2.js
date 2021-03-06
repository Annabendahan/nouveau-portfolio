import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './menu.css'
import pic1 from '../images/Anna.png';
import { FaLocationArrow } from 'react-icons/fa';




class Welcome2 extends Component {

  state = {
      click: false
    }


handleCliked = () =>{
  this.setState({click: true})
}


render() {

console.log(this.state)

  return(
    <div  className="bienvenue" style={{
      background: `#EAFE0A`,
      position: `relative`,
      zIndex: `50`,
      color: `black`,
      marginLeft: `-20px`,
      width: `110%`,
      height: `120vh`,

           }}>

    <h1 > BIENVENUE. </h1>
    <p onClick={this.handleCliked}> Découvrir le portfolio</p>
    <svg onClick={this.handleCliked} width="8" height="61" viewBox="0 0 8 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.64645 60.3536C3.84171 60.5488 4.15829 60.5488 4.35355 60.3536L7.53553 57.1716C7.7308 56.9763 7.7308 56.6597 7.53553 56.4645C7.34027 56.2692 7.02369 56.2692 6.82843 56.4645L4 59.2929L1.17157 56.4645C0.976311 56.2692 0.659728 56.2692 0.464466 56.4645C0.269204 56.6597 0.269204 56.9763 0.464466 57.1716L3.64645 60.3536ZM3.5 -1.65786e-10L3.5 60L4.5 60L4.5 1.65786e-10L3.5 -1.65786e-10Z" fill="black"/>
</svg>

     </div>

    )
}

}


export default Welcome2;
