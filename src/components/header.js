import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function changeBackground(e) {
  e.target.style.opacity = '0.7'
}
function changeBackground2(e){
  e.target.style.opacity = '1'
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `tomato`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            fontSize: '70px',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a onMouseOver={changeBackground} onMouseLeave={changeBackground2}style = {{width: '47px', height: '47px', float:'right',borderRadius: '50%',padding: '14px', fontSize: '22px', textDecoration: 'none', background: '#55ACEE',color: 'white'}} href="https://twitter.com/SARAHforteens"target="_blank" class="fa fa-twitter"></a>
        <a onMouseOver={changeBackground} onMouseLeave={changeBackground2}style = {{width: '47px',height: '47px',marginRight:'10px',float: 'right',borderRadius: '50%',padding: '14px', fontSize: '22px', textAlign: 'center', textDecoration: 'none', background: '#3B5998',color: 'white'}}href="https://www.facebook.com/SARAH-Sports-and-Recreation-at-Home-101701461578700/"target="_blank" class="fa fa-facebook"></a>
        <a onMouseOver={changeBackground} onMouseLeave={changeBackground2}style = {{width: '47px', height: '47px', marginRight:'10px',float: 'right',borderRadius: '50%',padding: '13px', fontSize: '22px', textAlign: 'center', textDecoration: 'none', background: '#E1306C',color: 'white'}}href="https://www.instagram.com/sarahforteens/"target="_blank" class="fa fa-instagram"></a>
      </h1>
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
