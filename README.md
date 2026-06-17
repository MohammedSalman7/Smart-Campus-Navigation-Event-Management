# 🎓 Smart Campus Navigation & Event Management System

A full-stack MERN application that helps students navigate their campus, register for events, track attendance, receive notifications, and manage their profiles. The system also provides an admin panel for managing buildings, events, attendance records, and notifications.

---

## 📌 Project Overview

The Smart Campus Navigation & Event Management System is designed to simplify campus activities by combining:

- 🗺️ Campus Navigation using Google Maps
- 🎉 Event Registration and Management
- 📋 Attendance Tracking
- 🔔 Notifications System
- 👤 Student Profile Management
- 🏢 Building and Department Information
- 🔐 Role-Based Authentication (Student & Admin)

---

# 🚀 Features

## 👨‍🎓 Student Features

### 🔐 Authentication
- Student Registration
- Student Login
- JWT Authentication
- Protected Routes
- Logout Functionality

### 🗺️ Campus Navigation
- View Campus Buildings
- View Building Codes
- View Departments in Buildings
- Google Maps Integration
- Navigate to Building Location

### 🎉 Event Management
- View Events
- Register for Events
- View Registered Events

### 📋 Attendance
- View Attendance Percentage
- View Attendance Records

### 🔔 Notifications
- Receive Admin Notifications

### 👤 Profile
- View Profile Information
- View Name, Email, and Role

---

## 👨‍💼 Admin Features

### 🔐 Authentication
- Admin Login
- Role-Based Authorization
- Protected Admin Routes

### 🏢 Building Management
- Add Buildings
- Update Buildings
- Delete Buildings
- View Buildings

### 🎉 Event Management
- Create Events
- Update Events
- Delete Events
- View Events

### 📋 Attendance Management
- View Attendance Records
- Manage Student Attendance

### 🔔 Notification Management
- Send Notifications to Students

### 📊 Dashboard
- Total Buildings
- Total Students
- Total Events
- Attendance Records

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Context API
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- JWT Authentication
- REST API

## Database
- MongoDB
- Mongoose

## Third-Party Services
- Google Maps

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```bash
Smart-Campus-Navigation-Event-Management
│
├── client
│   ├── public
│   └── src
│       ├── components
│       ├── context
│       ├── hooks
│       ├── pages
│       │   ├── admin
│       │   ├── auth
│       │   └── student
│       ├── routes
│       ├── services
│       └── utils
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   └── package.json
│
├── docs
├── .gitignore
└── README.md
```

---

# 🗄️ Database Models

## User
- Name
- Email
- Password
- Role

## Building
- Name
- Code
- Description
- Latitude
- Longitude
- Departments

## Event
- Title
- Description
- Venue
- Date
- Category

## Attendance
- Student
- Event
- Status

## Notification
- Title
- Message
- CreatedAt

---

# 🔐 Authentication Flow

```text
Register
     ↓
Login
     ↓
JWT Token Generated
     ↓
Token Stored in Local Storage
     ↓
Protected Routes
     ↓
Role-Based Access
```

---

# 🌐 API Modules

## Authentication APIs
- Register User
- Login User

## Building APIs
- Get Buildings
- Create Building
- Update Building
- Delete Building

## Event APIs
- Get Events
- Create Event
- Update Event
- Delete Event

## Attendance APIs
- Get Attendance
- Create Attendance

## Notification APIs
- Get Notifications
- Create Notifications

---

# 🖼️ Screenshots

# 🖼️ Screenshots

## Home Page
![Home](docs/screenshots/home.png)

## Student Dashboard
![Student Dashboard](docs/screenshots/student-dashboard.png)

## Campus Navigation
![Navigation](docs/screenshots/navigation.png)

## Google Maps Integration
![Google Maps](docs/screenshots/google-maps.png)

## Student Profile
![Profile](docs/screenshots/profile.png)

## Events
![Events](docs/screenshots/events.png)

## Attendance
![Attendance](docs/screenshots/attendance.png)

## Admin Dashboard
![Admin Dashboard](docs/screenshots/admin-dashboard.png)

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/MohammedSalman7/Smart-Campus-Navigation-Event-Management.git
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 Environment Variables

Create:

```bash
server/.env
```

Add:

```env
PORT=5000
MONGO_URI=YourMongoDBConnectionString
JWT_SECRET=YourSecretKey
```

---

# 🚀 Future Enhancements

- QR-Based Attendance System
- Event Recommendation System
- AI Chatbot for Campus Assistance
- Real-Time Notifications
- Email Notifications
- Campus Analytics Dashboard
- Dark Mode
- Mobile Application

---

# 📚 Learning Outcomes

Through this project, I gained hands-on experience in:

- Full Stack MERN Development
- REST API Development
- JWT Authentication
- Role-Based Authorization
- React Context API
- MongoDB Schema Design
- Google Maps Integration
- Git & GitHub
- Project Deployment
- Building Scalable Applications

---

# 👨‍💻 Author

**Mohammed Salman**

GitHub:
https://github.com/MohammedSalman7

---

# ⭐ If you like this project, please give it a star on GitHub!