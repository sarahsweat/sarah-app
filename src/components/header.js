import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
  
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#050609`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <h3 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={{
            color: `#050609`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h3>

  </HeaderContainer>
)

const HeaderContainer = styled.header`
  border-bottom: solid 4px #6cd4ff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
