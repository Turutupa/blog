import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const P = styled.p`
  margin-top: 50px;
  margin-bottom: 10px;
`

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
`

const H2 = styled.h1`
  margin-top: 0;
  font-size: ${rhythm(1)};
`

export default function Header() {
  return (
    <header>
      <P>Hi! My name is</P>
      <H1>Alberto Delgado</H1>
      <H2>I like to code, listen to music and read.</H2>
      <p>
        I'm a full stack developer based in Barcelona with a passion for coding,
        innovating and learning new technologies. I love building from IoT
        projects to beautiful applications and anything in between.
      </p>
    </header>
  )
}
