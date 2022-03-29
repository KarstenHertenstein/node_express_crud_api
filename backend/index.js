import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRoutes from './routes/users.js';
import uploadRoute from './routes/upload.js';

const app = express();
const PORT = 5000;

const URL = 'mongodb+srv://root:root@cluster0.obtnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
    .catch((error) => console.log(`Error: ${error}`));

app.use(express.json());
app.use(cors());

app.use('/user', usersRoutes);
app.use('/upload', uploadRoute);
 
app.get('/', (req, res) => res.send('Welcome to the Pentesting API!'));
app.all('*', (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));