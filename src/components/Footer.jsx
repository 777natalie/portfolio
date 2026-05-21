export default function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/777natalie" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/natalie-roman-792b6722b/?skipRedirect=true" },
    { label: "Resume", href: "#" },
  ]
 
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-open">Open for collaboration</p>
            <a href="mailto:natalieroman189773@gmail.com" className="footer-email">
              natalieroman189773@gmail.com
            </a>
          </div>
          <div className="footer-links">
            {links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-location">Oklahoma City, OK · CST</span>
          <span className="footer-copy">© 2026 Natalie Roman</span>
        </div>
      </div>
    </footer>
  )
}