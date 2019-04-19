import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import Menu from './menu'
import { ScrollTo } from "react-scroll-to";

class Header extends Component {


  render(){
    return(


        <header
    style={{
      background: `#F6F6F6`,
      fontFamily: `Roboto Mono`,
      fontWeight: `100`,

    }}
  >

<Link to="/" className="logo1">
    <svg width="42" height="181" viewBox="0 0 42 181" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<rect width="179.924" height="40.736" transform="translate(0.122559 180.754) rotate(-89.8982)" fill="black"/>
<path d="M23.4144 169.649L23.4098 172.241L20.7698 172.236L20.7752 169.164L18.6159 168.8L18.6114 171.32L15.9714 171.315L15.9767 168.315L11.3222 167.491L11.3272 164.683L28.0739 167.665L28.0689 170.473L23.4144 169.649ZM11.3305 162.835L11.3355 160.027L15.99 160.851L15.9946 158.259L18.6346 158.264L18.6291 161.336L20.7885 161.7L20.793 159.18L23.433 159.185L23.4276 162.185L28.0822 163.009L28.0772 165.817L11.3305 162.835ZM28.1045 150.451C28.1043 150.547 28.0682 150.637 27.996 150.72C27.9119 150.792 27.8218 150.828 27.7258 150.828C27.6538 150.828 27.5998 150.822 27.5639 150.81L16.0154 146.559C15.8715 146.523 15.7516 146.445 15.6558 146.325C15.56 146.204 15.5123 146.048 15.5126 145.856L15.5174 143.192C15.5177 143 15.566 142.844 15.6622 142.725C15.7584 142.605 15.8786 142.527 16.0226 142.491L27.5861 138.3L27.7482 138.264C27.8442 138.264 27.9341 138.306 28.0179 138.39C28.0898 138.463 28.1256 138.553 28.1255 138.661L28.1215 140.875C28.121 141.163 27.9947 141.354 27.7425 141.45L25.9053 142.149L25.8967 146.955L27.7315 147.642C27.9833 147.738 28.109 147.937 28.1084 148.237L28.1045 150.451ZM23.312 142.864L18.557 144.53L23.306 146.212L23.312 142.864ZM28.1295 136.396C28.1293 136.516 28.0871 136.624 28.0029 136.72C27.9068 136.804 27.7987 136.845 27.6787 136.845L15.9787 136.824C15.8467 136.824 15.7388 136.782 15.6549 136.698C15.5711 136.602 15.5293 136.494 15.5295 136.374L15.5329 134.466C15.5334 134.166 15.6478 133.962 15.876 133.854L22.7958 129.474L15.9918 129.462C15.8598 129.462 15.7518 129.42 15.668 129.336C15.5842 129.24 15.5424 129.132 15.5426 129.012L15.5464 126.852C15.5466 126.72 15.5888 126.612 15.673 126.528C15.7571 126.444 15.8652 126.402 15.9972 126.402L27.6792 126.423C27.8112 126.423 27.9251 126.466 28.021 126.55C28.1048 126.634 28.1466 126.742 28.1464 126.874L28.143 128.8C28.1425 129.064 28.0282 129.262 27.7999 129.393L21.1321 133.773L27.6841 133.785C27.8041 133.785 27.912 133.828 28.0079 133.912C28.0917 133.996 28.1335 134.104 28.1333 134.236L28.1295 136.396ZM28.1525 123.458C28.1522 123.578 28.1101 123.686 28.0259 123.782C27.9297 123.866 27.8217 123.908 27.7017 123.908L16.0017 123.887C15.8697 123.887 15.7618 123.844 15.6779 123.76C15.5941 123.664 15.5523 123.556 15.5525 123.436L15.5559 121.528C15.5564 121.228 15.6708 121.024 15.899 120.917L22.8188 116.537L16.0148 116.525C15.8828 116.525 15.7748 116.482 15.691 116.398C15.6072 116.302 15.5653 116.194 15.5656 116.074L15.5694 113.914C15.5696 113.782 15.6118 113.674 15.696 113.59C15.7801 113.506 15.8882 113.465 16.0202 113.465L27.7022 113.486C27.8342 113.486 27.9481 113.528 28.044 113.612C28.1278 113.696 28.1696 113.804 28.1694 113.936L28.166 115.862C28.1655 116.126 28.0511 116.324 27.8229 116.456L21.1551 120.836L27.7071 120.848C27.8271 120.848 27.935 120.89 28.0309 120.974C28.1147 121.058 28.1565 121.166 28.1563 121.298L28.1525 123.458ZM28.1734 111.691C28.1732 111.787 28.137 111.877 28.0649 111.961C27.9808 112.033 27.8907 112.068 27.7947 112.068C27.7227 112.068 27.6687 112.062 27.6327 112.05L16.0843 107.799C15.9403 107.763 15.8205 107.685 15.7247 107.565C15.6289 107.445 15.5812 107.289 15.5815 107.097L15.5862 104.433C15.5866 104.241 15.6349 104.085 15.7311 103.965C15.8273 103.845 15.9474 103.767 16.0915 103.731L27.655 99.54L27.817 99.5043C27.913 99.5045 28.0029 99.5466 28.0868 99.6308C28.1587 99.7029 28.1945 99.793 28.1943 99.901L28.1904 102.115C28.1899 102.403 28.0635 102.595 27.8114 102.69L25.9741 103.389L25.9656 108.195L27.8004 108.882C28.0522 108.979 28.1778 109.177 28.1773 109.477L28.1734 111.691ZM23.3808 104.104L18.6259 105.77L23.3749 107.452L23.3808 104.104ZM28.1983 97.6362C28.1981 97.7562 28.1559 97.8641 28.0718 97.96C27.9756 98.0438 27.8675 98.0856 27.7475 98.0854L16.0476 98.0646C15.9156 98.0644 15.8076 98.0222 15.7238 97.938C15.64 97.8419 15.5981 97.7338 15.5984 97.6138L15.6081 92.1238C15.6108 90.6118 15.9248 89.4904 16.5501 88.7595C17.1634 88.0166 18.0401 87.6461 19.1801 87.6482C19.7801 87.6492 20.2898 87.8061 20.7092 88.1189C21.1167 88.4196 21.4161 88.7621 21.6074 89.1465C21.8363 88.6549 22.203 88.2415 22.7076 87.9064C23.2122 87.5713 23.7765 87.4043 24.4005 87.4054C25.6005 87.4076 26.5358 87.8052 27.2064 88.5984C27.877 89.3916 28.211 90.5202 28.2084 91.9842L28.1983 97.6362ZM20.6115 92.4927C20.6123 92.0127 20.493 91.6465 20.2534 91.3941C20.0019 91.1416 19.6721 91.015 19.2641 91.0143C18.8681 91.0136 18.5499 91.139 18.3094 91.3906C18.069 91.6422 17.9483 92.008 17.9475 92.488L17.9433 94.828L20.6073 94.8327L20.6115 92.4927ZM25.8677 92.34C25.8686 91.848 25.7253 91.4638 25.4378 91.1873C25.1503 90.9108 24.8025 90.7721 24.3945 90.7714C23.9625 90.7707 23.6083 90.908 23.3318 91.1835C23.0433 91.459 22.8986 91.8428 22.8978 92.3348L22.8933 94.8368L25.8633 94.842L25.8677 92.34ZM28.2209 84.9624C28.2206 85.0824 28.1785 85.1903 28.0943 85.2862C27.9981 85.37 27.8901 85.4118 27.7701 85.4116L16.0701 85.3908C15.9381 85.3906 15.8302 85.3484 15.7463 85.2642C15.6625 85.1681 15.6207 85.06 15.6209 84.94L15.6292 80.26C15.6323 78.496 16.0548 77.1288 16.8965 76.1582C17.7382 75.1877 18.9571 74.6799 20.5532 74.6347C20.9012 74.6234 21.3632 74.6182 21.9392 74.6192C22.5152 74.6202 22.9712 74.627 23.3072 74.6396C24.9751 74.7026 26.2162 75.2028 27.0305 76.1403C27.8329 77.0657 28.2325 78.4164 28.2293 80.1924L28.2209 84.9624ZM25.6372 80.2778C25.6386 79.4858 25.4536 78.9035 25.0823 78.5308C24.6989 78.1581 24.0933 77.959 23.2653 77.9336C22.9174 77.9089 22.4674 77.8962 21.9154 77.8952C21.3634 77.8942 20.9194 77.9054 20.5833 77.9288C19.7793 77.9514 19.1849 78.1663 18.8002 78.5736C18.4155 78.969 18.2224 79.5626 18.221 80.3546L18.2178 82.1546L25.6338 82.1678L25.6372 80.2778ZM28.2438 72.0776C28.2435 72.2096 28.2013 72.3176 28.1172 72.4014C28.033 72.4853 27.925 72.5271 27.793 72.5268L16.093 72.5061C15.961 72.5058 15.853 72.4636 15.7692 72.3795C15.6854 72.2833 15.6436 72.1753 15.6438 72.0553L15.6479 69.7333C15.6481 69.6013 15.6903 69.4933 15.7745 69.4095C15.8586 69.3136 15.9667 69.2658 16.0987 69.2661L20.4367 69.2738L20.4446 64.8458L16.1066 64.8381C15.9746 64.8378 15.8667 64.7956 15.7828 64.7115C15.699 64.6273 15.6572 64.5193 15.6574 64.3873L15.6615 62.0653C15.6618 61.9333 15.7039 61.8253 15.7881 61.7415C15.8722 61.6576 15.9803 61.6158 16.1123 61.6161L27.8123 61.6369C27.9443 61.6371 28.0522 61.6793 28.1361 61.7634C28.2199 61.8476 28.2617 61.9557 28.2615 62.0877L28.2574 64.4096C28.2571 64.5416 28.2149 64.6496 28.1308 64.7334C28.0467 64.8173 27.9386 64.8591 27.8066 64.8588L23.3246 64.8509L23.3167 69.2789L27.7987 69.2868C27.9307 69.2871 28.0386 69.3353 28.1225 69.4314C28.2063 69.5156 28.2481 69.6236 28.2479 69.7556L28.2438 72.0776Z" fill="#EAFE0A"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="179.924" height="40.736" fill="white" transform="translate(0.122559 180.754) rotate(-89.8982)"/>
</clipPath>
</defs>
</svg>

</Link>

    <div className="tabs">





        <div

          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: `0px`,
            fontSize: `.8rem`,
            cursor: `pointer`
          }}
        >

        <ScrollTo>
        {({ scrollTo }) => (
          <a onClick={() => scrollTo({ x: 20, y: 50, smooth: true })}> <p className="about" > ABOUT <span className="dash">
             <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                      </svg></span> </p></a>
        )}
      </ScrollTo>



        </div>





 <div

          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: `0px`,
            fontSize: `.8rem`,
            cursor: `pointer`
          }}
        >

        <ScrollTo>
        {({ scrollTo }) => (
          <a onClick={() => scrollTo({ x: 20, y: 720, smooth: true })}> <p className="about" > PROJETS <span className="dash">
             <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                      </svg></span> </p></a>
        )}
      </ScrollTo>



        </div>

         <div

          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: `0px`,
            fontSize: `.8rem`,
            cursor: `pointer`
          }}
        >

        <ScrollTo>
        {({ scrollTo }) => (
          <a onClick={() => scrollTo({ x: 20, y: 2000, smooth: true })}> <p className="about" > CONTACT <span className="dash">
             <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                      </svg></span> </p></a>
        )}
      </ScrollTo>



        </div>


    </div>
  </header>


      )
  }}





export default Header