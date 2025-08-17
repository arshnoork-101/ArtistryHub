# 🎨 ArtistryHub

A modern, responsive web application for **searching and viewing artworks** from the **Metropolitan Museum of Art Collection API**. Built with **Next.js**, **React**, and **React Bootstrap**, featuring advanced search, artwork detail views, and a polished user interface.

---

## 🏠 Home Page
![Home Page](./images/HomePage.png)

You can see the **live working application** here: [ArtistryHub Live Demo](https://drive.google.com/file/d/1D7qU6fzz9Zht3Jp3w0k9UyM2CRPA9iOB/view?usp=sharing)

---


## 🏆 Features

- **🔍 Smart Search & Advanced Filters** – Search by title, medium, location, highlights, and more.  
- **🖼 Artwork Cards** – Browse artworks in a responsive card layout with image, title, date, classification, and medium.  
- **📄 Artwork Details** – Detailed view with artist info, dimensions, credit line, and links to Wikidata.  
- **🧭 Pagination** – Navigate through artwork results 12 per page.  
- **📋 Form Validation** – React Hook Form validation for required search fields.  
- **📱 Responsive Design** – Optimized for all devices with Bootstrap.  
- **❤️ Favourites** – Add artwork to your favourites and easily view them.  
- **🕒 Search History** – Keep track of your previous searches and re-run them easily.  

---

## 🛠 Tech Stack  

- **Frontend**: Next.js, React, Bootstrap  
- **State Management**: Jotai  
- **Data Fetching**: SWR (caching & revalidation)  
- **Authentication**: JWT  
- **Database**: MongoDB Atlas  
- **Deployment**: Vercel  
- **External API**: [Metropolitan Museum of Art Collection API](https://collectionapi.metmuseum.org/public/collection/v1/)  

---

## ⚡ Setup & Installation

### Prerequisites
- Node.js   
- MongoDB database (or MongoDB Atlas)
- Visual Studio Code

### Installation Steps

1. **Create Next.js App**
```bash
npx create-next-app@latest artistryhub
cd artistryhub
```

2. **Install dependencies**
```bash
npm install swr bootstrap react-bootstrap react-hook-form jotai
```

3. **Environment setup**
```bash
cp .env.example .env.local
```

4. **Configure environment variables**
```env
NEXT_PUBLIC_API_URL=your-user-api-url
```

5. **Start development server**
```bash
npm run dev
```

6. **Open your browser**
```
http://localhost:3000
```

## 🔧 Architecture

This project follows a **modular architecture** to ensure scalability and maintainability:

- **Frontend**: Built with **Next.js**, the application consumes the [Metropolitan Museum of Art Collection API](https://www.metmuseum.org/art/collection) to display and search artworks seamlessly.

- **Backend APIs**: (Optional) The backend can handle user authentication, favorites, and search history management. It provides APIs to persist user-specific data.

- **Components**: The app is designed using **modular React components** for reusable and maintainable code. These include:
  - **Layout**: Core structure and styling for all pages.
  - **Navbar**: Responsive navigation menu.
  - **Artwork Cards**: Displays artwork in a clean and responsive card format.
  - **Artwork Detail Views**: Provides detailed artwork information, including artist data and links to Wikidata.

- **Data Fetching**: Utilizes **SWR** for efficient data fetching with automatic caching and error handling to improve performance and user experience.

---

## 🤝 Contributing

Contributions are always welcome! 

If you are interested in contributing to ArtistrHub, start by forking the repository to your own GitHub account and then create a new branch where you can work on your changes. Once you have implemented your improvements—whether they are bug fixes, feature enhancements, or documentation updates—make sure your code is clean, well-documented, and consistent with the existing structure. After testing your changes locally, push your branch to your forked repository and open a **pull request** describing the modifications you made. The changes will get reviewed, and once approved, your contribution will be merged into the main project.  

---

## 📧 Contact Me

- **Arshnoor Kaur**
  - GitHub: [@arshnoork-101](https://github.com/arshnoork-101/)
  - LinkedIn: [Arshnoor Kaur](https://www.linkedin.com/in/arshnoorkaurjuj/)

---

⭐ **Star this repo if you found it helpful!**



