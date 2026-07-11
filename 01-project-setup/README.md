# PROJECT SETUP

## Objective -
Set up a basic Express.js application from scratch and understand the essential project structure

---

## Topics Covered

### Project Initialization

- Initialize a Node.js project
- Understanding `package.json`
- NPM Scripts
- Installing dependencies

### Express Basics

- Creating an Express server
- Creating GET routes
- Sending responses
- Listening on a port

### Environment Configuration

- `.env`
- `.gitignore`

### Frontend ↔ Backend Communication

- Creating separate frontend and backend applications
- Sending JSON responses
- Displaying API data in React
- Using Axios
- Using `useEffect()` for API calls
- Rendering lists using `map()`

### CORS (Theory)

- Why CORS exists
- Using the `cors` package
- Whitelisting origins
- Allowing all origins

### Proxy

- Configuring Vite Proxy
- Avoiding CORS during development

---

## Commands Used -

### Initialize project

```bash
npm init
```

Creates a `package.json` file.

### Install Express, dotnenv, Axios, CORS

```bash
npm install express
npm i dotenv
npm install axios
npm install cors
```

### Run application

```bash
npm run start
```

---

## Folder Structure

```
project/
│
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── index.js
```

---

## Learning Outcome

After completing this topic I can:

- Create a backend using Express
- Return JSON responses
- Connect a React frontend with an Express backend
- Fetch API data using Axios
- Render API responses dynamically
- Understand why CORS occurs
- Use Vite Proxy during development


