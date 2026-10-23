import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">Hamad Rafi</span>
                        </div>
                        <p className="footer-description">
                            Building digital experiences that make a difference.
                        </p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-section">
                            <h3>Navigation</h3>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/case-studies">Case Studies</Link></li>
                                <li><Link href="/fyp">FYP</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Connect</h3>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/hamad-rafi-33b6a6260" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/hamadrafi" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hamadrafi11@gmail.com">
                                        Mail
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-social">
                        <a 
                            href="https://www.linkedin.com/in/hamad-rafi-33b6a6260" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a 
                            href="https://github.com/hamadrafi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </a>
                        <a 
                            href="mailto:hamadrafi11@gmail.com" 
                            className="social-link"
                            aria-label="Email"
                        >
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Hamad Rafi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
