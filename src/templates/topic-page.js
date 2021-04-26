import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Card from "../components/card"
import CardSmall from "../components/cardSmall"
import Layout from "../components/layout"

const TopicPageTemplate = ({ pageContext }) => {
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

  const { topic } = pageContext
  const { edges } = data.allMarkdownRemark

  const edgesWithTopic = edges.filter(({ node }) => {
    return node.frontmatter.tags.includes(topic)
  })

  return (
    <Layout pageType="Topic">
      <div className="topic-page-header">
      </div>
      <div className="flex-layout">
        <div className="cards">
          <h2 id="articles-title"></h2>
          {edgesWithTopic.map(({ node }, index) => {
            return (
              <Card
                key={node.fields.slug}
                slug={node.fields.slug}
                frontmatter={node.frontmatter}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default TopicPageTemplate
