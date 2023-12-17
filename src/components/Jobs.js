import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"


const Jobs = () => {
  
    const [value, setValue] = React.useState(0);
    const [jobs, setJobs] = React.useState([]);
  return (
    <StaticQuery 
      query={graphql`
        query AboutMeStackQuery {
          allJobsJson {
            edges {
              node {
                id
                company
                date
                desc {
                  id
                  name
                }
                position
              }
            }
          }
        }
      `}
      render={data => ( 
        <section className="section jobs">
            { setJobs(data.allJobsJson.edges) }
            <Title title = "experience" />
            <div className="jobs-center">
                {/* Button Container */}
                <div className="btn-container">
                    {data.allJobsJson.edges.map((jobItem, index) => {
                    return <button 
                                key={ jobItem.node.id } 
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && "active-btn"}`}>{jobItem.node.company.length > 10 ? jobItem.node.company.substring(0,6) : jobItem.node.company}</button>
                    })}
                </div>
                {/* Job Info */}
                { jobs && getArticle(jobs[value]) }
            </div>
            <Link to="/about" className="btn center-btn">More Info</Link>
        </section>)} 
    />
  )
}

const getArticle = (selectedJob) => {
    return (
        selectedJob && 
        <article className="job-info">
        <h3>{selectedJob.node.position}</h3>
        <h4>{selectedJob.node.company}</h4>
        <p className="job-date">{selectedJob.node.date}</p>
        {
        selectedJob.node.desc.map((item) => {
            return (<div key={item.id} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item.name}</p>
                </div>
            )
        })
        }
    </article>
  )}

export default Jobs