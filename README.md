# AI Resume Matcher

## Overview

AI Resume Matcher is a full-stack web application that helps job seekers evaluate how well their resume matches a specific job description. The application uses Google's Gemini AI to analyze the uploaded resume and compare it against the provided job description. It generates a match score, identifies overlapping and missing skills, highlights strengths and weaknesses, and provides personalized recommendations to improve the resume.

---

## Features

* Upload resume in PDF format
* Paste any job description
* AI-powered resume analysis using Google Gemini
* Resume match score
* Skill overlap detection
* Missing skills identification
* Strengths and weaknesses analysis
* Personalized recommendations
* Clean and responsive user interface

---

## Tech Stack

### Frontend

* React.js
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* Multer
* pdf-parse
* CORS

### AI

* Google Gemini API

---

## System Architecture

```
                 User
                   │
                   ▼
          React Frontend
                   │
          HTTP REST Request
                   │
                   ▼
          Express Backend
                   │
      Extract Resume Text (pdf-parse)
                   │
                   ▼
         Google Gemini AI API
                   │
         AI Resume Analysis
                   │
                   ▼
     JSON Response (Match Score,
 Skills, Recommendations, Strengths)
                   │
                   ▼
          React Dashboard
```

---

## Technical Decisions

* React was chosen to build a responsive and component-based frontend.
* Express.js was used to create lightweight REST APIs for handling resume uploads and AI requests.
* Multer manages PDF file uploads securely.
* pdf-parse extracts text from uploaded PDF resumes before sending it for AI analysis.
* The application follows a client-server architecture, keeping frontend and backend responsibilities separate.
* REST APIs are used for communication between the frontend and backend.

---

## AI Tool Selection

### Selected AI Tool

Google Gemini API

### Why Gemini?

Google Gemini was selected because it offers:

* Excellent natural language understanding
* Accurate comparison between resumes and job descriptions
* Structured JSON responses
* Easy integration with Node.js
* Fast response time
* High-quality recommendations for improving resumes

---

## Installation

### Clone the repository

```bash
git clone https://github.com/akanksha675/AI-Resume-Matcher.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## Project Structure

```
AI-Resume-Matcher/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── screenshots/
├── README.md
└── .gitignore
```
## Future Improvements

* ATS compatibility score
* Resume keyword optimization
* Authentication and user accounts
* Resume history
* Support for DOCX files
* Downloadable analysis reports

---

## Author

**Akanksha Sunil Choudhari**

Computer Science Engineering Student | Java Full Stack Developer | Web Developer
