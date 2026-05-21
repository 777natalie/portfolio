export default function ProjectCard({ project, onHover, onLeave, isActive }) {
  return (
    <div
      className={`project-row ${isActive ? "active" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div>
        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tags">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="project-arrow">↗</div>
    </div>
  )
}
