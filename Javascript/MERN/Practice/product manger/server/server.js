const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require("./config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.json(), express.urlencoded({ extended: true }));
const AllMyMangerRoutes = require("./routes/manager.route");
AllMyMangerRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
