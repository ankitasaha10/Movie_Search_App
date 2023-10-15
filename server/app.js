const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors')
app.use(cors({credentials: true, origin: true}));

const MovieRouter = require('./Routes.js/MoviesRouter');


app.use('/movie', MovieRouter)

app.listen(3003, () => console.log('Server is running on port 3003'));
