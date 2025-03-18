import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import postsRouter from './routes/posts';

import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/posts', postsRouter);

app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});