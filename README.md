# Full Stack App

This app will be running Nuxt 3 on the frontend and Node js on the backend

## Frontend

Open the frontend folder and install dependencies. We could use any package manager. I have used pnpm:

```bash
pnpm i
```

To run the application:

```bash
pnpm run dev
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
