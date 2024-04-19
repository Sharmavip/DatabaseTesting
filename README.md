# Awesome Project Build with TypeORM

Steps to run this project:


1. Setup database settings inside `data-source.ts` file as per your database host,port, db credentails
2. To bring the postgres docker up run the command `docker compose up -d`
3. Run `npm start` command


 To Run the Unit and Integration Test:-
 a) npm run test


 To run the Migration:-
 a) To Run Migration changes:-
     npm migration:run

 b) To Revert the Migration changes:-
     npm migration:revert


