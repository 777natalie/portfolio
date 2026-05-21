const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0c",
        color: "#e5e5e5",
        paddingTop: "140px",
        paddingBottom: "120px",
      }}
    >
      <div className="hero-content">
        <div className="hero-inner">
 
          {/* TOP META ROW */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "80px",
            }}
          >
            <div>
              <div
                className="availability-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                }}
              >
                <span className="status-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ff6fb1" }} />
                AVAILABLE FOR WORK
              </div>
              <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.14em", color: "#a1a1aa" }}>
                OKLAHOMA CITY, OK
              </div>
            </div>
 
            <div className="scroll-hint" style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.14em", color: "#a1a1aa" }}>
              <span style={{ width: "2px", height: "48px", backgroundColor: "#ff6fb1" }} />
              <div>SCROLL TO EXPLORE<br />EXPERTISE & PROJECTS</div>
            </div>
          </div>
 
          {/* NAME BLOCK — stacked like Tanay, not side by side */}
          <div style={{ marginBottom: "0" }}>
 
            {/* NATALIE — left aligned, huge */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0", marginBottom: "0" }}>
              <h1
                className="hero-name-left"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  margin: 0,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ff6fb1")}
                onMouseLeave={(e) => (e.target.style.color = "#e5e5e5")}
              >
                Natalie
              </h1>
            </div>
 
            {/* ROLE ROW between the two names */}
            <div className="hero-role-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "0.14em", color: "#ff6fb1", whiteSpace: "nowrap" }}>
                → SOFTWARE ENGINEER
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.14em", color: "#a1a1aa", textAlign: "right" }}>
                BUILDING THOUGHTFUL DIGITAL TOOLS
              </span>
            </div>
 
            {/* ROMAN — right aligned, even bigger */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <h1
                className="hero-name-right"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  margin: 0,
                  letterSpacing: "-0.02em",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ff6fb1")}
                onMouseLeave={(e) => (e.target.style.color = "#e5e5e5")}
              >
                Roman
              </h1>
            </div>
          </div>
 
          {/* CTA */}
          <div className="hero-subcta">
            <div className="hero-divider" />
            <div className="hero-cta-row">
              <div className="hero-cta-left" onClick={scrollToExperience} style={{ cursor: "pointer" }}>
                <span className="hero-cta-arrow">↓</span>
                <span>View Experience</span>
              </div>
              <div className="hero-latency">
                <span className="latency-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.82C7.5 4.5 16.5 4.5 22 8.82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5.5 12.5C9.3 9.7 14.7 9.7 18.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 16.2C10.8 14.9 13.2 14.9 15 16.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="19" r="1.2" fill="currentColor"/>
                  </svg>
                </span>
                <span className="latency-label">LATENCY</span>
                <span className="latency-value">15ms</span>
                <span className="latency-dot" />
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default Hero;