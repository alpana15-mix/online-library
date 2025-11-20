# Online Library (React + Vite Project)

This project is an **Online Library System** built using **React + Vite**.  
It includes browsing books, filtering by category, searching, viewing book details,  
and adding new books using **Redux Toolkit**.

---

## 🚀 How to Run the Project

Follow these steps to run the project on your computer:

### 1. Clone or download the project

If using Git:
git clone cd online-library

If downloaded as ZIP:  
→ Extract the folder  
→ Open terminal inside the project folder

---

### 2. Install dependencies

npm install

---

### 3. Start the development server

npm run dev

---

### 4. Open the project in browser  
Vite will show a URL in terminal, usually:

http://localhost:5173

Open this link in your browser.

---
---

## 📌 Project Features

### 🔹 Home Page
- Welcome message  
- Book categories  
- Popular books list  

### 🔹 Browse Books Page
- Browse all books  
- Filter by category  
- Search by book title or author  
- Book cards with details link  

### 🔹 Book Details Page
- Shows complete book details  
- Title, author, category, description, rating  
- Back to browse button  
- Dynamic route `/book/:id`  

### 🔹 Add Book Page
- Form to add a new book  
- Form validation  
- Uses Redux for state management  
- After submitting, user is redirected to Browse page  
- New book appears at the top of list  

### 🔹 404 Page
- Shows invalid route  
- Navbar hidden as per assignment instruction  
- Link back to Home page  

### 🔹 Redux Toolkit
- Central book list state  
- `addBook` reducer  
- Newly added books stored globally  

---

## 📁 Folder Structure

src/ ├── components/ │    └── Navbar.jsx ├── data/ │    └── books.js ├── pages/ │    ├── Home.jsx │    ├── BrowseBooks.jsx │    ├── BookDetails.jsx │    ├── AddBook.jsx │    └── NotFound.jsx ├── store/ │    ├── booksSlice.js │    └── index.js ├── App.jsx ├── main.jsx └── index.css

---

## 📝 Important (Submission Requirements)

Before submitting the project ZIP or the GitHub repo:

### ✔ Delete `node_modules` folder  
To reduce project size.

### ✔ Add at least **10 meaningful commits**  
Examples of commit messages:
- `added home page layout`
- `implemented browse page search filter`
- `added redux store setup`
- `created add book form`
- `updated readme`

### ✔ Keep README updated and simple  
This helps instructors understand the project easily.

---

## 🛠️ Technologies Used

- React  
- Vite  
- Redux Toolkit  
- React Router DOM  
- JavaScript (ES6)  
- CSS  

---

## 🔗 GitHub Repository Link

You can access the full project source code here:

👉 **GitHub Repo:**  https://github.com/alpana15-mix/online-library.git
