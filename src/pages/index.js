import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/r2-d2.png` : `../../icons/darth-vader.png`}
          alt={dark ? "Nocturnal Coding Ninja" : "Bored Coder at Day"}
        />
        {unemployed && (
          <p className="mt-2">
            <b> Hey there! Welcome to my portfolio :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              A {occupation}, &nbsp;
              {dark ? `Avid hacker, love to build new things, try new stuffs` : `Computer Science & Engineering student, self-kearner, free and open source enthusiast`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/jyrj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://linkedin.com/in/jyjnair"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.twitter.com/jyrj_j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>
          <a
            href="https://www.freecodecamp.org/jyrj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              className="icons fcc"
              title="FreeCodeCamp"
            />
          </a>
          <a
            href="https://gitlab.com/jyrj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "gitlab"]}
              className="icons gitlab"
              title="Gitlab"
            />
          </a>
          <a
            href="mailto:jayarajevur@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
