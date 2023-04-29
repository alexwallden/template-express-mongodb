import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const databaseName = ''; // Set name of database

// mongoose
//   .connect(`mongodb://localhost:27017/${databaseName}`, mongooseOptions)
//   .then(() => {
//     console.log('Connnected to database!');
//   });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
