import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/aliceP.png"
import pic2 from '../images/show1.png';
import pic3 from '../images/show2.png';
import pic4 from '../images/show3.png';

 import previous from '../images/previous.png';
import '../components/projet.css'
import { Parallax } from 'react-scroll-parallax';
import video from "../images/8BA795BC-318C-4C90-9B02-406F26DC427F.mp4"


const AliceWebsite = () => (
  <Layout>
    <SEO title="Page two" />

<Link to="/projets/" > <img  src={previous} className="Previous" alt="fireSpot" />

 </Link>

      <div className="presProjet">
      <div  className="yellowTitle4">
      </div>
      <h2 className="titleh2P"> ALICE WEBSITE </h2>
      <Parallax  y={[15, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      </Parallax>
      <p>  <span className="bold"> Project </span> - Alice's website, young fashion designer and pattern maker. Collections description,
      ckothes highlight, colors of her main collection "Heures de pointe". </p>
      <p><span className="bold"> Technos: </span> <strong> API Rails </strong> and <strong> Gatsby/React.js </strong>. <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">

  <Parallax  y={[-5, 5]} tagOuter="figure">
        <img  src={pic2} className="" alt="fireSpot" />
    </Parallax>


       <Parallax  y={[5, -5]} tagOuter="figure">
        <img  src={pic3} className="" alt="fireSpot" />
    </Parallax>



    <Parallax  y={[-5, 5]} tagOuter="figure">
        <img  src={pic4} className="" alt="fireSpot" />
    </Parallax>


    <video className="video" autoPlay loop muted>
      <source src={video} type="video/mp4"/>
       </video>


      </div>

  </Layout>
)

export default AliceWebsite

