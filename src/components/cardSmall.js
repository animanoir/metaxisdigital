import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Card = ({ frontmatter, slug }) => {
  return (
    <figure className="card-small-styles">
      <figcaption>
        <Link to={slug}>
          <h3>{frontmatter.title}</h3>
        </Link>
        <p>{frontmatter.description}</p>
      </figcaption>
    </figure>
  )
}
export default Card
