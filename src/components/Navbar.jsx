import { useEffect, useState } from "react";
 
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
};
 
const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
 
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
 
      // detect which section is in view
      const sections = ["home", "experience", "projects", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
 
  const navItems = [
    { label: "home", keyChar: "h", target: "home" },
    { label: "work", keyChar: "w", target: "experience" },
    { label: "projects", keyChar: "p", target: "projects" },
    { label: "contact", keyChar: "c", target: "contact" },
  ];
 
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: scrolled ? 12 : 36,
          left: scrolled ? 12 : 36,
          right: scrolled ? 12 : 36,
          zIndex: 9999,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          padding: scrolled ? "10px 18px" : "0px",
          borderRadius: scrolled ? "999px" : "0px",
          background: scrolled ? "rgba(0,0,0,0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* LOGO */}
        <span
          onClick={() => scrollTo("home")}
          style={{
            fontSize: scrolled ? "18px" : "22px",
            fontStyle: "italic",
            fontFamily: "'Playfair Display', serif",
            color: "#a1a1aa",
            cursor: "pointer",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#ff6fb1")}
          onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
        >
          Natalie
        </span>
 
        {/* CENTER NAV */}
        {!isMobile && (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                gap: scrolled ? "20px" : "28px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: scrolled ? "11px" : "13px",
                color: "#a1a1aa",
                letterSpacing: "0.12em",
                transition: "all 0.4s ease",
              }}
            >
              {navItems.map(({ label, keyChar, target }) => {
                const isActive = activeSection === target ||
                  (target === "experience" && activeSection === "experience");
                return (
                  <span
                    key={label}
                    onClick={() => scrollTo(target)}
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      color: isActive ? "#ff6fb1" : "#a1a1aa",
                      fontWeight: isActive ? "500" : "400",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6fb1")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#ff6fb1" : "#a1a1aa")}
                  >
                    [{keyChar}] {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}
 
        {/* RIGHT */}
        {!isMobile ? (
          <StatusPill scrolled={scrolled} />
        ) : (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              cursor: "pointer", justifySelf: "end",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            <div style={{ position: "relative", width: 18, height: 12 }}>
              <span className={`line ${menuOpen ? "open top" : "top"}`} />
              <span className={`line ${menuOpen ? "open middle" : "middle"}`} />
              <span className={`line ${menuOpen ? "open bottom" : "bottom"}`} />
            </div>
          </button>
        )}
      </div>
 
      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)",
          zIndex: 10000, padding: "40px", display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "28px", color: "#e5e5e5" }}>Natalie</span>
            <button onClick={() => setMenuOpen(false)} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "none", color: "#e5e5e5", fontSize: "22px", cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "36px", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "48px", color: "#e5e5e5" }}>
            {navItems.map(({ label, target }) => (
              <span
                key={label}
                onClick={() => scrollTo(target)}
                style={{ cursor: "pointer", color: activeSection === target ? "#ff6fb1" : "#e5e5e5" }}
                onMouseEnter={(e) => (e.target.style.color = "#ff6fb1")}
                onMouseLeave={(e) => (e.target.style.color = activeSection === target ? "#ff6fb1" : "#e5e5e5")}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
 
export default Navbar;
 
const StatusPill = ({ scrolled }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString([], {
        hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/Chicago",
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "8px",
      padding: scrolled ? "6px 12px" : "8px 14px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: scrolled ? "11px" : "13px",
      color: "#a1a1aa", letterSpacing: "0.08em",
      transition: "all 0.4s ease",
    }}>
      <span className="status-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#ff6fb1", flexShrink: 0 }} />
      <span>{time}</span>
      <span>CST</span>
    </div>
  );
};