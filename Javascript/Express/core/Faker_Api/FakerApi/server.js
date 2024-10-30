const express = require('express');
const { faker } = require("@faker-js/faker")

const app = express()
const port = 8000

//* We can create createUser and createCompany





//* Middlewares
app.use(express.json())


//* Routes
require('./routes/User.routes')(app)
require('./routes/company.routes')(app)
require('./routes/companyUSER.route')(app)

app.listen(port, ()=> {
    console.log(`Server is running at port: ${port}`)
})