
## Task Management Web Application                      
Date: 06/12/2023

## Introduction
The objective of this project is to create a web application for task management that enables users to organize tasks into different stages, offers drag-and-drop functionality for task movement, and provides visual metrics. This application helps in managing tasks efficiently by offering categorization and status tracking.

## Technologies Used 
-HTML5
-CSS3
-JavaScript (ES6)
-Bootstrap

## Project Structure
The project is structured with the following directories and key files:
-index.html: Entry point for the web application.
-style.css: Contains the CSS & Bootstrap styling for the entire application.
-app.js: Includes JavaScript logic for task management and drag-and-drop functionality.
-Images sourced from MDN Web Docs and icons obtained from Font Awesome and Boxicons

## Implementation Details
# Task Board Layout
-Utilized HTML and CSS to create a four-column layout representing Ready, In Progress, Testing, and Done stages.
-Task cards were created for each stage, showcasing task details.

# Drag-and-Drop Functionality
-Implemented drag-and-drop functionality using JavaScript drag events.
-Updated task positions upon dropping tasks into different columns.

# Task Metrics Visualization
-Displayed metrics for each stage based on task count and displayed a breakdown of tasks based on their priority levels (Urgent, High, Medium, Low) using the same visual representation.
-Bootstrap for Styling:
Employed Bootstrap to ensure consistent and responsive styling across the task metrics visualization. This choice enhances readability and user interaction with the presented data.
-Font Awesome Icons and Boxicons :
Integrated Font Awesome icons to complement the visual elements, providing intuitive and recognizable symbols for an improved user experience while navigating through task metrics.

# Use Cases Implementation
-Basic: Implemented Task Board layout, Drag-and-Drop, Task Cards, and basic Task metrics.
-Medium: Incorporated search functionality and added filters for dates and task severity.
-Advanced: Assigned unique colors/badges based on task severity and implemented light and dark mode.

## Challenges Faced
-Ensuring smooth drag-and-drop functionality across different browsers.
-Implementing responsive design for various screen sizes and devices.

## Design Decisions
-Utilized JavaScript for drag-and-drop to avoid external library dependencies.
-Leveraged Bootstrap for consistent and responsive styling throughout the application, ensuring a user-friendly interface. Additionally, utilized Font Awesome and Boxicons for a wide range of icons, enhancing visual elements and user interaction within the application.

## Improvements and Future Enhancements
-Implement user authentication and task ownership.
-Provide users with the ability to add new tasks directly from the application. 
-Add notifications for task updates and mentions.
-Include user settings for customizing task board appearance.
-Implement task reminders or deadlines to help users stay on track with task completion.

## Conclusion
The project successfully integrates essential functionalities like drag-and-drop, task cards, and visual metrics, providing a foundation for further development and optimization to meet evolving user needs and industry standards.
