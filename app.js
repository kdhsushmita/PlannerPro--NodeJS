const express = require('express');
const app = express();
const tasks = require('./routes/Tasks')
const connectDB = require('./db/connect')
require('dotenv').config();

app.use(express.static('./public'))
app.use(express.json());

const port = 8000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("listening to port")
        })
    } catch (error) {
        console.log(error)
    }
}

start()

app.use('/api/v1/tasks', tasks)