# 🗓️ Meeting Scheduler API (Backend)

A secure backend API built using **Node.js**, **Express**, and **MongoDB** that allows users to register, login, and schedule meetings with automatic participant management. JWT authentication and email-ready architecture included.

---

## 🚀 Features

- ✅ User Signup & Login with hashed passwords
- ✅ JWT-based authentication & protected routes
- ✅ Create, Edit, Delete Meetings
- ✅ Invite multiple participants
- ✅ MongoDB Aggregation for user-wise meeting stats
- ✅ RESTful API structure & MVC pattern

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT (access tokens)  
- **Password Security**: bcrypt  
- **Email-ready**: (can integrate nodemailer)  
- **Validation**: Express Validator (optional)

---

## 📁 Folder Structure

├── controllers/
│ └── meeting.controller.js
│ └── user.controller.js
├── models/
│ └── User.model.js
│ └── Meeting.model.js
├── routes/
│ └── user.routes.js
│ └── meeting.routes.js
├── utils/
│ └── ApiError.js
│ └── ApiResponse.js
│ └── asyncHandler.js
├── middlewares/
│ └── auth.middleware.js
├── app.js
└── index.js
└── constant.js


 Author
Shaikh Arbaj Rafik

Backend Developer | MERN Stack
