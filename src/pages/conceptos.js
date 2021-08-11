import React from "react"
import _ from "lodash"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const Topics = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Layout>
      <div id="concepts-list" className="main-container">
        {data.allMarkdownRemark.group.map(topic => {
          let concepto = topic.fieldValue
          let conceptoDeburr = _.deburr(concepto)
          return (
            <Link
              to={`/${conceptoDeburr.toLowerCase().replace(" ", "-")}/`}
              key={topic.fieldValue}
              className="tag"
              style={{ fontSize: "5rem" }}
            >
              <span>
                {topic.fieldValue} ({topic.totalCount})
              </span>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
export default Topics
