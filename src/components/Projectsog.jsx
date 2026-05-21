import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [previewActive, setPreviewActive] = useState(false)

  const handleHover = (project) => {
    setPreviewActive(false)
    setActiveProject(project)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPreviewActive(true)
      })
    })
  }

  const handleLeave = () => {
    setPreviewActive(false)
    setActiveProject(null)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-layout">

        {/* LEFT */}
        <div className="projects-list">
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

        {/* RIGHT — PREVIEW */}
        <div className="projects-preview">
          <div
            className={`preview-wrapper ${
              previewActive ? "is-active" : ""
            }`}
          >
            {activeProject?.image && (
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="preview-image"
              />
            )}

            {!activeProject && (
              <div className="preview-empty">
                <span>HOVER TO PREVIEW</span>
              </div>
            )}

            <span className="preview-label">PREVIEW MODE</span>
          </div>
        </div>

      </div>
    </section>
  )
}
