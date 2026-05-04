# 📚 Book Borrowing System

A modern full-stack book borrowing web application built with **Next.js, TailwindCSS, and HeroUI**.
Users can browse books, filter by category, search books, and manage authentication (Sign Up / Sign In).

---

## 🚀 Live Demo

👉 [https://book-borrowing.com](https://book-borrowing.vercel.app/)

---

## ✨ Features
<img width="1566" height="899" alt="image" src="https://github.com/user-attachments/assets/c5660e59-35be-493e-9a60-c68018a7ce9e" />
<img width="1420" height="910" alt="image" src="https://github.com/user-attachments/assets/88db8bc7-7553-4dc2-9b6f-cb717f10f2a2" />
<img width="1438" height="894" alt="image" src="https://github.com/user-attachments/assets/c8993b60-a6ad-4ced-954d-a9109d7d09c9" />


### 🔐 Authentication

* Email & Password Sign Up / Sign In
* Google Authentication
* Session-based login system
* Dynamic Navbar (Login → Avatar + Logout)

### 📚 Book System

* Browse all books
* Category-based filtering
* Real-time search functionality
* Book details page
* Availability status (In Stock / Out of Stock)

### 🎯 UI/UX

* Fully responsive design (Mobile + Desktop)
* Modern UI with HeroUI + TailwindCSS
* Toast notifications (React Toastify)
* Interactive components (hover, transitions)

---

## 🧱 Tech Stack

### Frontend

* Next.js (App Router)
* Tailwind CSS
* HeroUI
* React Icons / Lucide Icons

### Authentication

* Custom Auth Client
* Google OAuth

### State & UX

* React Hooks
* React Toastify

---

## 📁 Project Structure

```
/app
  /all-books
  /signin
  /signup
  layout.jsx

/components
  Navbar.jsx
  BookCard.jsx
  BooksClient.jsx
  CategorySidebar.jsx
  SearchBar.jsx
  BookGrid.jsx

/public
  data.json
  category.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/book-borrowing.git
cd book-borrowing
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

👉 App will run on:
http://localhost:3000

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```
NEXT_PUBLIC_AUTH_URL=your_auth_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

---

## 📦 API / Data Source

* Books: `/public/data.json`
* Categories: `/public/category.json`

---

## 🧠 Key Learnings

* Server vs Client Components (Next.js)
* Authentication flow handling
* State management with filtering & search
* Responsive UI design
* Clean component architecture

---

## 🚀 Future Improvements

* 📦 Backend integration (database)
* 📄 Pagination / Infinite Scroll
* ❤️ Wishlist system
* 📊 Admin dashboard
* 🔒 Protected routes (middleware)

---

## 👨‍💻 Author

**Turjo Bari**
Frontend Developer (Next.js)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
