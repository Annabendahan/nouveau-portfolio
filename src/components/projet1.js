 import React, {Component} from 'react';
 import { Link } from "gatsby";
 import pic1 from '../images/easy.png';
 import '../components/projet.css'


class Projet1 extends Component {


render(){


  return(

    <Link to="/easyfork/">
    <div className="projet">
      <img  src={pic1} className="picProjet" alt="fireSpot" />
      <div className="yellowdiv2"> </div>
      <div className="voirD"> DECOUVRIR </div>
      <div className="yellowTitleP"> </div>
      <div className="titlesP">
        <h3 className="titleP"> EASYFORK </h3>
        <h4 className="subtitleP"> UI/UX Design & Code </h4>
      </div>
    </div>
    </Link>

    )
}

}



export default Projet1;
