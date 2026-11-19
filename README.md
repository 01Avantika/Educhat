# 🎓 EduChat – AI College Chatbot

**An AI-powered college chatbot designed to simplify student services by providing quick, personalized, and real-time access to academic and administrative information.**

🌐 **Live Demo:** https://eeduchat.vercel.app/

---

## 📌 About the Project

EduChat is an AI-powered college chatbot developed to make communication between students and college administration easier and more efficient.

The chatbot integrates with ERP backend APIs to provide students with instant access to important academic and administrative information, reducing the need for manual inquiries and repetitive administrative tasks.

Using Natural Language Processing (NLP) and Machine Learning, EduChat enables students to interact with the system conversationally and retrieve relevant information whenever needed.

## ✨ Key Features

- **AI-Powered Chatbot:** Understands student queries using NLP and Machine Learning.
- **Timetable Lookup:** Provides students with easy access to their class schedules.
- **Fee Status:** Helps students check their fee-related information.
- **Exam Updates:** Provides information about upcoming examination dates.
- **Assignment Reminders:** Helps students stay informed about assignments and deadlines.
- **ERP Integration:** Connects with backend ERP APIs to retrieve real-time student information.
- **JWT Authentication:** Implements secure authentication for users.
- **Role-Based Access Control:** Restricts access to information and functionalities based on user roles.
- **Responsive Interface:** Provides an accessible chatbot experience through a React-based frontend.
- **Cloud Deployment:** Deployed using Vercel.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development and user interface |
| Python / Machine Learning | AI and chatbot intelligence |
| Natural Language Processing (NLP) | Understanding and processing user queries |
| REST APIs | Communication with backend and ERP services |
| JWT | Secure user authentication |
| Vercel | Cloud deployment |

## ⚙️ How It Works

1. **User Authentication:** Students authenticate themselves to access the chatbot.
2. **Query Input:** Students enter their questions in natural language.
3. **Query Processing:** NLP and Machine Learning techniques help process and understand the query.
4. **API Integration:** The system communicates with ERP-integrated backend APIs to retrieve relevant information.
5. **Response Generation:** The chatbot returns the requested information to the student.
6. **Secure Access:** JWT authentication and role-based access control help protect student information.

## 🏗️ System Architecture

```text
          Student
             |
             v
       React Frontend
             |
             v
       User Authentication
           (JWT)
             |
             v
       Chatbot Interface
             |
             v
       NLP / ML Processing
             |
             v
       Backend REST APIs
             |
             v
       College ERP System
             |
             v
       Student Information
       /       |       \
   Timetable  Fees    Exams
             |
             v
      Chatbot Response
             |
             v
           Student
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm
- Git
- Access to the backend API services (if required)

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the Project Directory

```bash
cd EduChat
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and configure the required environment variables.

```env
REACT_APP_API_URL=your_backend_api_url
```

Use the actual environment variable names required by your project. Never commit API keys, JWT secrets, or other sensitive credentials.

### 5. Start the Application

Run the appropriate development command defined in your `package.json`:

```bash
npm start
```

For Vite-based projects, use:

```bash
npm run dev
```

## 🔐 Security

EduChat incorporates security measures to protect student information and control access to the system:

- JWT-based authentication.
- Role-based authorization.
- Secure communication through REST APIs.
- Controlled access to student-specific information.
- Environment variables for sensitive configuration.

## 🎯 Project Objectives

- Simplify access to college-related information.
- Reduce repetitive queries handled by college administration.
- Provide students with faster access to academic updates.
- Improve the student experience through conversational AI.
- Integrate existing ERP services into a unified chatbot interface.

## 🔮 Future Enhancements

- Voice-based interaction with the chatbot.
- Multilingual query support.
- Integration with additional college ERP modules.
- Personalized notifications for students.
- Improved NLP models for better query understanding.
- Analytics dashboard for monitoring chatbot usage.

## 🌐 Live Application

Try EduChat here:

**https://eeduchat.vercel.app/**

---

Developed as an AI-based educational technology project.
