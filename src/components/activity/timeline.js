import React from "react"
import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import TimelineElement from "./timelineElement"

export default function Timeline(props) {
  const { timelineElements } = props

  return (
    <VerticalTimeline layout="1-column">
      {timelineElements
        .filter(el => !el.frontmatter.draft) // if draft then don't render
        .map(el => (
          <TimelineElement key={el.excerpt} data={el} />
        ))}
    </VerticalTimeline>
  )
}
