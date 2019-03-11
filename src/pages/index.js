import React from "react"
import SEO from "../components/seo"
import "../components/layout.css"


import styled from 'styled-components'
import Image from '../components/image'
import preseli from './../images/preseli.jpg'

const IndexPage = () => (
    <Background>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          zIndex: '-1',
        }}>
      <Image />

      </div>
      <div style={{overflowY: 'scroll', height: '100vh', zIndex: '2'}}>
        <div style={{ height: 'calc(37%)', opacity: 0}}/>
        <InfoContainer>
          <h1 style={{margin: '0px', fontFamily: "Permanent Marker" }}>Sarah Sweat</h1>
          <div 
            style={{
              borderBottom: 'solid 5px black',
              margin: '20px'
            }}
          />
          <p>Web Developer | Teacher | Blogger</p>

        </InfoContainer>
        <div style={{ height: 'calc(60%)', opacity: 0}}/>
        <InfoContainer>
          <h1>About</h1>
          <p style={{lineHeight: '20px'}}>
            3 years ago I graduated from Florida State University not knnowing what I wanted to do. 
            First, I moved to London to work with american study abroad students, helping them enjoy and 
            make the most of their time across the pond. Then, I moved to NYC to pursue a career in code. 
            In college, I studied Mechanical Engineering, but always loved my coding classes the most. 
            Instead of applying code to hardware, I decided to make a switch and learn how to apply my 
            coding skills on the web development side. I initially joined the Spoon University tech team 
            and have transitioned to other Discovery Digital brands including Food Network, HGTV, TLC 
            and Genius Kitchen, with a focus on developing improved authoring experiences for 
            content creators. I am continuing to learn and grow every day with this team!
          </p>
        </InfoContainer>
        <div style={{ height: '30%', opacity: 0}}/>
        
      </div>
    </Background>
)

export default IndexPage

const Background = styled.div`
  /* background-image: url(${preseli}); */
  /* background-size: cover; */
  position: relative;
  height: 100vh;
  width: 100vw;
`

const InfoContainer = styled.div`
  background-color: rgba(255,255,255, 0.8);
  padding: 30px;
  text-align: center;
  border-radius: 5px;

  @media (min-width: 850px) { 
    margin-left: 50%;
    width: 40%;
  }
          
`

// const Img = styled(Img)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   height: 100vh; 
//   object-fit: cover !important; 
//   object-position: 0% 0% !important; 
// `


// const Nav = styled.div`
//   > * {
//     padding: 10px;
//   }
// `