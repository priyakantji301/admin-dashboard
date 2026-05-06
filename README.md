# 🍋 Admin Dashboard | Personnel Management Portal

A high-performance, responsive administrative interface built with **jQuery** and **AJAX**. This dashboard demonstrates modern frontend practices, including real-time data synchronization, dynamic DOM manipulation, and a unique "Butter Yellow" aesthetic.

## 🚀 Live Demo
[Check out the Live Dashboard](https://priyakantji301.github.io/admin-dashboard-jquery/) 

## ✨ Key Features
*   **Dynamic Data Fetching**: Utilizes AJAX to retrieve live user data from the JSONPlaceholder REST API without page reloads.
*   **Interactive Sidebar**: A custom single-page application (SPA) logic that switches between Users, Logs, and System Metrics.
*   **Quick View Modal**: Uses event delegation to pull specific metadata into an overlay for a focused user experience.
*   **Real-Time Search**: Highly optimized jQuery filtering that hides/shows personnel cards based on keystroke input.
*   **Secure Access Simulation**: Features a "Terminate Access" function that removes records from the DOM and updates global state counters in real-time.
*   **Butter Yellow UI**: A unique, high-contrast theme designed for professional clarity and modern SaaS aesthetics.

## 🛠️ Technical Stack
*   **HTML5**: Semantic structure for accessibility.
*   **CSS3**: Custom Flexbox and CSS Grid layouts with glassmorphism and transition effects.
*   **jQuery (3.7.1)**: Advanced selectors, event handling, and DOM traversal.
*   **AJAX**: Asynchronous GET requests to external API endpoints.

## 📂 Project Structure
```text
├── index.html   # Main dashboard structure & Modal templates
├── style.css    # Butter Yellow theme & Responsive Grid system
└── script.js    # AJAX logic, Tab switching, & State management
