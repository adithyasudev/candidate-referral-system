# candidate-referral-system
a MERN application 
# 📄 Candidate Referral Management System

A full-stack web application that simulates part of Worko's functionality by allowing users to refer candidates, update their statuses, and track referrals.

---

## 🚀 Live Demo



## 📦 Tech Stack

| Frontend | Backend          | Database      |
|----------|------------------|---------------|
| React    | Node.js + Express | MongoDB Atlas |

---

## ✨ Features Implemented

### 🖥️ Frontend (React)
- Dashboard to display all referred candidates
- Candidate card showing name, job title, and status
- Search bar to filter candidates
- Referral form (name, email, phone, job title, resume)
- Resume upload (.pdf only)
- Status update dropdown: Pending → Reviewed → Hired
- Axios for API requests
- React Hooks for state management

### 🔗 Backend (Node.js + Express)
- `POST /api/candidates` – Save a new candidate
- `GET /api/candidates` – Fetch all referred candidates
- `PUT /api/candidates/:id/status` – Update candidate status
- (Optional) `DELETE /api/candidates/:id` – Delete a candidate
- Mongoose schema for candidate model
- `.pdf` upload validation and handling
- Input validation (email, phone)
- Environment variable support using `.env`

---

## 📂 Project Structure
candidate-referral-system/
├── frontend/ # React App
│ └── src/
│ └── components/
│ └── App.js
├── backend/ # Node.js + Express
│ └── routes/
│ └── controllers/
│ └── models/
│ └── uploads/
│ └── server.js
├── .env # Contains PORT and MONGO_URI (not pushed)
├── .gitignore
├── README.md


---

## ⚙️ Running Locally

### 1. Clone the Repo
git clone https://github.com/adithyasudev/candidate-referral-system.git
cd candidate-referral-system

