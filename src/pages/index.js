import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MyForm from "../pages/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sports and Recreation at Home</h1>
    <p style = {{marginBottom:'20px'}}>Discover how to keep your passion for sports and recreation alive in the midst of COVID-19 with SARAH.</p>
    <img style = {{marginBottom:'0px'}} src="https://lh3.googleusercontent.com/proxy/XmJlWj9sdyJW4ROTPeXdgi3ulRR1yqRLa7P7ppdZp3jpWEW7e8cXodzWQ90rjgB-QFMkPxEmO3JhokXxiaWREZGGlUJgK_4ea-sEoNzEXssA_xxaFDns-ltOvQ" alt="" width="300"
         height="160"></img>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <h2 style = {{color: 'tomato', fontStyle: 'italic', marginBottom: '40px'}}>All you have to do is click on the icon on the bottom right corner!</h2>
    <fieldset style = {{borderLeft: 'solid tomato', borderRight: 'white', borderTop: 'white', borderBottom: 'white'}}><MyForm></MyForm></fieldset>
    <h3 style = {{marginTop:'30px'}}>About the Developer</h3>
    <p style = {{marginRight: '200px'}}>My name is Bodhana Sivagurunathan, a 9th grader at Centennial Collegiate and Vocational Institute in Guelph. Life got so boring for me, when I, like most of you, was forced to stay home, away from social life and most importantly, away from playing basketball. I wanted to help my peers see that we can do something about our boredom, and as a result, I created SARAH. Treat her as an opportunity to keep your passion for your sport alive, even during the current lockdown. </p>
    <h4 style = {{marginTop:'30px', fontStyle: 'italic'}}>Serving Teens in Canada and Beyond</h4>
  </Layout>
)

export default IndexPage