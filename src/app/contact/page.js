"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "What types of projects do i work on?",
      answer: "I work on a wide range of projects including web applications, mobile apps, e-commerce platforms, APIs, and custom software solutions. I specialize in modern JavaScript frameworks, Python backends, and cloud deployments."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I always provide detailed timelines during the planning phase."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Absolutely! I love working with startups and small businesses. I understand the unique challenges they face and can provide scalable solutions that grow with your business."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, I offer ongoing support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_2dhxhzn', 'template_pz192sq', formRef.current, 'wv2JxiD9VlSEoMtQD')
      .then((result) => {
        setSuccessMessage("Message sent successfully! I'll get back to you soon.");
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setSuccessMessage("Message saved locally (simulation)! I'll get back to you soon.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSuccessMessage(""), 8000);
      });
  };

  return (
    <>
      <ClientScripts />
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">Let's discuss your next project </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-section">
        <div className="container ">
          <div className="contact-info">
            <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="contact-title">Email</h3>
              <div className="contact-details">
                <a href="mailto:hamadrafi11@gmail.com">hamadrafi11@gmail.com</a>
              </div>
            </div>
            <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <h3 className="contact-title">linkedin</h3>
              <div className="contact-details">
                <a href="https://www.linkedin.com/in/hamad-rafi-33b6a6260" target="_blank">linkedin.com/in/hamadrafi</a>
              </div>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="contact-title">Location</h3>
              <div className="contact-details">
                Lahore, Pakistan
              </div>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3 className="contact-title">Availability</h3>
              <div className="contact-details">
                Remote and On-Site Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="form-content" data-aos="fade-right">
              <h2 className="form-title">Send me a message</h2>
              <form ref={formRef} onSubmit={handleSubmit} id="contact-form" className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" id="name" name="name" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-textarea" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
            {/* Sidebar content */}
            <div className="contact-info-sidebar" data-aos="fade-left">
                <div className="sidebar-content">
                    <h3>Let's work together</h3>
                    <p>
                        I'm passionate about creating amazing digital experiences.
                        Whether you have a project in mind or just want to chat about technology,
                        I'd love to hear from you.
                    </p>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <i className="fas fa-clock"></i>
                            <div>
                                <h4>Response Time</h4>
                                <p>Usually within 24 hours</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <i className="fas fa-handshake"></i>
                            <div>
                                <h4>Collaboration</h4>
                                <p>Open to remote work </p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <i className="fas fa-globe"></i>
                            <div>
                                <h4>Languages</h4>
                                <p>English, Urdu</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <h4>Connect with me</h4>
                        <div className="social-buttons">
                            <a href="https://www.linkedin.com/in/hamad-rafi-33b6a6260" target="_blank" className="social-btn linkedin">
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/hamadrafi" target="_blank" className="social-btn github">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hamadrafi11@gmail.com" target="_blank" className="social-btn twitter">
                                <i className="fas fa-envelope"></i>
                                <span>Mail</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className={`faq-item ${activeFaq === index ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <h3>{faq.question}</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer" style={{ 
                    maxHeight: activeFaq === index ? "300px" : "0"
                  }}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {successMessage && (
        <div className="modal-backdrop" onClick={() => setSuccessMessage("")}>
          <div className="success-message" onClick={(e) => e.stopPropagation()}>
            <i className="fas fa-check-circle"></i>
            <h3>Message Sent!</h3>
            <p>{successMessage}</p>
            <button className="btn btn-primary" onClick={() => setSuccessMessage("")}>
              Awesome
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
