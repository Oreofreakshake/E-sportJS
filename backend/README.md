## V 0.1

Backend concept
![image](https://github.com/Oreofreakshake/E-sportJS/assets/53213763/fc55ea57-c8e0-4232-8dcd-446338a4bfc4)

### Server commands
- `npx prisma studio --> web UI`
- `npx prisma migrate dev --> migrate db`
- `npm run dev --> run server`

# Todo
  - [X] DB setup and create models
  - [X] endpoint creation 
  - [X] endpoint validation
  - [ ] Generate secret for mySecretKey & myRefreshSecretKey


### endpoints 
- [GET,POST] http://localhost:3000/api/posts
- [GET,POST] http://localhost:3000/api/rejects
- [GET,POST] http://localhost:3000/api/accepts
- [POST] http://localhost:3000/api/login
- [POST] http://localhost:3000/api/refresh

### env example
- `DATABASE_URL="file:./dev.db"`
- `PORT=3000`
