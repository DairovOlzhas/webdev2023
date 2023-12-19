# Project Documentation

## Table of Contents
- [Project Documentation](#project-documentation)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction ](#1-introduction-)
  - [2. Project Structure ](#2-project-structure-)
  - [3. Dependencies ](#3-dependencies-)
  - [4. Installation ](#4-installation-)
  - [5. Usage ](#5-usage-)
  - [6. Components ](#6-components-)
    - [App ](#app-)
    - [Navbar ](#navbar-)
    - [Feed ](#feed-)
    - [PostCreation ](#postcreation-)
    - [LoginPage ](#loginpage-)
    - [Post ](#post-)
    - [Profile ](#profile-)
    - [EditPost ](#editpost-)
    - [PrivateRoute ](#privateroute-)
    - [NotFound ](#notfound-)
  - [7. Styles ](#7-styles-)
  - [8. API Endpoints ](#8-api-endpoints-)
    - [Posts API](#posts-api)
    - [Authentication API](#authentication-api)
  - [9. Authentication ](#9-authentication-)
  - [10. Troubleshooting ](#10-troubleshooting-)

## 1. Introduction <a name="introduction"></a>
This project is a React-based application resembling a simplified social media platform with features such as posting, editing, and user authentication.

## 2. Project Structure <a name="project-structure"></a>
The project follows a standard React project structure with components, styles, and assets organized in respective directories.

## 3. Dependencies <a name="dependencies"></a>
- React
- react-router-dom

## 4. Installation <a name="installation"></a>
1. Navigate to the project directory: `cd frontend`
2. Install dependencies: `npm install`

## 5. Usage <a name="usage"></a>
Run the project locally:
```
npm start
```

## 6. Components <a name="components"></a>

### App <a name="app"></a>
- **Description:** Main component managing the overall structure of the application.
- **Key Functions:**
  - Fetches posts from the backend.
  - Manages user authentication.

### Navbar <a name="navbar"></a>
- **Description:** Component for displaying the navigation bar.
- **Key Functions:**
  - Navigates between different pages.

### Feed <a name="feed"></a>
- **Description:** Component responsible for displaying and managing the feed of posts.
- **Key Functions:**
  - Displays posts.
  - Handles post creation and editing.

### PostCreation <a name="postcreation"></a>
- **Description:** Component for creating new posts.
- **Key Functions:**
  - Allows users to create new posts.

### LoginPage <a name="loginpage"></a>
- **Description:** Component for user authentication.
- **Key Functions:**
  - Handles user login.

### Post <a name="post"></a>
- **Description:** Component displaying a single post in detail.
- **Key Functions:**
  - Shows post details.
  - Allows users to like, dislike, edit, and delete the post.

### Profile <a name="profile"></a>
- **Description:** Component displaying user profile information.
- **Key Functions:**
  - Shows personal information.
  - Allows users to edit their profile.

### EditPost <a name="editpost"></a>
- **Description:** Component for editing an existing post.
- **Key Functions:**
  - Allows users to modify the text of a post.

### PrivateRoute <a name="privateroute"></a>
- **Description:** Higher-order component for securing routes.
- **Key Functions:**
  - Redirects unauthenticated users to the login page.

### NotFound <a name="notfound"></a>
- **Description:** Component for handling 404 Not Found errors.
- **Key Functions:**
  - Displays a friendly message for unknown routes.

## 7. Styles <a name="styles"></a>
The project uses a simple CSS approach for styling components. Styles are organized within each component's directory.

## 8. API Endpoints <a name="api-endpoints"></a>

### Posts API

- **Get All Posts**
  - **Endpoint:** `/api/posts`
  - **Method:** GET
  - **Description:** Retrieve a list of all posts.
  - **Response:**
    - Status 200 OK
    - Body: Array of post objects

- **Add a New Post**
  - **Endpoint:** `/api/posts`
  - **Method:** POST
  - **Description:** Create a new post.
  - **Request:**
    - Body: JSON object with `text` property
  - **Response:**
    - Status 201 Created
    - Body: JSON object of the created post

- **Edit a Post**
  - **Endpoint:** `/api/posts/:id`
  - **Method:** PUT
  - **Description:** Update the text of an existing post.
  - **Request:**
    - URL Parameter: `id` - ID of the post to be edited
    - Body: JSON object with `text` property
  - **Response:**
    - Status 200 OK
    - Body: JSON object of the edited post

- **Delete a Post**
  - **Endpoint:** `/api/posts/:id`
  - **Method:** DELETE
  - **Description:** Remove an existing post.
  - **Request:**
    - URL Parameter: `id` - ID of the post to be deleted
  - **Response:**
    - Status 204 No Content

### Authentication API

- **User Login**
  - **Endpoint:** `/api/login`
  - **Method:** POST
  - **Description:** Authenticate a user and receive a JWT token.
  - **Request:**
    - Body: JSON object with `username` and `password` properties
  - **Response:**
    - Status 200 OK
    - Body: JSON object with `token`

- **User Logout**
  - **Endpoint:** `/api/logout`
  - **Method:** POST
  - **Description:** Invalidate the user's JWT token.
  - **Request:**
    - Headers: `Authorization` - Bearer token
  - **Response:**
    - Status 200 OK
    - Body: JSON object with logout confirmation

## 9. Authentication <a name="authentication"></a>
User authentication is implemented using JSON Web Tokens (JWT). The backend issues a token upon successful login, and the frontend includes this token in requests' `Authorization` headers.

## 10. Troubleshooting <a name="troubleshooting"></a>
- **Issue:** 403 Forbidden with JsonWebTokenError: invalid token.
  **Solution:** Verify token generation, format, expiration time, and secret key.
