const express = require('express'); const mongoose = require('mongoose'); const cors = require('cors');
const questionsRouter = require('./routes/questions'); const usersRouter = require('./routes/users');
const path=require('path')
const app = express(); const PORT = 5000;

app.use(express.static(path.join(  dirname,'../client/build')))

mongoose.connect('mongodb://localhost:27017/interview-guide', { useNewUrlParser: true,
useUnifiedTopology: true,
});

const db = mongoose.connection; db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors()); app.use(express.json());

app.use('/api', questionsRouter); app.use('/api/users', usersRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const questionsRouter = require('./routes/questions');
// const app = express();
// const PORT = 5000;

// mongoose.connect('mongodb://localhost:27017/interview-guide', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to MongoDB'));

// app.use(cors());
// app.use(express.json());

// app.use('/api', questionsRouter);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
