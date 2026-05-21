import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-marquee-wrapper"
    >
      <div className="skills-marquee">
        <div className="skills-track">
          {skills.concat(skills).map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
