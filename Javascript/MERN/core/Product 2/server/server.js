const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
    
require("./config/product.config");
    
app.use(cors());
app.use(express.json()); // This is new
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyProductRoutes = require("./routes/product.model");
AllMyProductRoutes(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
