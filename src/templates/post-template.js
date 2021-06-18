import React from "react"
import Container from "react-bootstrap/Container"
import { PageLayout, PageTitle } from "../components"
import SEO from "../utils/seo"
import { Remarkable } from 'remarkable';
var md = new Remarkable();

export default ({ title, excerpt, html, subTitle }) => console.log("heheghd hdg hdh dh dg dg df ")(
  
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center" fluid>
      <PageTitle title={title} />
      {subTitle}
      <Container className="text-justify">
        <div dangerouslySetInnerHTML={{ __html: md.render(html) }} />
      </Container>
    </Container>
  </PageLayout>
)


