import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import { Remarkable } from 'remarkable';
var md = new Remarkable();

const SubTitle = ({ ttr, date, author }) => (
  <h5 className="text-muted mb-5">
    Time to read: {"3"} <small>min</small> | {date} | {author}
  </h5>
)

export default ({ data }) => {
  const post = data.devblogPost
  console.log("dsfhdslfl ksdjpfo;dkj [osdkf[ kdis[f psdfk j;sfkjg ;kf; k'sfgkl '")
  return (
    <PostTemplate
      title={post.title}
      subTitle={
        <SubTitle
          ttr={"3 minutes"}
          date={post.dateAdded}
          author={"Jayaraj"}
        />
      }
      excerpt={post.brief}
      html={post.contentMarkdown}
    />
  )
}

export const query = graphql`
query ($slug: String!){
  devblogPost(slug: { eq: $slug }) {
    title
    dateAdded(formatString: "DD MMMM, YYYY")
    brief
    slug
    contentMarkdown

}
}
`
