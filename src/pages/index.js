import React from "react"
import styled from 'styled-components'
import preseli from './../assets/preseli.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background>
      <div style={{overflowY: 'scroll', height: '100%'}}>
        <div style={{ height: 'calc(40%)', opacity: 0}}/>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255, 0.95)',
            padding: '30px',
            textAlign: 'center',
            width: '45%',
            marginLeft: '700px'
          }}
        >
        <h1 style={{margin: '0px'}}>Sarah Sweat</h1>
        <div 
          style={{
            borderBottom: 'solid 5px black',
            margin: '20px'
          }}
        />
        <p>Web Developer | Teacher | Content Creator</p>
          {/* <Nav>
            <Link to="/about/">About</Link>
            <Link to="/about/">Projects</Link>
            <Link to="/about/">Gallery</Link>
            <Link to="/about/">Contact</Link>
            <Link to="/about/">Blog</Link>
          </Nav> */}
        </div>
        <div style={{ height: 'calc(70%)', opacity: 0}}/>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255, 0.95)',
            padding: '20px',
            textAlign: 'center',
            width: '45%',
            marginLeft: '700px'
          }}
        >
          <h1>About</h1>
          <p>
            Since graduating from Florida State University almost 3 years ago, I have worked in 
            London and moved to NYC to pursue a career in code. In college, I studied Mechanical 
            Engineering, but always loved my coding classes the most. Instead of applying code to 
            hardware, I decided to make a switch and learn how to apply my coding skills on the web 
            development side. I joined Spoon University initially and have transitioned to other 
            Discovery brands including Food Network, HGTV, TLC and Genius Kitchen, with a focus 
            on developing improved authoring experiences for content creators. I am continuing to learn 
            and grow every day with this team, knowing I made the right choice.
          </p>
        </div>
        <div style={{ height: '200px', opacity: 0}}/>
        
      </div>
    </Background>
  </Layout>
)

export default IndexPage

const Background = styled.div`
  background-image: url(${preseli});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`


// const Nav = styled.div`
//   > * {
//     padding: 10px;
//   }
// `