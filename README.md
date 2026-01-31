
# Book Store – Fullstack Web Application

## Description
This is a **Fullstack Web Application** for a Book Store, including both **Frontend** and **Backend**.  
It provides essential functionalities: user registration, login, displaying products, managing user profiles, and creating/updating/deleting books.

## Features

### Frontend
- **Signup & Login**: Pages for user registration and login with data validation.  
- **Home Page**: Dynamic display of books.  
- **Profile Page**: View and update user information.  
- **Products Page**: Add, edit, delete, and view books interactively.  
- **Responsive Design**: Compatible with desktop, tablet, and mobile devices.  

### Backend
- **Node.js + Express**: Build RESTful APIs to handle user and book data.  
- **MySQL + Sequelize**: Relational database to store users, books, and their relationships.  
- **CRUD Operations**: Create, Read, Update, Delete for users and books.  
- **CORS Handling**: Enable secure requests between Frontend and Backend.  
- **Data Validation & Security**: Input validation and error handling.  

## API Endpoints

### Users
| Method | Endpoint             | Description                   |
|--------|--------------------|-------------------------------|
| POST   | /api/users/signup   | Create a new user             |
| POST   | /api/users/login    | User login                    |
| GET    | /api/users/profile  | View user profile             |
| PUT    | /api/users/profile  | Update user profile           |

### Books
| Method | Endpoint                 | Description                       |
|--------|--------------------------|-----------------------------------|
| GET    | /api/products            | Get all books                     |
| POST   | /api/products            | Add a new book                    |
| GET    | /api/products/:id        | Get a specific book details       |
| PUT    | /api/products/:id        | Update a specific book            |
| DELETE | /api/products/:id        | Delete a specific book            |

## Technologies Used
- **Frontend**: React, Tailwind CSS, React Router DOM, Axios  
- **Backend**: Node.js, Express, MySQL, Sequelize, CORS  
- **Version Control**: Git & GitHub  
- **Development Tools**: VS Code, Postman  

## Installation

### Backend
```bash
cd backend
npm install
npm run start-dev
```

### Frontend
cd frontend
npm install
npm run dev

Usage

Register a new account or login.

Browse books on the Home page.

Manage your profile on the Profile page.

Add, edit, or delete books on the Products page.
