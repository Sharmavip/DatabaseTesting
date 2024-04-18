// import request from 'supertest';
// import app from '../../app';
// import { AppDataSource } from '../../data-source';
// import { employees } from '../../entity/employees';

// describe('Employee COntroller Integration Test', () => {
//   beforeAll(async () => {
//     await AppDataSource.initialize();
//   });

//   beforeEach(async () => {
//     await AppDataSource.getRepository(employees).clear();
//   });

//   afterAll(async () => {
//     await AppDataSource.destroy();
//   });

//   it('POST /employee should create a new employee', async () => {
//     const employee = {
//       name: "Anant",
//       surname: "Jain",
//       seniority: 1,
//       role: "driver",
//     };
//     const response = await request(app)
//       .post('/employee')
//       .send(employee)
//       .expect(202);

//     expect(response.body.name).toBe(employee.name);
//     expect(response.body.surname).toBe(employee.surname);
//     expect(response.body.seniority).toBe(employee.seniority);
//     expect(response.body.role).toBe(employee.role);
//   });
// });