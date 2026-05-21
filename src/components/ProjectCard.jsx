const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7"/>
    <path d="M7 7h10v10"/>
  </svg>
)

export default function ProjectCard({ project, onHover, onLeave, isActive }) {
  const handleArrowClick = (e) => {
    e.stopPropagation()
    if (project.link && !project.locked) {
      window.open(project.link, "_blank", "noopener noreferrer")
    }
  }

  return (
    <div
      className={`proj-card ${isActive ? "proj-card--active" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="proj-card-top">
        <h3 className="proj-card-title">{project.title}</h3>
        <span
          className="proj-card-arrow-btn"
          onClick={handleArrowClick}
          style={{ cursor: project.locked ? "default" : project.link ? "pointer" : "default" }}
        >
          {project.locked ? <LockIcon /> : <ArrowIcon />}
        </span>
      </div>
      <div className="proj-card-meta">
        <span className="proj-card-meta-item">◫ {project.type}</span>
        <span className="proj-card-dot">•</span>
        <span className="proj-card-meta-item">⊞ {project.year}</span>
      </div>
      <p className="proj-card-desc">{project.description}</p>
      <div className="proj-card-tags">
        {project.tech.map((t) => (
          <span key={t} className="proj-card-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}