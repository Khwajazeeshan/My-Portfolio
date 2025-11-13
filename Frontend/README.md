```markdown
# 💼 Personal Portfolio with AI Assistant (MERN Stack)

A full-featured personal portfolio built using **MERN Stack** integrated with an **AI Assistant Chatbot** that interacts intelligently with visitors and answers questions about Zeeshan’s skills, experience, and projects.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React.js (Vite)
- CSS3
- React Icons
- Axios

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

---

## 🤖 Features

- 🧠 **AI Chatbot Assistant** – Answers queries about Zeeshan automatically 24/7.  
- 💻 **Responsive Design** – Optimized for all screen sizes.  
- ⚡ **Fast Performance** – Built with Vite and optimized React components.  
- 🔐 **Secure Backend** – Uses `.env` for sensitive configs.  
- 🗂️ **Modular Codebase** – Separate frontend and backend structure.

---

## 📁 Folder Structure

```

Portfolio/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── Navbar/
│   │   │   ├── Project/
│   │   │   └── Resume/
│   │   ├── Pages/
│   │   │   ├── chatbot/
│   │   │   └── Home/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Khwajazeeshan/Portfolio.git
cd Portfolio
````

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
npm start
```

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API=your_GROQ_API__string
```

---

## 🧩 API Endpoint Example

```bash
POST /api/chatbot/message
```

**Description:** Handles chatbot messages and responds using stored portfolio data.

---

## 📸 Preview

🚀 **Coming Soon – Live Demo Link**

---

## 👨‍💻 Author

### **Khawaja Zeeshan**
🎓 University Student | 💻 Web Developer 
---

## 📝 License

This project is **open-source** and available under the **MIT License**.

