import React from "react"
import Layout from "../layout"
import SEO from "../seo"

import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Img from "gatsby-image"
import styled from "styled-components"

import FadeIn from "react-fade-in"

import Navbar from "./navbar"
import Welcome from "./welcome"
import Contact from "./contact"
import About from "./about"

import { welcome, about, contact } from "./navbar"

const Container = styled.div`
  min-height: 100vh;
  margin-left: ${props => (props.breakpoints ? "40%" : null)};
  padding-left: ${props => (props.breakpoints ? "30px" : null)};
  padding-right: ${props => (props.breakpoints ? "30px" : null)};
`

const SideImage = styled(Img)`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  object-fit: cover !important;
  width: 42% !important;
  height: 100vh !important;
  margin-right: 100px !important;
`

export default function Home(props) {
  let breakpoints = useBreakpoint()
  const siteTitle = "turutupa's garage"
  const [section, setSection] = React.useState(welcome)

  const sideImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-background.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sections = [welcome, about, contact]
  const sectionsComponents = {
    [welcome]: <Welcome />,
    [about]: <About />,
    [contact]: <Contact />,
  }

  // rendering of Welcome/About/Contact sections
  function renderSections() {
    return sections.map(s => {
      return (
        section === s && <FadeIn key={section}>{sectionsComponents[s]}</FadeIn>
      )
    })
  }

  return (
    <>
      {!breakpoints.md && (
        <SideImage
          fluid={sideImage?.file?.childImageSharp?.fluid}
          alt=""
          objectFit="cover"
        />
      )}

      <Container breakpoints={!breakpoints.md}>
        <Layout location={props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `turutupa`, `javascript`, `react`, `typescript`]}
          />
          <Navbar section={section} setSection={setSection} />
          {renderSections()}
        </Layout>
      </Container>
    </>
  )
}
