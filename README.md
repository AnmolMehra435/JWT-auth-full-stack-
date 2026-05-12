# JWT-auth-full-stack

So I was learning MERN stack and decided to build this fullstack JWT authentication website 

KEYS:-
 -- User can create account
 -- user can register using their credentials 
 -- Users stay logged in till their token expires

TECK STACK:-
  frontend:- 
    -- React - frontend build on react with components and routing using (react-router-dom)
    -- axios - Axios is used to communicate with the backend (sending request, recieving response)
  backend:- 
    -- Node.js - language used to run js on command line
    -- express.js - used as main backend language for middleware, controller and routing
    -- jsonwebtoken - used to create unique token for each user when they login and to verify theri identity for future requests
    -- bcrypt - used for password hashing and storing
    -- cors - used for cross origin request sharing since frontend and backend runs on different ports
  database:- 
    --mongodb atlas - online server based database easy to connect and use 
    --mongoose - node package used to manage the database from the backend

  BASIC FOLDER STRUCTURE
    frontend/-
          src/-
             pages/-
                Login.jsx
                Register.jsx
                Dashboard.jsx
             services/-
                authServices.js
              App.jsx
              app.css
              main.jsx
      backend/-
          models/-
                user.js
          controllers/-
                authController.js
          middleware/-
                verifyJwt.js
          routes/-
                authRoutes.js
          server.js
          
