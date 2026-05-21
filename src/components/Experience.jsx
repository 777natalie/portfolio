import { useState } from "react"
 
export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
 
  const jobs = [
    {
      company: "First United Bank",
      role: "Relationship Banker",
      period: "Dec 2025 — Present",
      location: "Moore, OK",
      bullets: [
        "Manage client banking relationships across personal and business accounts, advising on financial products tailored to individual needs.",
        "Consistently meet and exceed monthly sales targets in a high-volume branch environment.",
        "Build long-term client trust through personalized service, follow-through, and consistent communication across a high-volume customer base.",
      ],
    },
    {
      company: "Dillard's Inc.",
      role: "Sales Associate",
      period: "July 2022 — Dec 2025",
      location: "Oklahoma City, OK",
      bullets: [
        "Delivered personalized customer service across multiple departments in a fast-paced retail environment.",
        "Consistently met sales quotas and maintained high product knowledge across rotating inventory.",
        "Operated POS systems and managed accurate inventory tracking.",
      ],
    },
  ]
 
  return (
    <section id="experience" className="exp-section">
      <div className="exp-inner">
 
        {/* LEFT sticky */}
        <div className="exp-left">
          <h2 className="exp-heading">Work<br />History</h2>
          <div className="exp-rule" />
          <p className="exp-bio">
            I'm a first-gen CS grad from OU with a background in AI systems, local government, and community organizing. I've built reinforcement learning agents, local LLM pipelines for law enforcement, and a bilingual civic platform born from a real school board campaign. I want to build technology that serves the people, closing the gaps that data can see but policy hasn't reached yet. Open to full-time and freelance.
          </p>
          <a href="#" className="exp-resume-btn">
            <span>↓</span> DOWNLOAD RESUME
          </a>
        </div>
 
        {/* RIGHT — jobs with timeline */}
        <div className="exp-right">
          <div className="exp-timeline-line" />
          {jobs.map((job, i) => (
            <div
              key={i}
              className="exp-job-wrap"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`exp-timeline-dot ${hoveredIndex === i ? "exp-timeline-dot--active" : ""}`} />
              <div className={`exp-card ${hoveredIndex === i ? "exp-card--active" : ""}`}>
                <div className="exp-card-header">
                  <div className="exp-card-name-row">
                    <span className="exp-card-icon">⬡</span>
                    <h3 className="exp-card-company">{job.company}</h3>
                  </div>
                  <span className="exp-card-period">
                    <span className="exp-card-period-icon">⊞</span>
                    {job.period}
                  </span>
                </div>
                <div className="exp-card-divider" />
                <div className="exp-card-role-row">
                  <span className="exp-card-role-icon">◫</span>
                  <span className="exp-card-role">{job.role}</span>
                  <span className="exp-card-arrow">&rarr;</span>
                </div>
                <ul className="exp-card-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="exp-card-bullet">{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  )
}