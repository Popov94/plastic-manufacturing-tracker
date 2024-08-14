import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000', // your frontend URL
    methods: 'GET,POST,PUT,DELETE',
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Data fetched successfully', data: [] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
