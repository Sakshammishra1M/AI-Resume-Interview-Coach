# AI Resume Interview Coach

## What It Does

AI Resume Interview Coach helps students and job seekers improve their resumes and prepare for interviews. Users can upload their resume, receive AI-powered feedback, generate interview questions, participate in mock interviews, and receive performance evaluations.

## Why I Built This

As a computer engineering student preparing for internships and placements, I often wondered whether my resume was strong enough and what questions recruiters might ask based on my profile. I wanted a simple tool that could provide instant resume feedback and realistic interview practice. This project is the smallest useful version of that idea.

## Smallest Useful Version (MVP)

* Upload Resume (PDF)
* Extract Resume Text
* AI Resume Analysis
* AI Interview Question Generation
* AI Interview Feedback

## How To Run

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

### Environment Variables

Create `.env` inside backend:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

## Architecture Decisions

### Gemini API Instead of Training a Model

I used Gemini API because it provides strong reasoning capabilities and allowed me to focus on solving the problem rather than training and hosting a custom model.

### React Frontend

React was chosen because it enables reusable components and a responsive user experience.

### Express Backend

Express provides a lightweight and simple API layer for handling resume uploads and AI integration.

### PDF Parsing Before AI Analysis

Resumes are converted into plain text before sending them to Gemini. This improves consistency and reduces unnecessary processing.

## What I Used AI For

AI was used for:

* Resume analysis
* Interview question generation
* Candidate feedback generation
* UI brainstorming

I manually designed the application architecture, API flow, frontend structure, and prompt engineering logic.

## What I Would Change With 4 More Weeks

* Voice-based mock interviews
* ATS benchmarking
* Resume version tracking
* User authentication
* Interview analytics dashboard
* Personalized learning roadmap
* Multi-language support

## Tech Stack

* React
* Node.js
* Express.js
* Gemini API
* MongoDB (Optional)
* Tailwind CSS

## Future Scope

The platform can evolve into a complete AI-powered placement preparation assistant for students and job seekers.
