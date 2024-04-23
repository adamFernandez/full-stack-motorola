# Full Stack App

This app will be running Nuxt 3 on the frontend and Node js on the backend

## Visible at AWS EC2 instance at:

```bash
http://13.42.41.78:3500
```

## Frontend

Open the frontend folder and install dependencies. We could use any package manager. I have used pnpm:

```bash
pnpm i
```

To run the application:

```bash
pnpm run dev
```

Add `.env` file.

```env
PORT=3500
```

Application will be running on port 3500

```bash
http://localhost:3500
```

## Backend

The node application is in development. Elements ready:

Base path: `backend/src`

- Basic server set up (index.ts)
- User Schema, Model and actions (db/users.ts)
- Helper functions for random and authentication token generation (helpers/index.ts)
- Router: base(router/index.ts), authentication(router/authentication.ts)

## Register user

User registration using Postman. Working

```bash
http://localhost:8080/auth/register
```

```json
{
  "email": "email@gmail.com",
  "password": "password",
  "username": "Username"
}
```

## Login

```bash
http://localhost:8080/auth/login
```

```json
{
  "email": "email@gmail.com",
  "password": "password"
}
```
