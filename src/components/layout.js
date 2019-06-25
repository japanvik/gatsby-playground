import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'
import { Parallax, Background } from 'react-parallax'

import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"



// Fade out animation
const fadeinAnimation = keyframes`${fadeIn}`

const FadeinDiv = styled.div`
margin-top: 400px
height: 60vh
animation: 3s ${fadeinAnimation}
`

const Title = styled.h1`
color: white
text-align: center
font-size: 5rem
`

class Layout extends React.Component {

  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
        header = (
		<div>
                <Parallax
				blur={10}
                bgImage="/static/690ba3915e50263828b1f46a569bacbc/8a760/bg.jpg"
				bgImageStyle={{'width':'95%', 'object-fit':'cover'}}
				strength={800}
				>
                    <FadeinDiv>
                        <Title> {title} </Title>
                        <p className="title">{description}</p>
                    </FadeinDiv>

                </Parallax>
			</div>


      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div id="wrapper" className="fade-in">
        {header}
        <div id="main">{children}</div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout


export const bgQuery = graphql`
query BgQuery {
	bgimg: file(absolutePath: {regex: "/bg.jpg/"}) {
		childImageSharp {
			fixed(width: 1240) {
			...GatsbyImageSharpFixed
			}
				
		}
		
	}
}
`

