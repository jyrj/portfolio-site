import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, BlogLink } from "../components"
import { SEO } from "../utils"
import { Container, Form, FormControl } from "react-bootstrap"

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allPosts = data.allDevblogPost.edges || []

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allPosts.filter(post => {
      // query will run on the following fields
      const { brief, title } = post.node
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        (brief && brief.toLowerCase().includes(stdQuery)) ||
        title.toLowerCase().includes(stdQuery)
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const filteredPosts = query !== "" ? filteredData : allPosts

  return (
    <PageLayout>
      <SEO title="Blog" />
      <PageTitle title="My Blog" />
      <Container className="px-5 mb-5 text-center">
        <Form className="aurebesh blog-filter">
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form>
      </Container>
      <Container
        fluid
        className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            <BlogLink
              to={node.slug}
              featuredImage={node.localImage.childImageSharp.fluid}
              title={node.title}
              subtitle={node.dateAdded}
              excerpt={node.brief}
            />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allDevblogPost(sort: { fields: [dateAdded], order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          brief
          dateAdded(formatString: "DD MMMM, YYYY")
          slug
          coverImage
          localImage {
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
`

// allFile(
//   filter: {
//     extension: { eq: "jpg" }
//     relativePath: { regex: "/feature/" }
//     relativeDirectory: { regex: "/content/blog/" }
//   }
// ) {
//   edges {
//     node {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//       relativePath
//     }
//   }
// }
// }
