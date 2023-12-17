import React from "react"
import Layout from "../components/Layout"
import { graphql, StaticQuery } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = () => {
    return (
        <StaticQuery 
          query={graphql`
            query ProjectsQuery {
              allProjectsJson {
                edges {
                  node {
                    id
                    title
                    description
                    github
                    link
                    image
                    stack {
                       id
                       name
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <Layout>
                { console.log(data) }
                <SEO 
                    title="Projects" 
                    description="This page lists down some of the significant self-projects Ronit Chattopadhyay has worked on"
                />
                <section className="projects-page">
                <Projects projects={data.allProjectsJson.edges} title="all projects" />
                </section>
            </Layout>
          )}
        />
    )
}

export default ProjectsPage