const express = require('express')
const app = express();
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())


// routes
app.get('/hello', (req, res) => {(res.send('Hello feller'))})
app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks/:id', (req, res) => { res.send('Hello feller')}) - get all the tasks
// app.post('/api/v1/tasks', (req, res) => { res.send('Hello feller')})   - create a new Task
// app.get('/api/v1/tasks/:id', (req, res) => { res.send('Hello feller')}) - get single task
// app.patch('/api/v1/tasks/:id', (req, res) => { res.send('Hello feller')}) - update task
// app.delete('/api/v1/tasks/:id', (req, res) => { res.send('Hello feller')}) - delete task


const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server is running on port ${port}...`));
