import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Card from "../components/card"

function TagPageTemplate({ pageContext }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              tags
              category
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  const edgesWithTag = edges.filter(({ node }) => {
    return node.frontmatter.tags.includes(tag)
  })

  return (
    <Layout pageType="Tag">
      <SEO title={tag} />
      <div>
        <h2 className="page-header">
          <b>{tag}</b>:
        </h2>
        <div className="flex-layout">
          <div className="cards">
            {edgesWithTag.map(({ node }, index) => {
              return (
                <Card
                  key={node.id}
                  slug={node.fields.slug}
                  frontmatter={node.frontmatter}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TagPageTemplate
