# URL_SHORTENER-FullStack
This repository contains a URL Shortener web application built using Node.js, Express.js, MongoDB, and EJS (Embedded JavaScript) for templating. The project allows users to convert long URLs into shortened, easy-to-share links. The application showcases both front-end and back-end development, with a focus on efficiency and usability.

![Screenshot 2024-09-09 172554](https://github.com/user-attachments/assets/c40930ea-a6d5-4861-a44a-7e6fe5dcfd74)
![Screenshot 2024-09-09 172624](https://github.com/user-attachments/assets/05cd1147-93e5-4857-bf01-f183f97ff2d0)
![Screenshot 2024-09-09 172643](https://github.com/user-attachments/assets/3bcd8db3-10b0-4985-a805-73b8fd2056d2)
![Screenshot 2024-09-09 172700](https://github.com/user-attachments/assets/a4d544ce-0c6e-490a-a094-4abec6dc3576)


## Key Features:
- **Node.js** for building the server-side logic, processing requests, and URL shortening.
- **Express.jsV as a lightweight framework for routing and handling HTTP requests.
- **MongoDB** for storing original URLs and their shortened counterparts.
- **EJS** for dynamically rendering HTML templates.
- User-friendly interface for submitting long URLs and retrieving shortened versions.
- Custom URL generation with random string encoding.
- Redirect functionality to the original URL when accessing the shortened link.
- Basic analytics to track URL usage, including number of clicks (optional).
- RESTful API for creating and retrieving shortened URLs programmatically.

## Installation:
#### 1.Clone the repository:-
```
git clone https://github.com/Manoharyadav7080/URL_SHORTENER-FullStack.git
```
#### 2.Navigate to the project directory
```
cd URL_SHORTENER-FullStack
```

### 3.Install dependencies
```
npm install
```

### 4.Set up the environment variables in a .env file
```
PORT= ? 
MONGO_URI=<your-mongodb-connection-string>

```
### 5.Start the application
```
nodemon index,js
OR
node index.js

```


## Tech Stack:

- **Back-end**: Node.js, Express.js
- **Front-end**: EJS, CSS, JavaScript
- **Database**: MongoDB (Mongoose ODM)
- **Version Control**: Git, GitHub







