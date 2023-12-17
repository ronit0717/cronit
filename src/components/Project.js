import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const query = graphql`
{
    file(relativePath: {eq: "projects-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Project = ({description, title, github, stack, url, index}) => {
    const {
        file: {
          childImageSharp: {fluid}
        }
      } = useStaticQuery(query);
    return <article className="project">
        <Image fluid={fluid} className="project-img" />
        <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">
            {description}
        </p>
        <div className="project-stack">
            {stack.map((item) => {
            return <span key={item.id}>{item.name}</span>
            })}
        </div>
        <div className="project-links">
            {github && 
            <a href={github} target="_blank">
                <FaGithubSquare className="project-icon" />
            </a>
            }
            {url && 
            <a href={url} target="_blank">
                <FaShareSquare className="project-icon" />
            </a>
            }
        </div>
        </div>
    </article>
}

Project.propTypes = {
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  stack:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Project