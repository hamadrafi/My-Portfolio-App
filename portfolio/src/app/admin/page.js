"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    // Load data from localStorage
    const savedSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const savedAnalytics = JSON.parse(localStorage.getItem("portfolioAnalytics") || "{}");
    setSubmissions(savedSubmissions);
    setAnalytics(savedAnalytics);
  }, []);

  const totalViews = analytics.pageViews 
    ? Object.values(analytics.pageViews).reduce((a, b) => a + b, 0) 
    : 0;
    
  const totalSocialClicks = analytics.socialClicks 
    ? Object.values(analytics.socialClicks).reduce((a, b) => a + b, 0) 
    : 0;

  const refreshData = () => {
    const savedSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const savedAnalytics = JSON.parse(localStorage.getItem("portfolioAnalytics") || "{}");
    setSubmissions(savedSubmissions);
    setAnalytics(savedAnalytics);
  };

  const exportData = () => {
    const data = {
      submissions,
      analytics,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearData = () => {
    if (confirm("Are you sure you want to clear all stored data?")) {
      localStorage.removeItem("contactSubmissions");
      localStorage.removeItem("portfolioAnalytics");
      localStorage.removeItem("totalSubmissions");
      setSubmissions([]);
      setAnalytics({});
    }
  };

  return (
    <>
      <Navbar />

      <section className="admin-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Admin Panel</h1>
            <p className="page-subtitle">Manage your portfolio data and analytics</p>
          </div>
        </div>
      </section>

      <section className="admin-dashboard">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-envelope"></i></div>
              <div className="stat-content">
                <h3 className="stat-number">{submissions.length}</h3>
                <p className="stat-label">Total Messages</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-eye"></i></div>
              <div className="stat-content">
                <h3 className="stat-number">{totalViews}</h3>
                <p className="stat-label">Page Views</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-share-alt"></i></div>
              <div className="stat-content">
                <h3 className="stat-number">{totalSocialClicks}</h3>
                <p className="stat-label">Social Clicks</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-calendar"></i></div>
              <div className="stat-content">
                <h3 className="stat-number">{analytics.lastActivity ? new Date(analytics.lastActivity).toLocaleDateString() : "Never"}</h3>
                <p className="stat-label">Last Activity</p>
              </div>
            </div>
          </div>

          <div className="admin-actions">
            <button className="btn btn-primary" onClick={refreshData}>
              <i className="fas fa-sync"></i> Refresh Data
            </button>
            <button className="btn btn-secondary" onClick={exportData}>
              <i className="fas fa-download"></i> Export Data
            </button>
            <button className="btn btn-outline" onClick={clearData}>
              <i className="fas fa-trash"></i> Clear Data
            </button>
          </div>

          <div className="admin-section">
            <h2 className="section-title">Contact Submissions</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="no-data">No submissions yet</td>
                    </tr>
                  ) : (
                    submissions.map((sub, idx) => (
                      <tr key={idx}>
                        <td>{new Date(sub.timestamp).toLocaleDateString()}</td>
                        <td>{sub.name}</td>
                        <td>{sub.email}</td>
                        <td>{sub.subject}</td>
                        <td>{sub.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
