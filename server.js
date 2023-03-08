import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

// Mocking DB
app.get('/api/hello', cors(), (req, res) => {
  const dbText = [
    {
      id: 1,
      text: "Hello World"
    }
  ];

  res.json(dbText);
});

const port = 3000;
app.listen(port, () => {
  `Server running on port ${ port }`;
});
