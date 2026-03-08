// Contact page functionality with client-side backend
let contactFormInitialized = false;
document.addEventListener("DOMContentLoaded", function () {
  initializeFAQ();
  initializeContactForm();
  initializeSocialButtons();
  initializeEmailJS();
});

// Initialize EmailJS (for actual email sending)
function initializeEmailJS() {
  // Initialize EmailJS - you'll need to replace with your actual service ID
  // Sign up at https://www.emailjs.com/ to get your service ID
  if (typeof emailjs !== "undefined") {
    emailjs.init("wv2JxiD9VlSEoMtQD"); // Replace with your EmailJS user ID
  }
}

function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-question i");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
        faqItem.querySelector(".faq-answer").style.maxHeight = null;
        faqItem.querySelector(".faq-question i").style.transform =
          "rotate(0deg)";
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
}

function initializeContactForm() {
  if (contactFormInitialized) return; // Prevent double initialization
  contactFormInitialized = true;

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    // Add real-time validation
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        clearFieldError(this);
      });
    });

    // Form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted");

      // Validate all fields
      let isValid = true;
      inputs.forEach((input) => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        submitForm(contactForm);
      }
    });
  }
}

function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = "";

  // Remove existing error
  clearFieldError(field);

  // Validation rules
  switch (fieldName) {
    case "name":
      if (value.length < 2) {
        errorMessage = "Name must be at least 2 characters long";
        isValid = false;
      }
      break;
    case "email":
      if (!isValidEmail(value)) {
        errorMessage = "Please enter a valid email address";
        isValid = false;
      }
      break;
    case "subject":
      if (value.length < 3) {
        errorMessage = "Subject must be at least 3 characters long";
        isValid = false;
      }
      break;
    case "message":
      if (value.length < 10) {
        errorMessage = "Message must be at least 10 characters long";
        isValid = false;
      }
      break;
  }

  if (!isValid) {
    showFieldError(field, errorMessage);
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add("error");

  const errorElement = document.createElement("div");
  errorElement.className = "form-error";
  errorElement.textContent = message;

  field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
  field.classList.remove("error");
  const errorElement = field.parentNode.querySelector(".form-error");
  if (errorElement) {
    errorElement.remove();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm(form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;

  // Show loading state
  submitButton.innerHTML = '<span class="spinner"></span> Sending...';
  submitButton.disabled = true;

  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Add timestamp and ID
  const submission = {
    id: generateUniqueId(),
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
    status: "new",
  };

  // Save to localStorage (client-side storage)
  saveToLocalStorage(submission);

  // Try to send email using EmailJS (if configured)
  sendEmailNotification(submission)
    .then(() => {
      showSuccess("Message sent successfully! I'll get back to you soon.");
      form.reset();
      // Update submission status
      updateSubmissionStatus(submission.id, "sent");
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      showSuccess("Message saved locally! I'll get back to you soon.");
      // Still show success since we saved locally
    })
    .finally(() => {
      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    });
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function saveToLocalStorage(submission) {
  try {
    let submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    submissions.push(submission);

    // Keep only last 100 submissions to prevent storage overflow
    if (submissions.length > 100) {
      submissions = submissions.slice(-100);
    }

    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Update submission count
    const count = submissions.length;
    localStorage.setItem("totalSubmissions", count.toString());

    console.log("Form submission saved locally:", submission);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

function updateSubmissionStatus(id, status) {
  try {
    let submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    const index = submissions.findIndex((sub) => sub.id === id);
    if (index !== -1) {
      submissions[index].status = status;
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    }
  } catch (error) {
    console.error("Error updating submission status:", error);
  }
}

function sendEmailNotification(submission) {
  return new Promise((resolve, reject) => {
    // Check if EmailJS is loaded
    if (typeof emailjs === "undefined") {
      reject(new Error("EmailJS not loaded"));
      return;
    }

    // Email template parameters
    const templateParams = {
      name: submission.name,
      email: submission.email,
      subject: submission.subject,
      message: submission.message,
      time: new Date().toLocaleString(), // optional, only if your template uses {{time}}
      from_name: submission.name, // used in the email "From Name"
      from_email: submission.email, // used in the email "From Email"
    };

    // Send email using EmailJS
    emailjs
      .send("service_2dhxhzn", "template_pz192sq", templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        resolve(response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        reject(error);
      });
  });
}

function showSuccess(message) {
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Success!</h3>
        <p>${message}</p>
        <button class="btn btn-primary" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
            Close
        </button>
    `;

  document.body.appendChild(successMessage);

  // Remove success message after 8 seconds
  setTimeout(() => {
    if (successMessage.parentNode) {
      successMessage.remove();
    }
  }, 8000);

  // Close on click outside
  successMessage.addEventListener("click", (e) => {
    if (e.target === successMessage) {
      successMessage.remove();
    }
  });
}

function initializeSocialButtons() {
  const socialButtons = document.querySelectorAll(".social-btn");

  socialButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      this.classList.add("micro-pulse");

      // Track social media clicks
      const platform = this.classList.contains("linkedin")
        ? "linkedin"
        : this.classList.contains("github")
        ? "github"
        : this.classList.contains("twitter")
        ? "twitter"
        : "unknown";

      trackSocialClick(platform);

      setTimeout(() => {
        this.classList.remove("micro-pulse");
      }, 1000);
    });
  });
}

function trackSocialClick(platform) {
  try {
    let analytics = JSON.parse(
      localStorage.getItem("portfolioAnalytics") || "{}"
    );

    if (!analytics.socialClicks) {
      analytics.socialClicks = {};
    }

    if (!analytics.socialClicks[platform]) {
      analytics.socialClicks[platform] = 0;
    }

    analytics.socialClicks[platform]++;
    analytics.lastActivity = new Date().toISOString();

    localStorage.setItem("portfolioAnalytics", JSON.stringify(analytics));
  } catch (error) {
    console.error("Error tracking social click:", error);
  }
}

// Public API for accessing stored data (for admin purposes)
window.PortfolioAPI = {
  getSubmissions: function () {
    try {
      return JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    } catch (error) {
      console.error("Error getting submissions:", error);
      return [];
    }
  },

  getAnalytics: function () {
    try {
      return JSON.parse(localStorage.getItem("portfolioAnalytics") || "{}");
    } catch (error) {
      console.error("Error getting analytics:", error);
      return {};
    }
  },

  exportData: function () {
    const data = {
      submissions: this.getSubmissions(),
      analytics: this.getAnalytics(),
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-data-${
      new Date().toISOString().split("T")[0]
    }.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  clearData: function () {
    if (confirm("Are you sure you want to clear all stored data?")) {
      localStorage.removeItem("contactSubmissions");
      localStorage.removeItem("portfolioAnalytics");
      localStorage.removeItem("totalSubmissions");
      console.log("All data cleared");
    }
  },
};

// Initialize page visit tracking
function trackPageVisit() {
  try {
    let analytics = JSON.parse(
      localStorage.getItem("portfolioAnalytics") || "{}"
    );

    if (!analytics.pageViews) {
      analytics.pageViews = {};
    }

    const page = window.location.pathname.split("/").pop() || "index.html";

    if (!analytics.pageViews[page]) {
      analytics.pageViews[page] = 0;
    }

    analytics.pageViews[page]++;
    analytics.lastVisit = new Date().toISOString();

    localStorage.setItem("portfolioAnalytics", JSON.stringify(analytics));
  } catch (error) {
    console.error("Error tracking page visit:", error);
  }
}

// Track page visit on load
trackPageVisit();

// Add contact page specific styles
const contactStyles = document.createElement("style");
contactStyles.textContent = `
    .contact-form-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
        margin-top: 4rem;
    }
    
    .form-content {
        background: var(--surface-color);
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-light);
    }
    
    .form-title {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    
    .form-subtitle {
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
    .form-input.error,
    .form-textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .contact-info-sidebar {
        background: var(--background-color);
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-light);
    }
    
    .sidebar-content h3 {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    
    .sidebar-content p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    
    .contact-methods {
        margin-bottom: 3rem;
    }
    
    .contact-method {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .contact-method i {
        font-size: 1.25rem;
        color: var(--primary-color);
        width: 30px;
        text-align: center;
    }
    
    .contact-method h4 {
        color: var(--text-primary);
        margin-bottom: 0.25rem;
        font-size: 1rem;
    }
    
    .contact-method p {
        color: var(--text-secondary);
        font-size: 0.875rem;
        margin: 0;
    }
    
    .social-links h4 {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    
    .social-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .social-btn {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s ease;
        color: white;
    }
    
    .social-btn.linkedin {
        background: #0077b5;
    }
    
    .social-btn.github {
        background: #333;
    }
    
    .social-btn.twitter {
        background: #1da1f2;
    }
    
    .social-btn:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
    }
    
    .faq-section {
        margin-top: 4rem;
        padding: 6rem 0;
        background: var(--surface-color);
    }
    
    .faq-container {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .faq-item {
        background: var(--background-color);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        box-shadow: var(--shadow-light);
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        box-shadow: var(--shadow-medium);
    }
    
    .faq-question {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .faq-question:hover {
        background: var(--surface-color);
    }
    
    .faq-question h3 {
        color: var(--text-primary);
        margin: 0;
        font-size: 1.125rem;
    }
    
    .faq-question i {
        color: var(--primary-color);
        transition: transform 0.3s ease;
    }
    
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .faq-answer p {
        padding: 0 1.5rem 1.5rem;
        color: var(--text-secondary);
        margin: 0;
    }
    
.success-message {
  font-family: 'Inter', sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1e293b;
  color: #ffffff;
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  max-width: 360px;
  width: calc(100% - 2rem);
  animation: fadeInUp 0.3s ease-out;
  box-sizing: border-box;
  text-align: center;
}

.success-message i.fas.fa-check-circle {
  font-size: 2rem;
  color: #10b981;
  margin-bottom: 0.8rem;
  display: block;
}

.success-message h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.success-message p {
  margin: 0.7rem 0 1.3rem;
  font-size: 1rem;
  line-height: 1.5;
}

.success-message .btn {
  display: block;
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #0a1e77 0%, #764ba2 100%);
  color: #fff;
  transition: opacity 0.25s ease;
}

.btn-primary:hover {
  opacity: 0.9;
  cursor: pointer;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translate(-50%, -40%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}


@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

    
    .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
        .contact-form-container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .form-content,
        .contact-info-sidebar {
            padding: 2rem;
        }
        
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .social-buttons {
            flex-direction: row;
            flex-wrap: wrap;
        }

    }
`;
document.head.appendChild(contactStyles);
