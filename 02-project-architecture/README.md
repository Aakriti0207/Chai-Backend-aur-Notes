# 02 - Project Architecture

## Objective

Learn how to organize a scalable Express backend and establish a connection with MongoDB.

---

## Topics Covered

### Backend Folder Structure

- `src/`
- `app.js`
- `index.js`
- `constants.js`
- `db/`

### Environment Variables

- `.env`
- `dotenv`

### Database

- MongoDB
- Mongoose
- Async database connection

### Best Practices

- Keeping configuration separate
- Separating application logic from server startup
- Organizing project files

---

## Folder Structure

```text
src/
├── app.js
├── constants.js
├── db/
│   └── index.js
└── index.js
```

---

## Learning Outcome

- Organize a backend project
- Connect MongoDB using Mongoose
- Use environment variables securely
- Understand why `app.js` and `index.js` are separated
