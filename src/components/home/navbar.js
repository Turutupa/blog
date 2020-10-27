import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { IoMdReturnLeft } from "react-icons/io"
import ReactTypingEffect from "../../vendor/react-typing-effect/src/lib"
import { rhythm } from "../../utils/typography"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`

const NavItem = styled.span`
  position: relative;
  font-family: SF Mono, monospace;
  cursor: pointer;
  font-size: ${rhythm(8 / 15)};
  color: ${props => (props.active ? "rgb(0,0,0,0)" : null)} !important;

  &:hover {
    color: #78d6b5;
  }
`

const IconWrapper = styled.span`
  position: absolute;
  right: -20px;
  top: 4px;
`

const TypingEffect = styled(ReactTypingEffect)`
  font-weight: bold;
  position: absolute;
  color: #00c27e;
  width: calc(100% + 11px);
`

export const welcome = "welcome"
export const about = "about"
export const contact = "contact"
export const blog = `blog`
export const sections = [welcome, about, contact, blog]

export default function Navbar(props) {
  function handleSetSection(section) {
    if (section === blog) {
      return navigate("/blog/")
    }
    props.setSection(section)
  }

  function renderSectionWithTypingEffect(section) {
    try {
      return (
        <TypingEffect
          text={[`#${section}`]}
          speed={50}
          typingDelay={70}
          eraseDelay={5000}
        />
      )
    } catch (e) {
      return ""
    }
  }

  return (
    <Container>
      {sections.map(section => (
        <NavItem
          key={section}
          active={props.section === section}
          onClick={() => handleSetSection(section)}
        >
          {props.section === section && renderSectionWithTypingEffect(section)}#
          {section}
          {section === blog && (
            <IconWrapper>
              <IoMdReturnLeft />
            </IconWrapper>
          )}
        </NavItem>
      ))}
    </Container>
  )
}
