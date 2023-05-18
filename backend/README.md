## V 0.1

Backend concept
![image](https://github.com/Oreofreakshake/E-sportJS/assets/53213763/fc55ea57-c8e0-4232-8dcd-446338a4bfc4)

### Server commands

-   `npx prisma studio --> web UI`
-   `npx prisma migrate dev --> migrate db`
-   `npm run dev --> run server`

# Todo

-   [x] DB setup and create models
-   [x] endpoint creation
-   [x] endpoint validation
-   [X] Generate secret for mySecretKey & myRefreshSecretKey
-   [x] Refactor and use one DB instead of 3 for posts
-   [x] Fix login endpoint validation using DB data
-   [ ] images submission update DB (possibly) or endpoint

### endpoints

-   [GET,POST,PATCH] http://localhost:3000/api/posts
-   [GET,POST] http://localhost:3000/api/rejects ❌ (unused)
-   [GET,POST] http://localhost:3000/api/accepts ❌ (unused)
-   [POST] http://localhost:3000/api/login
-   [POST] http://localhost:3000/api/refresh

### env example

-   `DATABASE_URL="file:./dev.db"`
-   `PORT=3000`
