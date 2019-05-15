import React from "react"
import { Link } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from '../images/val.png';
import pic2 from '../images/insta5.png';
import pic3 from '../images/insta6.png';
import '../components/about.css'
 import previous from '../images/previous.png';
import pic4 from '../images/insta112.png';
import pic5 from '../images/insta111.png';
import { Parallax } from 'react-scroll-parallax';

const Tina = () => (
  <Layout>
    <SEO title="Page two" />

    <Link to="/projets/" > <img  src={previous} className="Previous" alt="fireSpot" />
 </Link>

    <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> TINA</h2>
      <Parallax  y={[10, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      </Parallax>
       <p> <span className="bold"> Project </span><strong>  </strong> -  Tina wanted a clean and minimalist website, but also
      modern. Something that would go well with her black and white pictures. I chose to highlight the pictures by
      giving them a big size, and creating an easy navigation.  <span><svg width="42"
      height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">
      <Parallax  y={[5, -5]} tagOuter="figure">
       <img  src={pic2} className="picdesign" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[10, -20]} tagOuter="figure">
       <img  src={pic5} className="picdesign" alt="fireSpot" />
    </Parallax>


 <Parallax  y={[10, -20]} tagOuter="figure">
       <img  src={pic4} className="picdesign" alt="fireSpot" />
    </Parallax>



      </div>




  </Layout>
)

export default Tina
