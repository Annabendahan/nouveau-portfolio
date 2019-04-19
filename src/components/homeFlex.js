import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './menu.css'
import pic1 from '../images/Anna.png';

import Backdrop from './backdrop'
import { Parallax } from 'react-scroll-parallax';




class HomeFlex extends Component {

  state = {
      class: false
    }



render() {






  return (
    <div>

    <div className="homeFlex">

        <div className="leftFlex">
         <Parallax  y={[-30, 20]} tagOuter="figure">
          <h1 > HELLO. </h1>
           <div  className="yellowTitle">  </div> <h2> WEB DESIGN & DEVELOPMENT </h2>
          <p> Bienvenue sur mon portfolio! Je suis <strong> Anna Bendahan, </strong> developpeuse full-stack
          spécialisée en front-end et passionnée de design. De la conception jusqu'au déploiement, je crée
             des applications web modernes et intuitives.
             En mêlant interface esthétique et développement solide,
             ces applications sont performantes et efficaces.
             <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span></p>
            </Parallax>
        </div>

          <img  src={pic1} className="picture" alt="fireSpot" />



      </div>





    </div>

    )
}
}





export default HomeFlex;
