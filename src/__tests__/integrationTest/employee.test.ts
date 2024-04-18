import request from 'supertest';
import app from '../../app';
import { AppDataSource } from '../../data-source';
import { employees } from '../../entity/employees';

describe('Employee COntroller Integration Test', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  beforeEach(async () => {
    await AppDataSource.getRepository(employees).clear();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  it('POST /employee should create a new employee', async () => {
    const employee = {
      name: "Anant",
      surname: "Jain",
      seniority: 1,
      role: "driver",
    };
    const response = await request(app)
      .post('/employee')
      .send(employee)
      .expect(202);

    expect(response.body.name).toBe(employee.name);
    expect(response.body.surname).toBe(employee.surname);
    expect(response.body.seniority).toBe(employee.seniority);
    expect(response.body.role).toBe(employee.role);
  });

  // it('GET /customerLists should return all customerLists', async () => {
  //   await request(app).post('/customerLists').send({
  //     name: 'Diana Ruiz',
  //     address: '947 Michael Alley St',
  //     phoneNumber1: '316-4713',
  //     phoneNumber2: '221-7327'
  //   });
  //   await request(app).post('/customerLists').send({
  //     name: 'Justin Hernandez',
  //     address: '697 Hubbard Camp St',
  //     phoneNumber1: '686-8769',
  //     phoneNumber2: '997-9883'
  //   });

  //   const response = await request(app)
  //     .get('/customerLists')
  //     .expect(200);

  //   expect(response.body.length).toBe(2);
  // });

  // it('GET /customerLists/:id should return a customerList by id', async () => {
  //   const postResponse = await request(app)
  //     .post('/customerLists')
  //     .send({
  //       name: 'Steven Reeves',
  //       address: '140 Watts Falls St',
  //       phoneNumber1: '904-2506',
  //       phoneNumber2: '894-1174'
  //     });

  //   const customerListId = postResponse.body.id;
  //   const response = await request(app)
  //     .get(`/customerLists/${customerListId}`)
  //     .expect(200);

  //   expect(response.body.id).toBe(customerListId);
  //   expect(response.body.name).toBe('Steven Reeves');
  // });

  // it('PUT /customerLists/:id should update a customerList', async () => {
  //   const postResponse = await request(app)
  //     .post('/customerLists')
  //     .send({
  //       name: 'Dean Richardson',
  //       address: '215 Matthew Loaf St',
  //       phoneNumber1: '829-4986',
  //       phoneNumber2: '251-3356'
  //     });

  //   const customerListId = postResponse.body.id;
  //   const response = await request(app)
  //     .put(`/customerLists/${customerListId}`)
  //     .send({
  //       name: 'Yolanda Chan',
  //       address: '215 Matthew Loaf St',
  //       phoneNumber1: '829-4986',
  //       phoneNumber2: '251-3356'
  //     })
  //     .expect(200);

  //   expect(response.body.name).toBe('Yolanda Chan');
  // });

  // it('DELETE /customerLists/:id should delete a customerList', async () => {
  //   const postResponse = await request(app)
  //     .post('/customerLists')
  //     .send({
  //       name: 'Rebecca Carroll',
  //       address: '701 Mia Cove St',
  //       phoneNumber1: '221-7327',
  //       phoneNumber2: '963-3678'
  //     });

  //   const customerListId = postResponse.body.id;
  //   await request(app)
  //     .delete(`/customerLists/${customerListId}`)
  //     .expect(204);

  //   await request(app)
  //     .get(`/customerLists/${customerListId}`)
  //     .expect(404);
  // });
});
