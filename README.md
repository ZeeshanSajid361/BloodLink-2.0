# BloodLink 2.0

A full-stack MERN platform connecting blood donors, seekers, hospitals, and administrators — built with document-based request verification and real-time notifications.

## Stack

| Layer    | Technology                                      |
|----------|-------------------------------------------------|
| Frontend | React 18 · Vite · React Router v6              |
| Backend  | Node.js · Express.js · Mongoose                |
| Database | MongoDB Atlas                                   |
| Auth     | JWT (access + refresh tokens) · bcryptjs        |
| Email    | Nodemailer (Gmail SMTP)                         |
| Storage  | Cloudinary (document uploads)                   |
| Deploy   | Frontend → Vercel · Backend → Render            |

## Project Structure

```
Bloodlink/
├── client/          # React + Vite frontend
└── server/          # Express.js REST API
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- A MongoDB Atlas cluster (free tier works)
- A Gmail account with an App Password enabled

### Server Setup

```bash
cd server
npm install
cp .env.example .env
# Fill in your values in .env
npm run dev
```

### Client Setup

```bash
cd client
npm install
cp .env.example .env
# Set VITE_API_URL to your server URL
npm run dev
```

## Phases

| Phase | Status | Description                                  |
|-------|--------|----------------------------------------------|
| 1     | ✅      | Foundation · Auth · Design system             |
| 2     | ⏳      | Donor module                                 |
| 3     | ⏳      | Seeker module · Document verification        |
| 4     | ⏳      | Hospital & Partner network                   |
| 5     | ⏳      | Admin & Verification module                  |
| 6     | ⏳      | Real-time notifications & analytics          |
| 7     | ⏳      | QR donation check-in (stretch)               |
| 8     | ⏳      | Integration · Testing · Deployment           |

## Team

Zeeshan Sajid & Irtaza
