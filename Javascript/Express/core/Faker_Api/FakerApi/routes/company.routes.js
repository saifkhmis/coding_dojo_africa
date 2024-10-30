const { faker } = require('@faker-js/faker');
const creatcompany=()=>{
    const NewCompany={
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        country: faker.address.country(),
    }
    return NewCompany
} 

const NewCompany=creatcompany()
console.log(NewCompany)
const Company = []
module.exports=(app)=>{
    app.post("/api/company/new", (req,res)=>{
        const company =creatcompany()
        Company.push(company)
        res.json(Company)
    })
}