import express from 'express';
import studentsRouter from './routes/students.router.js';
import mentorsRouter from './routes/mentors.router.js';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect();

app.use(express.json());
app.get('/', (request, response) => {
  response.send({ message: 'Hello World !!!' });
});

app.use('/students', studentsRouter);
app.use('/mentors', mentorsRouter);

app.listen(PORT, () =>
  console.log(`The Server is running on the port : ${PORT}`)
);
