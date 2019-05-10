 import React, {Component} from 'react';
 import { Link } from "gatsby";
 import { FaLocationArrow, FaHeart, FaCursor} from 'react-icons/fa';
 import pic1 from '../images/brooke-lark-176364-unsplash.jpg';
 import Projet1 from '../components/projet1'
import Projet2 from '../components/projet2'
import Projet3 from '../components/projet3'
 import Layout from "../components/layout"
 import previous from '../images/previous.png';
 import next from '../images/next.png';
 import pic5 from "../images/pavan-trikutam-1660-unsplash.jpg"
 import { Parallax } from 'react-scroll-parallax';


class Contact extends Component {

  state={
    mount: false
  }


componentDidMount() {
this.setState({ mount: true
})}

render(){






  return(

    <div className="background-c">
      <Layout>



<Parallax  y={[20, -20]} tagOuter="figure">
     <div className="contactbig">
     <div style = {{
      transform: this.state.mount? `translateY(0px)`: `translateY(-200px)`,
      transition: ` all 2s ease-out`
     }}>
      <p> Un projet? Une question? Contactez-moi!</p>
      </div>
        <div style = {{
      transform: this.state.mount? `translateY(0px)`: `translateY(-200px)`,
      transition: ` all 1s ease-out`
     }}>
        <div className="contact">
          <div className="email">
           <div  className="yellowTitle5">  </div> <h3 className="titleh3"> EMAIL </h3>
           <p> an.bendahan@gmail.com </p>
          </div>
          <div className="call">
           <div  className="yellowTitle3">  </div> <h3 className="titleh3"> TELEPHONE </h3>
           <p> 0659133919</p>
          </div>
          </div>
       </div>
       <div style = {{
      transform: this.state.mount? `translateY(0px)`: `translateY(-200px)`,
      transition: ` all .5s ease-out`
     }}>
       <Parallax  y={[20, 0]} tagOuter="figure">
      <img  src={pic5} className="picContact" alt="fireSpot" />
       </Parallax>
      <h3> MERCI POUR LA VISITE ! </h3>
      <div className = "heart" > <FaHeart /> </div>
      </div>

       </div>
 </Parallax>
      </Layout>


      <div style={{
      background: `#EAFE0A`,
      position: `relative`,
      zIndex: `50`,
      marginLeft: `-20px`,
      width: `120%`,
      height: `220vh`,

            transform: this.state.mount? `translateY(-500vh)` : `translateY(-100vh)`,
    transition: ` all 2s ease-out`}}>
     </div>
    </div>

    )
}

}



export default Contact;
