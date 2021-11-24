//test get all todos

// test 200 response and all todos with valid request

// test 200 response and empty array with valid request but no todos

const request = require('supertest');
const appServer = require('../../app');
const database = require('../../config/db');
const Todo = require('../../models/todoModel');

// assuming mongoose@5.x
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await database.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
});

const createTodo = (title = 'Get breakfast', description = 'make some food', energyLevel = 1, steps = [], isDone = false, dueDate = null) => {
  return {
    title: title,
    description: description,
    energyLevel: energyLevel,
    steps: steps,
    isDone: isDone,
    dueDate: dueDate,
  };
};
describe('Given that we have an /api/todos GET route', () => {
  test('it should return a 200 with a valid request', async () => {
    const newTodo = createTodo('Get Food');
    const row = new Todo(newTodo);
    await row.save();

    const checkBody = (res) => {
      expect(res.body.length).toBe(1);
      expect(res.body[0].title).toBe('Get Food');
    };

    await request(appServer)
      .get('/api/todos/')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect(checkBody)
      .expect(200);
  });
});
