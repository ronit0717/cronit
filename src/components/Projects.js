import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink}) => {
  return <section className="section projects">
    { console.log(projects) }
    { console.log(title) }
    { console.log(showLink) }
    <Title title={title} />
    <div className="section-center projects-center">
      {projects.map((project, index) => {
        return <Project 
                  key={project.node.id} 
                  index={index} 
                  {...project.node}
                />
        
      })} 
    </div>
    {
      showLink && <Link to="/projects" className="btn center-btn">Projects</Link>
    }
  </section>
}

export default Projects