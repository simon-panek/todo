# LAB - Class 31

## Project: ToDo

### Author: Simon Panek, Mariko Alvarado, Ricardo Barcenas, Nathan Cox, Michael Eclavea

### Links and Resources

- [Deployed To GH Pages](https://simon-panek.github.io/todo/)

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### Authentication

- Authentication Route: `https://dashboard.heroku.com/apps/simonpanek-auth-api`

- (Authenticated API Routes)
  - POST /api/v2/:model with a bearer token that has create permissions adds an item to the DB and returns an object with the added item
  - GET /api/v2/:model with a bearer token that has read permissions returns a list of :model items
  - GET /api/v2/:model/ID with a bearer token that has read permissions returns a single item by ID
  - PUT /api/v2/:model/ID with a bearer token that has update permissions returns a single, updated item by ID
  - DELETE /api/v2/:model/ID with a bearer token that has delete permissions returns an empty object. Subsequent GET for the same ID should result in nothing found

- SignUp: `https://simonpanek-auth-api.herokuapp.com/signup`
  - Required

```js

{
    "username": "simon99",
    "password": "123456",
    "role": "admin"
}

```

- Return

```js

{
    "user": {
        "role": "admin",
        "_id": "600a1ce173a5700017ffa5c5",
        "username": "simon99",
        "password": "$2b$10$14tPdkZ3QTjkJJnX918nrOFkrS7Ip/lDEK.oYCS3KbtEUR8Knp9Sm",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbW9uOTkiLCJpYXQiOjE2MTEyNzU0ODl9.BBwARWR59bDsADlFhG5yUOzuuVKJ2EkOHg3bvHKF4TM",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": "600a1ce173a5700017ffa5c5"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbW9uOTkiLCJpYXQiOjE2MTEyNzU0ODl9.BBwARWR59bDsADlFhG5yUOzuuVKJ2EkOHg3bvHKF4TM"
}

```

- Sign In: `https://simonpanek-auth-api.herokuapp.com/signin`
  - Require: Basic Authorization
    - Username
    - Password

- Return

```js

{
    "user": {
        "role": "admin",
        "_id": "600a1ce173a5700017ffa5c5",
        "username": "simon99",
        "password": "$2b$10$14tPdkZ3QTjkJJnX918nrOFkrS7Ip/lDEK.oYCS3KbtEUR8Knp9Sm",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbW9uOTkiLCJpYXQiOjE2MTEyNzU1NTh9.BVDezNmDycYYhrYjX-Npqm6eDmnrRfHctaCN8dw9sCE",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": "600a1ce173a5700017ffa5c5"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbW9uOTkiLCJpYXQiOjE2MTEyNzU1NTh9.BVDezNmDycYYhrYjX-Npqm6eDmnrRfHctaCN8dw9sCE"
}

```

- Post Item: `https://simonpanek-auth-api.herokuapp.com/api/v2/food`
  - Required: Bearer Authorization
    - Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbW9uOTkiLCJpYXQiOjE2MTEyNzU1NTh9.BVDezNmDycYYhrYjX-Npqm6eDmnrRfHctaCN8dw9sCE

```js
{
    "name": "apple",
    "calories":"7",
    "type":"fruit"
}
```

- Return

```js

{
    "_id": "600a1db673a5700017ffa5c6",
    "name": "apple",
    "calories": 7,
    "type": "FRUIT",
    "__v": 0
}

```

#### UML

![UML Diagram Phase 1](401-todo-lab-31.png)
![UML Diagram Phase 2](401-todo-lab-32.png)
![UML Diagram Phase 3](401-todo-lab-33.png)
![UML Diagram Phase 4](401-todo-lab-34.png)
