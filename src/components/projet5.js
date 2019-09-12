 import React, {Component} from 'react';
 import { Link } from "gatsby";
 import pic1 from '../images/photomameripro.png';
 import '../components/projet.css'


class Projet4 extends Component {


render(){


  return(

    <Link to="/quentin/">
    <div className="projet">
      <img  src={pic1} className="picProjet" alt="fireSpot" />
      <div className="yellowdiv2"> </div>
      <div className="voirD"> DECOUVRIR </div>
      <div className="yellowTitleP"> </div>
      <div className="titlesP">
        <h3 className="titleP"> QUENTIN MAMERI'S WEBSITE </h3>
        <h4 className="subtitleP"> Code & UIUX design </h4>
      </div>
    </div>
    </Link>

    )
}

}



export default Projet4;
