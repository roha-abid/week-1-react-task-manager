# AUREX Internship — Month 2, Week 1

**Name:** Roha Abid
**Domain:** Full-Stack Engineering — React.js Fundamentals
**Week:** Month 2, Week 1 — React Task Manager (Part 1)

**Live Deployment Link:** https://week-1-react-task-manager-sigma.vercel.app/

## Project Description

This project is a React-based version of the Month 1 vanilla JavaScript Task Manager. It was developed using Vite and focuses on building a component-based user interface, passing data through props, managing application state with `useState`, and handling controlled form inputs.

## Running the Project Locally

To run the project on a local machine, follow these steps.

### Prerequisites

Make sure **Node.js** and **npm** are installed. You can check the npm installation by running:

```bash
npm -v
```

### Installation and Setup

**1. Create the React project using Vite**

```bash
npm create vite@latest week-1-react-task-manager -- --template react
```

**2. Navigate to the project folder**

```bash
cd week-1-react-task-manager
```

**3. Install the required dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

After the server starts, open the local URL provided by Vite, usually:

```text
http://localhost:5173
```

### Production Build

To create and preview a production build, run:

```bash
npm run build
npm run preview
```

## Component Hierarchy

```text
App (holds task state)
├── Header (displays title + task count)
├── TaskForm (controlled input, validation, calls onAddTask)
└── TaskList (maps tasks array with key props)
    └── TaskItem (individual task: complete toggle + delete)
```

The main task state is maintained inside `App` and passed to the child components through props. Components such as `TaskForm`, `TaskList`, and `TaskItem` receive callback functions to send changes back to `App`. This approach demonstrates the concept of **lifting state up** in React.

## Features Implemented

* Add new tasks through a controlled form
* Display tasks dynamically using `.map()`
* Use proper `key` props for rendered task items
* Mark tasks as completed or incomplete
* Remove tasks from the application state
* Validate user input
* Display an error message when an empty or overly long task is submitted

## Technologies Used

* React 18
* Vite
* JavaScript (JSX)
* Plain CSS

## Learning Outcomes

* Understanding how to divide a React interface into reusable components
* Learning how to pass data from parent components to child components using props
* Understanding child-to-parent communication through callback functions
* Using `useState` to manage and update application data
* Understanding why React state should not be modified directly
* Using functional state updates such as `setTasks(prev => ...)`
* Understanding the difference between controlled React inputs and traditional DOM-based inputs

## Project Structure

```text
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
