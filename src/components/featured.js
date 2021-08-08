import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Featured = ({ markdown }) => {
  if (!markdown) {
    return <div>...loading</div>
  } else {
    return (
      <div id="featured">
        {markdown.edges.map(({ node }, index) => {
          if (index === 0) {
            return (
              <figure
                key={node.fields.slug}
                className="featured-link featured-main"
              >
                <Link to={node.fields.slug}>
                  <div className="featured-overlay"></div>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption>
                    <h2>{node.frontmatter.title}</h2>
                    <span style={{ display: "flex", marginTop: "1rem" }}>
                      {node.frontmatter.tags.map(tag => (
                        <p key={tag} style={{ marginRight: "1rem" }}>
                          {tag}
                        </p>
                      ))}
                    </span>
                  </figcaption>
                </Link>
              </figure>
            )
          } else if (index < 3) {
            return (
              <figure
                key={node.fields.slug}
                className="featured-link featured-secondary"
              >
                <Link to={node.fields.slug}>
                  <div className="featured-overlay"></div>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption>
                    <h2 style={{ fontSize: "2rem" }}>
                      {node.frontmatter.title}
                    </h2>
                    <span style={{ display: "flex", marginTop: "1rem" }}>
                      {node.frontmatter.tags.map(tag => (
                        <p key={tag} style={{ marginRight: "1rem" }}>
                          {tag}
                        </p>
                      ))}
                    </span>
                  </figcaption>
                </Link>
              </figure>
            )
          } else return null
        })}
      </div>
    )
  }
}
export default Featured
