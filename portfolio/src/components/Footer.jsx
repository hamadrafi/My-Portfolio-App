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
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Connect</h4>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/hamad-rafi-33b6a6260 " target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/hamadrafi" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hamadrafi11@gmail.com" target="_blank" rel="noopener noreferrer">
                                        Mail
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/hamad-rafi-33b6a6260 " target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/hamadrafi" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hamadrafi11@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fas fa-envelope"></i>
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
