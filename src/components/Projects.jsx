import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const LockSVG = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,111,177,0.6)" }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [previewActive, setPreviewActive] = useState(false)

  const handleHover = (project) => {
    setPreviewActive(false)
    setActiveProject(project)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPreviewActive(true))
    })
  }

  const handleLeave = () => {
    setPreviewActive(false)
    setActiveProject(null)
  }

  const isLocked = activeProject?.locked

  return (
    <section id="projects" className="proj-section">
      <div className="proj-inner">

        <div className="proj-list">
          <div className="proj-header">
            <p className="proj-eyebrow">[ p ] projects</p>
            <h2 className="proj-title">Selected Work</h2>
            <span className="proj-range">2024 — 2026</span>
            <div className="proj-divider" />
          </div>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject?.id === project.id}
              onHover={() => handleHover(project)}
              onLeave={handleLeave}
            />
          ))}
        </div>

        <div className="proj-preview-col">
          <div className={`proj-preview-wrap ${previewActive ? "is-active" : ""} ${isLocked ? "is-locked" : ""}`}>
            <span className="proj-corner proj-corner--tl" />
            <span className="proj-corner proj-corner--tr" />
            <span className="proj-corner proj-corner--bl" />
            <span className="proj-corner proj-corner--br" />

            {isLocked && (
              <div className="proj-preview-locked">
                <LockSVG />
                <p className="proj-preview-lock-label">DEMO COMING SOON</p>
                <p className="proj-preview-lock-sub">In active development</p>
              </div>
            )}

            {!isLocked && activeProject?.image && (
              <img src={activeProject.image} alt={activeProject.title} className="proj-preview-img" />
            )}

            {!isLocked && !activeProject?.image && (
              <div className="proj-preview-empty">
                <span>{activeProject ? activeProject.title : "HOVER TO PREVIEW"}</span>
              </div>
            )}

            <span className="proj-preview-label">PREVIEW MODE</span>
          </div>
        </div>

      </div>
    </section>
  )
}