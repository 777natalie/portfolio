export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0b0b0c",
        paddingTop: "140px",
        paddingBottom: "120px",
        paddingLeft: "clamp(40px, 10vw, 120px)",
        paddingRight: "clamp(40px, 10vw, 120px)",
      }}
    >
      <div style={{ maxWidth: "840px", margin: "0 auto" }}>
 
        {/* eyebrow */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          letterSpacing: "0.14em",
          color: "#a1a1aa",
          marginBottom: "10px",
        }}>
          [ c ] contact
        </p>
 
        {/* heading */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(38px, 5vw, 72px)",
          lineHeight: 1.0,
          marginBottom: "48px",
        }}>
          Let's work together.
        </h2>
 
        {/* divider */}
        <div style={{
          borderTop: "1px dashed rgba(255,255,255,0.14)",
          marginBottom: "48px",
        }} />
 
        {/* links */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}>
          {[
            { label: "EMAIL", value: "natalieroman189773@gmail.com", href: "mailto:natalieroman189773@gmail.com" },
            { label: "GITHUB", value: "github.com/777natalie", href: "https://github.com/777natalie" },
            { label: "LINKEDIN", value: "linkedin.com/in/natalieroman", href: "https://www.linkedin.com/in/natalie-roman-792b6722b/?skipRedirect=true" },
          ].map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "24px 0",
                borderBottom: "1px dashed rgba(255,255,255,0.12)",
                textDecoration: "none",
                color: "inherit",
                transition: "color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ff6fb1"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "inherit"
              }}
            >
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#a1a1aa",
                minWidth: "100px",
              }}>
                {label}
              </span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px, 2.5vw, 28px)",
                fontWeight: 400,
              }}>
                {value}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "18px",
                opacity: 0.4,
              }}>
                ↗
              </span>
            </a>
          ))}
        </div>
 
        {/* availability note */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "#a1a1aa",
          marginTop: "48px",
          opacity: 0.6,
        }}>
          Currently available for full-time roles and freelance projects. Based in Oklahoma City, OK — open to remote.
        </p>
 
      </div>
    </section>
  )
}