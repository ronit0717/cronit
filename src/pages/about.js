import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"

const stackData = [
  {
      "id" : 1,
      "name" : "Java (Spring Boot)"
  },
  {
      "id" : 2,
      "name" : "Javascript (React JS, Node JS)"
  },
  {
      "id" : 3,
      "name" : "Python"
  },
  {
      "id" : 4,
      "name" : "Kubernetes"
  },
  {
      "id" : 5,
      "name" : "MYSQL"
  },
  {
      "id" : 6,
      "name" : "Aerospike"
  }
];

const stack = stackData.map((item) => {
  return <span key={item.id}>{item.name}</span>
})

const query = graphql`
{
  file(relativePath: {eq: "cronit-hero-img-0.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const About = () => {
  const {
    file: {
      childImageSharp: {fluid}
    }
  } = useStaticQuery(query);
  
  return (
        <Layout>
          <SEO title="About" description="About Ronit Chattopadhyay - Software Engineer" />
          <section className="about-page">
            <div className="section-center about-center">
              <Image fluid={fluid} className="about-img" />
              <article className="about-text">
                <Title title="About Ronit Chattopadhyay" />
                <p>Ronit is a software engineer, having {new Date().getFullYear() - 2016} years of experice in developing web-based platforms, applications and tools in the E-commerce and fintech domains.</p>
                <p>He has worked on various aspects of the software development life cycle including design, coding, testing and deployment of software. He focuses on developing applications with scalable, maintainable and documented code.</p>
                <p>He is enthusiastic about Software design and architecture. He learns from technical books, blogs and videos/MOOCs. Currently, he is working on Domain Driven Design (DDD) principles and actively contributing in re-architecture in his current organisation, Flipkart</p>
                <div className="about-stack">
                  {stack}
                </div>
              </article>
            </div>
          </section>
        </Layout>
  )
}



export default About
