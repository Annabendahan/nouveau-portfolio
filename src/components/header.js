import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      fontFamily: `Roboto Mono`,
      fontWeight: `100`
    }}
  >
    <div
      style={{


        background: `#08244F`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`
      }}
    >

       < Menu />
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `40px`,
            fontSize: `1rem`
          }}
        >
        <p className="logo"> AnnaBdh </p>
        </Link>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
