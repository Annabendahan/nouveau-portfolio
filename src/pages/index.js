import React, {Component} from "react"
import { Link } from "gatsby"
import { FaLocationArrow, FaHeart, FaCursor} from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/index.css'

import pic1 from '../images/Anna.png';
import pic2 from "../images/easyforkPic.png"
import pic3 from "../images/aliceP.png"
import pic4 from "../images/rentmanPic.png"
import pic5 from "../images/pavan-trikutam-1660-unsplash.jpg"

import Projets from '../components/projets'
import Spinner from '../components/spinner'
import HomeFlex from '../components/homeFlex'
import { Parallax } from 'react-scroll-parallax';


class  IndexPage extends Component {
   constructor(props) {
        super(props)
        this.state = { isLoading: true }
    }

    componentDidMount() {
    this.setState({isLoading: false})
}



  render(){

    let show = <Layout>
    <SEO title="Home" keywords={[`développeur`, `web`, `designer`]} />


      < HomeFlex />




      <div  className="yellowTitle2">
      </div>
      <h2 className="titleh2"> PROJETS </h2>
      <div className="AllProjets">


       <Parallax  y={[10, -10]} tagOuter="figure">
         <Link to="/AliceWebsite/">
      <div className="white-projet">
        <div className="picpro">
          <img  src={pic3} className="" alt="fireSpot" />
        </div>
        <p className = "littleDesc">  Design & Code </p>
        <h3> ALICE WEBSITE  </h3>
        <p className="voir"> Voir le projet </p>

      </div>
      </Link>
    </Parallax>



    <Parallax  y={[20, -30]} tagOuter="figure">
      <Link to="/easyfork/">
      <div className="white-projet second">
        <div className="picpro">
          <img  src={pic2} className="" alt="fireSpot" />
        </div>
         <p className = "littleDesc">  Design & Code </p>
          <h3> EASYFORK  </h3>
          <p className="voir"> Voir le projet </p>

      </div>
      </Link>
       </Parallax>


     <Parallax  y={[10, -30]} tagOuter="figure">
    <Link to="/rentman/">
      <div className="white-projet third">
        <div className="picpro">
          <img  src={pic4} className="" alt="fireSpot" />
        </div>
         <p className = "littleDesc"> Design </p>
        <h3> RENTMAN </h3>
        <p className="voir"> Voir le projet </p>

      </div>
      </Link>
      </Parallax>


  </div>




    <div  className="yellowTitle2">  </div> <h2 className="titleh2"> CONTACT </h2>

<Parallax  y={[20, -20]} tagOuter="figure">
     <div className="contactbig">
      <p> Un projet? Une question? Contactez-moi!</p>
        <div className="contact">
          <div className="email">
           <h3> EMAIL  </h3>
           <p> an.bendahan@gmail.com </p>
          </div>
          <div className="call">
           <h3> TELEPHONE </h3>
           <p> 0659133919</p>
          </div>
       </div>
       <Parallax  y={[20, 0]} tagOuter="figure">
      <img  src={pic5} className="picContact" alt="fireSpot" />
       </Parallax>
      <h3> MERCI POUR LA VISITE ! </h3>
      <div className = "heart" > <FaHeart /> </div>

       </div>
 </Parallax>




  </Layout>


    return(

      show

      )
  }
}



export default IndexPage
