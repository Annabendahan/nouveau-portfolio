 import React, {Component} from 'react';
 import { Link } from "gatsby";
 import pic1 from '../images/irfan-simsar-1144378-unsplash.jpg';
 import '../components/projet.css'


class Projet3 extends Component {


render(){


  return(

    <Link to="/rentman/">
    <div className="projet">
      <img  src={pic1} className="picProjet" alt="fireSpot" />
      <div className="yellowdiv2"> </div>
      <div className="voirD"> DECOUVRIR </div>
      <div className="yellowTitleP"> </div>
      <div className="titlesP">
        <h3 className="titleP"> RENTMAN </h3>
        <h4 className="subtitleP"> Web & Print Design </h4>
      </div>
    </div>
    </Link>

    )
}

}



export default Projet3;
