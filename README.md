# AUREX Internship — Month 2, Week 1

**Name:** Roha Abid
**Domain:** Full-Stack Engineering — React.js Fundamentals
**Week:** Month 2, Week 1 — React Task Manager (Part 1)

**Live Deployment Link:** [https://week-1-react-task-manager-sigma.vercel.app/]

## Project Description

This project reconstructs the Month 1 vanilla JavaScript Task Manager as a component-driven React application built with Vite. It focuses on functional components, props-based data flow, `useState` for reactive UI updates, and controlled form inputs.

## Setup Instructions

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Component Hierarchy

```
App (holds task state)
├── Header (displays title + task count)
├── TaskForm (controlled input, validation, calls onAddTask)
└── TaskList (maps tasks array with key props)
    └── TaskItem (individual task: complete toggle + delete)
```

State lives in `App` and flows down to children via props. `TaskForm`, `TaskList`, and `TaskItem` all receive functions as props (`onAddTask`, `onToggleComplete`, `onDeleteTask`) so they can notify `App` of changes — this is "lifting state up."

## Features Implemented

- Add new tasks using a controlled form input
- Display task items dynamically via `.map()` with proper `key` props
- Toggle task completion status
- Delete tasks from state
- Input validation (blocks empty or over-length submissions with an inline error message)

## Technologies Used

- React 18
- Vite
- Plain CSS (no UI framework)

## Learning Outcomes

- How to break a UI into a parent-driven component hierarchy and pass data down via props
- How to pass callback functions as props so child components can communicate changes back up to a parent (child-to-parent communication)
- How `useState` triggers re-renders, and why state should never be mutated directly (using functional updates like `setTasks(prev => ...)` instead)
- The difference between a controlled input (React owns the value) and the plain DOM-based inputs used in the Month 1 vanilla JS version

## Project Structure

```
week-1-react-task-manager/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Header.jsx
│       ├── TaskForm.jsx
│       ├── TaskList.jsx
│       └── TaskItem.jsx
└── README.md
```
