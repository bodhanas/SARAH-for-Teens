import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MyForm from "../pages/contact"


function changeBackground(e) {
  e.target.style.opacity = '0.7'
}
function changeBackground2(e){
  e.target.style.opacity = '1'
}

const IndexPage = () => (
  <Layout>
    <SEO title="Sports and Recreation at Home" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <a onMouseOver={changeBackground} onMouseLeave={changeBackground2}style = {{width: '37px', height: '37px', float:'left', marginRight: '10px',borderRadius: '50%',padding: '10px', fontSize: '20px', textDecoration: 'none', background: '#55ACEE',color: 'white'}} href="https://twitter.com/SARAHforteens"target="_blank" class="fa fa-twitter"></a>
    <a onMouseOver={changeBackground} onMouseLeave={changeBackground2}style = {{width: '37px',height: '37px',marginRight:'10px',float: 'left',borderRadius: '50%',padding: '10px', fontSize: '20px', textAlign: 'center', textDecoration: 'none', background: '#3B5998',color: 'white'}}href="https://www.facebook.com/SARAH-Sports-and-Recreation-at-Home-101701461578700/"target="_blank" class="fa fa-facebook"></a>
    <a onMouseOver={changeBackground} onMouseLeave={changeBackground2}style = {{width: '37px', height: '37px', marginRight:'10px',float: 'left',borderRadius: '50%',paddingTop:'9px', fontSize: '20px', textAlign: 'center', textDecoration: 'none', background: '#E1306C',color: 'white'}}href="https://www.instagram.com/sarahforteens/"target="_blank" class="fa fa-instagram"></a>
    <br></br>
    <h1><span style = {{textDecoration: "underline", textDecorationColor: 'tomato'}}>S</span>ports <span style = {{textDecoration: "underline", textDecorationColor: 'tomato'}}>A</span>nd <span style = {{textDecoration: "underline", textDecorationColor: 'tomato'}}>R</span>ecreation <span style = {{textDecoration: "underline", textDecorationColor: 'tomato'}}>A</span>t <span style = {{textDecoration: "underline", textDecorationColor: 'tomato'}}>H</span>ome</h1>
    <h2 style = {{marginTop:'40px',marginBottom:'30px',color:'tomato', fontStyle: 'italic'}}>Discover how to keep your passion for sports and recreation alive!</h2>
    <h2 style = {{color: 'tomato', fontStyle: 'italic', marginBottom: '40px'}}>All you have to do is click on the icon on the bottom right corner!</h2>
    <Image></Image>
    <h1 style = {{marginTop:'40px'}}>Who is SARAH?</h1>
    <p style = {{marginTop:'20px',marginBottom:'40px'}}>SARAH is a web assistant designed to give students creative solutions to continue practicing or just learning a little bit more about the different sports and recreational activities they once enjoyed, before social distancing regulations were put in place.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <fieldset style = {{borderLeft: 'solid tomato', borderRight: 'white', borderTop: 'white', borderBottom: 'white'}}><MyForm></MyForm></fieldset>
    <h3 style = {{marginTop:'30px'}}>About the Developer</h3>
    <p style = {{}}>My name is Bodhana Sivagurunathan, a 9th grader at Centennial Collegiate and Vocational Institute in Guelph. Life got so boring for me, when I, like most of you, was forced to stay home, away from social life and most importantly, away from playing basketball. I wanted to help my peers see that we can do something about our boredom, and as a result, I created SARAH. Treat her as an opportunity to keep your passion for your sport alive, even during the current lockdown. </p>
    <h4 style = {{marginTop:'30px', fontStyle: 'italic'}}>Serving Teens in Canada and Beyond</h4>
  </Layout>
)

export default IndexPage