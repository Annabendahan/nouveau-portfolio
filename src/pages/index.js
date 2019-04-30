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
import discover from "../images/discoverBlack.png"

import Projets from '../components/projets'
import Spinner from '../components/spinner'
import HomeFlex from '../components/homeFlex'
import { Parallax } from 'react-scroll-parallax';


class  IndexPage extends Component {
   constructor(props) {
        super(props)
        this.state = { mount: false }
    }

    componentDidMount() {
    this.setState({mount: true})
}



  render(){



    return(

      <div className="background">
    <Layout>

    <SEO title="Home" keywords={[`développeur`, `web`, `designer`]} />

    <div className="homeFlex">

      <div style= {{
          transform: this.state.mount? `translateX(-50px)`:`translateX(-500px)`,
          transition: ` all 1s ease-out`
        }}>
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

            <Link to= "/projets/">
              <img  src={discover} className="discover" alt="fireSpot" />
            </Link>
        </div>
      </div>


    <div style= {{
          transform: this.state.mount? `translateX(0px)`:`translateX(500px)`,
          transition: ` all 1s ease-out`
        }}>
      <img  src={pic1} className="picture" alt="fireSpot" />
      </div>

      </div>









  </Layout>
  </div>

      )
  }
}



export default IndexPage
