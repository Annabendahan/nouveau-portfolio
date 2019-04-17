import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import Menu from './menu'
import scrollToComponent from 'react-scroll-to-component';

class Header extends Component {

  scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop)

  render(){
    return(

        <header
    style={{
      background: `#F6F6F6`,
      fontFamily: `Roboto Mono`,
      fontWeight: `100`,

    }}
  >
    <div className="tabs">






        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: `0px`,
            fontSize: `.8rem`
          }}
        >
        <p className="about" onClick={() => this.scrollToMyRef()}> ABOUT <span className="dash">
             <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                      </svg></span> </p>
        </Link>

        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: `0px`,
            fontSize: `.8rem`
          }}
        >
        <p className="about" > PROJETS <span className="dash">
             <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                      </svg></span> </p>
        </Link>

        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: `0px`,
            fontSize: `.8rem`
          }}
        >
        <p className="about"> CONTACT  <span className="dash">
             <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                      </svg></span> </p>
        </Link>

    </div>
  </header>

      )
  }}





export default Header
