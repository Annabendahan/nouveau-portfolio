 import React, {Component} from 'react';
 import { Link } from "gatsby";
 import pic1 from '../images/brooke-lark-176364-unsplash.jpg';
 import Projet1 from '../components/projet1'
import Projet2 from '../components/projet2'
import Projet3 from '../components/projet3'
 import Layout from "../components/layout"
 import previous from '../images/previous.png';
 import next from '../images/next.png';


class Projets extends Component {

  state={
    display:1,
    mount: false
  }


componentDidMount() {
  this.setState({
    mount: true
  })
}

handleProjetPlus= () =>{
  let display = this.state.display
this.setState({ display : display + 1})
}


handleProjetMoins= () =>{
  let display = this.state.display
this.setState({ display : display - 1})
}

resetHandle = () =>{
  let display = this.state.display
this.setState({ display : 1})
}

resetHandle2 = () =>{
  let display = this.state.display
this.setState({ display : 3})
}

render(){

  let projet = <Projet1 />
  let numero = "n°01"

  if (this.state.display === 1) {
     projet = <Projet1 />
     numero = "n°01"
  } else if (this.state.display === 2 ) {
    projet = <Projet2 />
    numero = "n°02"
  } else if (this.state.display === 3 ) {
    projet = <Projet3 />
    numero = "n°03"
  } else if  (this.state.display === 4 ) {
    this.resetHandle()
  } else if (this.state.display === 0 ) {
    this.resetHandle2()
  }





  return(

<div className="background-p">
      <Layout>


      <div onClick={this.handleProjetMoins}>
        <img  src={previous} className="Previous" alt="fireSpot" />
      </div>
      <div onClick={this.handleProjetPlus}>
        <img  src={next} className="Next" alt="fireSpot" />
       </div>


      <div className="projets">



     {projet}
     <div className= "numero" > {numero} </div>


      </div>



       <div style={{
      background: `#EAFE0A`,
      position: `relative`,
      zIndex: `50`,
      marginLeft: `-20px`,
      width: `120%`,
      height: `220vh`,

            transform: this.state.mount? `translateY(-600vh)` : `translateY(-100vh)`,
    transition: ` all 2s ease-out`}}>
     </div>


      </Layout>
      </div>






    )
}

}



export default Projets;
