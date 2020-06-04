import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MyForm from "../pages/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Sports and Recreation at Home" />
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
    <p style = {{marginRight: '200px'}}>My name is Bodhana Sivagurunathan, a 9th grader at Centennial Collegiate and Vocational Institute in Guelph. Life got so boring for me, when I, like most of you, was forced to stay home, away from social life and most importantly, away from playing basketball. I wanted to help my peers see that we can do something about our boredom, and as a result, I created SARAH. Treat her as an opportunity to keep your passion for your sport alive, even during the current lockdown. </p>
    <h4 style = {{marginTop:'30px', fontStyle: 'italic'}}>Serving Teens in Canada and Beyond</h4>
  </Layout>
)

export default IndexPage