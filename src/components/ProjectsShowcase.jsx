"use client";

import { useState, useEffect } from "react";
import VideoProjectCard from "./VideoProjectCard";
import AOS from "aos";

const PROJECTS = [
    {
        title: "Integriti-MS",
        description: "A CMS using React, TypeScript, and Next.js to manage clients, developers, deadlines, tasks, and generate complete team performance reports.",
        tech: ["React","Typescript", "Next.js"],
        imgSrc: "/imgs/IntegritiMs.jpg",
        videoSrc: "/imgs/vids/Integriti-MS.webm",
        liveLink: "https://integriti-ms-2j3k.vercel.app/",
        category: "web & api",
    },
    {
        title: "Callavan",
        description: "Real-time driver tracking app using Webflow (frontend) and Supabase (backend) to connect users with nearby drivers.",
        tech: ["Webflow","CMS", "Supabase"],
        imgSrc: "/imgs/callavan.jpg",
        videoSrc: "/imgs/vids/callavan.webm",
        liveLink: "https://www.callavan.live/",
        category: "web & api",
    },
    {
        title: "Protek Solutions",
        description: "Modern responsive corporate website using Next.js & Bootstrap with a clean, interactive design for eco-friendly solutions.",
        tech: ["Bootstrap","React", "Next.js"],
        imgSrc: "/imgs/protek.jpg",
        videoSrc: "/imgs/vids/Protek.webm",
        liveLink: "https://www.proteksolutions.ca/",
        category: "web",
    },
    {
        title: "SouthLa Cafe",
        description: "A modern, responsive website built with Webflow CMS, showcasing South LA Cafe’s community-driven cafés focused on jobs and local resilience.",
        tech: ["Webflow", "Interactions", "CMS"],
        imgSrc: "/imgs/southla.jpg",
        videoSrc: "/imgs/vids/southla.webm",
        liveLink: "https://south-la-cafe.webflow.io/",
        category: "wordpress",
    },
    {
        title: "PumpRack",
        description: "A modern, inventory platform for industrial pumps and parts with categorized browsing, service listings, and a search-focused user interface.",
        tech: ["Shopify", "Liquid", "Shopify CLI"],
        imgSrc: "/imgs/pumprack.jpg",
        videoSrc: "/imgs/vids/pumprack.webm",
        liveLink: "https://pumprack.com/",
        category: "wordpress",
    },
    {
        title: "Email Forge",
        description: "The Email Forge builds and operates lifecycle retention infrastructure for eCommerce brands driving compounding growth without extra ad spend.",
        tech: ["WordPress", "Elementor", "PHP"],
        imgSrc: "/imgs/EmailForge.jpg",
        videoSrc: "/imgs/vids/EmailForge.webm",
        liveLink: "https://theemailforge.com/",
        category: "wordpress",
    },
        {
        title: "Sociolyze",
        description: "A static marketing and portfolio website built with Eleventy for scalable multi-page content using reusable templates and plain HTML output.",
        tech: ["Eleventy", "Bootstrap", "JQuery"],
        imgSrc: "/imgs/sociolyze.jpg",
        videoSrc: "/imgs/vids/sociolyze.webm",
        liveLink: "https://sociolyze-4ha4.vercel.app/",
        category: "web",
    },
    {
        title: "ExhibitsUSA",
        description: "A streamlined platform bringing regional art to audiences everywhere while empowering artists and cultural organizations.",
        tech: ["Webflow", "Interactions", "CMS"],
        imgSrc: "/imgs/ExhibitsUsa.jpg",
        videoSrc: "/imgs/vids/ExhibitsUsa.webm",
        liveLink: "https://eusa-org.webflow.io/page-2",
        category: "wordpress",
    },
    {
        title: "Ascender Athletics",
        description: "A modern platform empowering youth sports organizations with high-yield fundraising tools and premium custom athletic gear.",
        tech: ["Shopify", "Liquid", "Shopify CLI"],
        imgSrc: "/imgs/Ascender-Athletics.jpg",
        videoSrc: "/imgs/vids/Ascender.webm",
        liveLink: "https://ascenderathletics.com/",
        category: "wordpress",
    },
    {
        title: "RegexTool Platform",
        description: "A web platform for testing and visualizing regex patterns, showing real-time matches, pattern validity, and DFA state transitions.",
        tech: ["Tailwind", "React", "Typescript"],
        imgSrc: "/imgs/regex.jpg",
        videoSrc: "/imgs/vids/RegexTool.webm",
        liveLink: "https://regex-tool-1.vercel.app/",
        category: "web",
    },
    {
        title: "Endless Creations",
        description: "A web platform for showcasing a brand’s services and experiences, delivering seamless interaction and professional engagement.",
        tech: ["Shopify", "Liquid", "Shopify CLI"],
        imgSrc: "/imgs/Endless-Creation.jpg",
        videoSrc: "/imgs/vids/Endless.webm",
        liveLink: "https://endless-creations-spero.myshopify.com/",
        category: "wordpress",
    },
    {
        title: "Fitness Lab",
        description: "A sleek, responsive fitness app layout built with React and Tailwind CSS, currently a static front-end prototype showcasing a clean user interface.",
        tech: ["Tailwind", "React", "Framer Motion"],
        imgSrc: "/imgs/FitnessApp.png",
        videoSrc: "/imgs/vids/FitnessApp.webm",
        liveLink: "https://fitness-lab.vercel.app/",
        category: "web",
    },
    {
        title: "ElectroEnergy",
        description: "ElectroEnergy — A dynamic, responsive solar solutions website offering diverse solar panels and an instant calculator for quick energy and cost estimates.",
        tech: ["WordPress", "Elementor", "PHP"],
        imgSrc: "/imgs/ElectroEnergy.png",
        videoSrc: "/imgs/vids/ElectroEnergy.webm",
        liveLink: "https://electroenergy.co.uk/",
        category: "wordpress",
    },
    {
        title: "Amazon Clone",
        description: "Amazon — An interactive e-commerce interface with product search, add-to-cart, checkout, and real-time price, shipping, and tax calculations.",
        tech: ["HTML5", "JavaScript", "Jasmine"],
        imgSrc: "/imgs/Amazon Clone.png",
        videoSrc: "/imgs/vids/Amazon.webm",
        liveLink: "https://amazon-cartt.netlify.app/",
        category: "web & api",
    },
    {
        title: "Thokmandee",
        description: "Thokmandee — A wholesale B2B marketplace connecting small businesses with diverse products, best prices, built on Dokan Pro.",
        tech: ["WordPress", "Elementor", "Dokan"],
        imgSrc: "/imgs/Thokmandee.png",
        videoSrc: "/imgs/vids/Thokmandee.webm",
        liveLink: "https://thokmandee.com/",
        category: "wordpress",
    },
    {
        title: "CurrencyX",
        description: "CurrencyX — A sleek, responsive currency converter web app with real-time conversion logic and smooth UI interactions.",
        tech: ["Bootstrap 5", "JavaScript", "REST API"],
        imgSrc: "/imgs/CurrencyX-WebApp.png",
        videoSrc: "/imgs/vids/Currency.webm",
        liveLink: "https://hamadrafi.github.io/CurrencyX-WebApp/",
        category: "web & api",
    },
    {
        title: "Zryya",
        description: "Zryya — A white-label and private-label platform that simplifies custom product creation for all experience levels, making the entire process seamless.",
        tech: ["WordPress", "Elementor", "PHP"],
        imgSrc: "/imgs/Zryya.png",
        videoSrc: "/imgs/vids/Zryya.webm",
        liveLink: "https://zryya.com/",
        category: "wordpress",
    },
    {
        title: "Weather Dashboard",
        description: "Weather Dashboard — A responsive web app using a public weather API that lets users search cities and get hourly updates and 7-day forecast.",
        tech: ["HTML5", "JavaScript", "REST API"],
        imgSrc: "/imgs/WeatherApp.png",
        videoSrc: "/imgs/vids/WeatherApp.webm",
        liveLink: "https://hamadrafi.github.io/Weather-App/",
        category: "web & api",
    },
    {
        title: "HexoraAi",
        description: "Hexora AI — A modern, responsive AI showcase landing page with dark mode, scroll animations, interactive stats, and parallax effects.",
        tech: ["HTML5", "Bootstrap 5", "JavaScript"],
        imgSrc: "/imgs/HexoraAi-WebApp.png",
        videoSrc: "/imgs/vids/Hexora.webm",
        liveLink: "https://hamadrafi.github.io/HexoraAi-WebApp/",
        category: "web",
    },
    {
        title: "Techova",
        description: "Techova — A modern, responsive product showcase website featuring dark mode, scroll animations, and SEO schema integration.",
        tech: ["HTML5", "Bootstrap 5", "JavaScript"],
        imgSrc: "/imgs/Techova-WebApp.png",
        videoSrc: "/imgs/vids/Techova.webm",
        liveLink: "https://hamadrafi.github.io/Techova-WebApp/",
        category: "web",
    },
    {
        title: "All Nations Wholesale",
        description: "All Nations Wholesale — A multi-cultural wholesale platform offering diverse products, reliable EU-wide delivery, and over 50 years of trusted service.",
        tech: ["WordPress", "Elementor", "PHP"],
        imgSrc: "/imgs/All Nations.png",
        videoSrc: "/imgs/vids/All Nations.webm",
        liveLink: "https://allnationswholesale.com/",
        category: "wordpress",
    },
];

export default function ProjectsShowcase() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = PROJECTS.filter(project => {
        if (filter === "all") return true;
        const projectCategories = project.category.split("&").map(c => c.trim().toLowerCase());
        return projectCategories.includes(filter);
    });

    const handleFilterChange = (category) => {
        setFilter(category);
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    };

    return (
        <section className="projects-section">
            <div className="container">
                <div className="filter-container">
                    <button
                        className={`filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => handleFilterChange("all")}
                    >
                        All Projects
                        <span className="count">{PROJECTS.length}</span>
                    </button>
                    <button
                        className={`filter-btn ${filter === "web" ? "active" : ""}`}
                        onClick={() => handleFilterChange("web")}
                    >
                        Web Development
                        <span className="count">
                            {PROJECTS.filter(p => p.category.toLowerCase().split(/[&,]/).map(c => c.trim()).includes("web")).length}
                        </span>
                    </button>
                    <button
                        className={`filter-btn ${filter === "wordpress" ? "active" : ""}`}
                        onClick={() => handleFilterChange("wordpress")}
                    >
                        CMS Development
                        <span className="count">
                            {PROJECTS.filter(p => p.category.toLowerCase().split(/[&,]/).map(c => c.trim()).includes("wordpress")).length}
                        </span>
                    </button>
                    <button
                        className={`filter-btn ${filter === "api" ? "active" : ""}`}
                        onClick={() => handleFilterChange("api")}
                    >
                        API & Backend
                        <span className="count">
                            {PROJECTS.filter(p => p.category.toLowerCase().split(/[&,]/).map(c => c.trim()).includes("api")).length}
                        </span>
                    </button>
                </div>

                <div className="projects-grid" id="projects-grid">
                    {filteredProjects.map((project, index) => {
                        const isEager = index < 3;
                        const aosDelay = isEager ? String((index + 1) * 100) : "0";
                        return (
                            <VideoProjectCard
                                key={project.title}
                                {...project}
                                delay={aosDelay}
                                loadEager={isEager}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
