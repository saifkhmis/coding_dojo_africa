const express = require('express')
const app = express();



require('dotenv').config();
require('./config/mongoose.config')

const port = process.env.PORT
app.use(express.json(), express.urlencoded({ extended: true}));


const AllMyJokeRoutes = require('./routes/joke.route');
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));