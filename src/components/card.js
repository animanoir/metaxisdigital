import React from "react"
import { Link } from "gatsby"
import _ from 'lodash'
import Image from "gatsby-image"

const Card = ({ frontmatter, slug }) => {
  return (
    <figure className="card-styles">

      <figcaption style={{width: '100%'}}>
      <Link to={slug} >
        <h3 className='card-title'>{frontmatter.title}</h3>
      </Link>
      <p className='card-description'>
        {frontmatter.description}
      </p>
      {
        frontmatter.tags.map( tag => {
          let concepto = tag
          let conceptoDeburr = _.deburr(tag)
          return(
          <Link
          className="tag"
          key={tag}
          to={`/${conceptoDeburr
            .split(" ")
            .join("-")
            .split("/")
            .join("-")
            .toLowerCase()}`}
        >
          {tag}
          </Link>
          )
        })
      }
      </figcaption>
      <Link to={slug} style={{width: '100%'}}>
      <Image
        className="card-image"
        fluid={frontmatter.featuredImage.childImageSharp.fluid}
      />
    </Link>

    </figure>
  )
}
export default Card
