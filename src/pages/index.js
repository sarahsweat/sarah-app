import React from "react"
import styled from 'styled-components'
import Image from '../components/image'
import preseli from './../images/preseli.jpg'

const IndexPage = () => (
    <Background>
      <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '-1',
          height: '100vh',
          objectFit: 'cover !important',
          objectPosition: '0% 0% !important',
        }}>
      <Image  
      />

      </div>
      <div style={{overflowY: 'scroll', height: '100vh', zIndex: '2'}}>
        <div style={{ height: 'calc(40%)', opacity: 0}}/>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255, 0.95)',
            padding: '30px',
            textAlign: 'center',
            width: '45%',
            marginLeft: '50%'
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
        </div>
        <div style={{ height: 'calc(60%)', opacity: 0}}/>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255, 0.95)',
            padding: '20px',
            textAlign: 'center',
            width: '45%',
            marginLeft: '50%'
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
        <div style={{ height: '60%', opacity: 0}}/>
        
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