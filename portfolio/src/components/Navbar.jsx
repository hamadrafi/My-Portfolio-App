"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [theme, setTheme] = useState("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link href="/" className="logo-link" onClick={closeMenu} spellCheck="false" data-gramm="false">
                        <span className="logo-text" spellCheck="false" data-gramm="false" translate="no">HR</span>
                    </Link>
                </div>
                <div className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="nav-menu">
                    <Link
                        href="/"
                        className={`nav-link ${pathname === "/" ? "active" : ""}`}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className={`nav-link ${pathname === "/projects" ? "active" : ""}`}
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>
                <div className="nav-actions">
                    <button
                        className="theme-toggle"
                        id="theme-toggle"
                        aria-label="Toggle dark mode"
                        onClick={toggleTheme}
                    >
                        <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
                    </button>
                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
                        id="mobile-menu-toggle"
                        aria-label="Toggle mobile menu"
                        onClick={toggleMenu}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
