// Admin panel functionality
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    setupEventListeners();
    
    // Auto-refresh data every 30 seconds
    setInterval(loadDashboardData, 30000);
});

function setupEventListeners() {
    // Add keyboard shortcut for refresh (Ctrl+R or Cmd+R)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
            e.preventDefault();
            refreshData();
        }
    });
}

function loadDashboardData() {
    try {
        // Load submissions
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        const analytics = JSON.parse(localStorage.getItem('portfolioAnalytics') || '{}');
        
        // Update stats
        updateStats(submissions, analytics);
        
        // Update submissions table
        updateSubmissionsTable(submissions);
        
        // Update analytics charts
        updateAnalyticsCharts(analytics);
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Error loading data', 'error');
    }
}

function updateStats(submissions, analytics) {
    // Total submissions
    document.getElementById('total-submissions').textContent = submissions.length;
    
    // Total page views
    const totalViews = analytics.pageViews ? 
        Object.values(analytics.pageViews).reduce((sum, views) => sum + views, 0) : 0;
    document.getElementById('total-views').textContent = totalViews;
    
    // Social clicks
    const socialClicks = analytics.socialClicks ? 
        Object.values(analytics.socialClicks).reduce((sum, clicks) => sum + clicks, 0) : 0;
    document.getElementById('social-clicks').textContent = socialClicks;
    
    // Last activity
    const lastActivity = analytics.lastActivity || analytics.lastVisit;
    const lastActivityEl = document.getElementById('last-activity');
    if (lastActivity) {
        const date = new Date(lastActivity);
        lastActivityEl.textContent = formatRelativeTime(date);
    } else {
        lastActivityEl.textContent = 'Never';
    }
}

function updateSubmissionsTable(submissions) {
    const tbody = document.getElementById('submissions-tbody');
    
    if (submissions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">No submissions yet</td></tr>';
        return;
    }
    
    // Sort submissions by date (newest first)
    const sortedSubmissions = submissions.sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
    );
    
    tbody.innerHTML = sortedSubmissions.map(submission => `
        <tr>
            <td>${formatDate(submission.timestamp)}</td>
            <td>${escapeHtml(submission.name)}</td>
            <td>${escapeHtml(submission.email)}</td>
            <td>${escapeHtml(submission.subject)}</td>
            <td>
                <span class="status-badge status-${submission.status}">
                    ${submission.status}
                </span>
            </td>
            <td>
                <button class="btn-small btn-primary" onclick="viewMessage('${submission.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-small btn-secondary" onclick="replyToMessage('${submission.id}')">
                    <i class="fas fa-reply"></i>
                </button>
                <button class="btn-small btn-outline" onclick="deleteSubmission('${submission.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateAnalyticsCharts(analytics) {
    // Update page views chart
    const pageViewsContainer = document.getElementById('page-views-chart');
    if (analytics.pageViews) {
        const pageViewsHtml = Object.entries(analytics.pageViews)
            .map(([page, views]) => `
                <div class="chart-item">
                    <div class="chart-label">${page}</div>
                    <div class="chart-bar">
                        <div class="chart-fill" style="width: ${views * 10}px">${views}</div>
                    </div>
                </div>
            `).join('');
        pageViewsContainer.innerHTML = pageViewsHtml;
    } else {
        pageViewsContainer.innerHTML = '<p class="no-data">No page view data</p>';
    }
    
    // Update social clicks chart
    const socialClicksContainer = document.getElementById('social-clicks-chart');
    if (analytics.socialClicks) {
        const socialClicksHtml = Object.entries(analytics.socialClicks)
            .map(([platform, clicks]) => `
                <div class="chart-item">
                    <div class="chart-label">${platform}</div>
                    <div class="chart-bar">
                        <div class="chart-fill" style="width: ${clicks * 20}px">${clicks}</div>
                    </div>
                </div>
            `).join('');
        socialClicksContainer.innerHTML = socialClicksHtml;
    } else {
        socialClicksContainer.innerHTML = '<p class="no-data">No social click data</p>';
    }
}

function viewMessage(submissionId) {
    try {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        const submission = submissions.find(sub => sub.id === submissionId);
        
        if (!submission) {
            showNotification('Message not found', 'error');
            return;
        }
        
        const messageDetails = document.getElementById('message-details');
        messageDetails.innerHTML = `
            <div class="message-detail">
                <h4>From</h4>
                <p>${escapeHtml(submission.name)} (${escapeHtml(submission.email)})</p>
            </div>
            <div class="message-detail">
                <h4>Subject</h4>
                <p>${escapeHtml(submission.subject)}</p>
            </div>
            <div class="message-detail">
                <h4>Date</h4>
                <p>${formatDate(submission.timestamp)}</p>
            </div>
            <div class="message-detail">
                <h4>Message</h4>
                <p class="message-text">${escapeHtml(submission.message).replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        // Store current message ID for reply function
        window.currentMessageId = submissionId;
        
        // Show modal
        document.getElementById('message-modal').style.display = 'block';
        
        // Mark as read
        markAsRead(submissionId);
        
    } catch (error) {
        console.error('Error viewing message:', error);
        showNotification('Error viewing message', 'error');
    }
}

function markAsRead(submissionId) {
    try {
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        const index = submissions.findIndex(sub => sub.id === submissionId);
        if (index !== -1) {
            submissions[index].status = 'read';
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            loadDashboardData(); // Refresh the table
        }
    } catch (error) {
        console.error('Error marking as read:', error);
    }
}

function replyToMessage(submissionId) {
    try {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        const submission = submissions.find(sub => sub.id === submissionId);
        
        if (!submission) {
            showNotification('Message not found', 'error');
            return;
        }
        
        // Create mailto link
        const subject = `Re: ${submission.subject}`;
        const body = `Hi ${submission.name},\n\nThank you for your message. \n\n---\nOriginal message:\n${submission.message}`;
        
        const mailtoLink = `mailto:${submission.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.open(mailtoLink);
        
        // Mark as replied
        markAsReplied(submissionId);
        
        // Close modal if open
        closeModal();
        
    } catch (error) {
        console.error('Error replying to message:', error);
        showNotification('Error opening email client', 'error');
    }
}

function markAsReplied(submissionId) {
    try {
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        const index = submissions.findIndex(sub => sub.id === submissionId);
        if (index !== -1) {
            submissions[index].status = 'replied';
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            loadDashboardData(); // Refresh the table
        }
    } catch (error) {
        console.error('Error marking as replied:', error);
    }
}

function deleteSubmission(submissionId) {
    if (!confirm('Are you sure you want to delete this submission?')) {
        return;
    }
    
    try {
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions = submissions.filter(sub => sub.id !== submissionId);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        loadDashboardData(); // Refresh the table
        showNotification('Submission deleted', 'success');
        
    } catch (error) {
        console.error('Error deleting submission:', error);
        showNotification('Error deleting submission', 'error');
    }
}

function closeModal() {
    document.getElementById('message-modal').style.display = 'none';
    window.currentMessageId = null;
}

function refreshData() {
    loadDashboardData();
    showNotification('Data refreshed', 'success');
}

function exportData() {
    try {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        const analytics = JSON.parse(localStorage.getItem('portfolioAnalytics') || '{}');
        
        const data = {
            submissions: submissions,
            analytics: analytics,
            exportDate: new Date().toISOString(),
            totalSubmissions: submissions.length,
            summary: {
                totalPageViews: analytics.pageViews ? 
                    Object.values(analytics.pageViews).reduce((sum, views) => sum + views, 0) : 0,
                totalSocialClicks: analytics.socialClicks ? 
                    Object.values(analytics.socialClicks).reduce((sum, clicks) => sum + clicks, 0) : 0,
                lastActivity: analytics.lastActivity || analytics.lastVisit || 'Never'
            }
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        showNotification('Data exported successfully', 'success');
        
    } catch (error) {
        console.error('Error exporting data:', error);
        showNotification('Error exporting data', 'error');
    }
}

function clearData() {
    if (!confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
        return;
    }
    
    try {
        localStorage.removeItem('contactSubmissions');
        localStorage.removeItem('portfolioAnalytics');
        localStorage.removeItem('totalSubmissions');
        
        loadDashboardData();
        showNotification('All data cleared', 'success');
        
    } catch (error) {
        console.error('Error clearing data:', error);
        showNotification('Error clearing data', 'error');
    }
}

// Utility functions
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function formatRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('message-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add admin-specific styles
const adminStyles = document.createElement('style');
adminStyles.textContent = `
    .admin-header {
        padding: 8rem 0 4rem;
        background: var(--surface-color);
        text-align: center;
    }
    
    .admin-dashboard {
        padding: 4rem 0;
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .stat-card {
        background: var(--background-color);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-light);
        display: flex;
        align-items: center;
        gap: 1.5rem;
        transition: all 0.3s ease;
    }
    
    .stat-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
    }
    
    .stat-icon {
        width: 60px;
        height: 60px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
    }
    
    .stat-number {
        font-size: 2rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }
    
    .stat-label {
        color: var(--text-secondary);
        font-size: 0.875rem;
        margin: 0;
    }
    
    .admin-actions {
        display: flex;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    }
    
    .admin-section {
        background: var(--background-color);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-light);
        margin-bottom: 2rem;
    }
    
    .admin-section .section-title {
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
    
    .table-container {
        overflow-x: auto;
    }
    
    .admin-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
    }
    
    .admin-table th,
    .admin-table td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid var(--border-color);
    }
    
    .admin-table th {
        background: var(--surface-color);
        color: var(--text-primary);
        font-weight: 600;
    }
    
    .admin-table td {
        color: var(--text-secondary);
    }
    
    .admin-table tr:hover {
        background: var(--surface-color);
    }
    
    .no-data {
        text-align: center;
        color: var(--text-muted);
        font-style: italic;
        padding: 2rem;
    }
    
    .status-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .status-new {
        background: #fef3c7;
        color: #92400e;
    }
    
    .status-read {
        background: #dbeafe;
        color: #1e40af;
    }
    
    .status-replied {
        background: #d1fae5;
        color: #065f46;
    }
    
    .status-sent {
        background: #d1fae5;
        color: #065f46;
    }
    
    .btn-small {
        padding: 0.5rem;
        font-size: 0.875rem;
        margin-right: 0.5rem;
    }
    
    .analytics-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    
    .analytics-card {
        background: var(--surface-color);
        padding: 1.5rem;
        border-radius: 0.75rem;
    }
    
    .analytics-card h3 {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    
    .chart-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .chart-item {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .chart-label {
        flex: 0 0 100px;
        font-size: 0.875rem;
        color: var(--text-secondary);
    }
    
    .chart-bar {
        flex: 1;
        height: 20px;
        background: var(--border-color);
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }
    
    .chart-fill {
        height: 100%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 0.75rem;
        font-weight: 600;
        min-width: 30px;
    }
    
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    
    .modal-content {
        background: var(--background-color);
        margin: 5% auto;
        padding: 0;
        border-radius: 1rem;
        width: 90%;
        max-width: 600px;
        box-shadow: var(--shadow-heavy);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .modal-header h3 {
        margin: 0;
        color: var(--text-primary);
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-secondary);
    }
    
    .modal-body {
        padding: 1.5rem;
    }
    
    .modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        padding: 1.5rem;
        border-top: 1px solid var(--border-color);
    }
    
    .message-detail {
        margin-bottom: 1.5rem;
    }
    
    .message-detail h4 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .message-detail p {
        color: var(--text-secondary);
        margin: 0;
    }
    
    .message-text {
        background: var(--surface-color);
        padding: 1rem;
        border-radius: 0.5rem;
        white-space: pre-wrap;
        line-height: 1.6;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--background-color);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-heavy);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideInRight 0.3s ease;
    }
    
    .notification-success {
        border-left: 4px solid var(--accent-color);
    }
    
    .notification-error {
        border-left: 4px solid #ef4444;
    }
    
    .notification-info {
        border-left: 4px solid var(--primary-color);
    }
    
    .notification button {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        font-size: 1.25rem;
        padding: 0;
        margin-left: 1rem;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }
        
        .analytics-grid {
            grid-template-columns: 1fr;
        }
        
        .admin-actions {
            flex-direction: column;
        }
        
        .admin-section {
            padding: 1rem;
        }
        
        .admin-table th,
        .admin-table td {
            padding: 0.5rem;
            font-size: 0.875rem;
        }
        
        .modal-content {
            width: 95%;
            margin: 10% auto;
        }
    }
`;
document.head.appendChild(adminStyles);