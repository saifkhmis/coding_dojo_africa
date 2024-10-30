const {faker}=require('@faker-js/faker')

const creatcompanyANDuser=()=>{
    const NewCompanyUser={
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        country: faker.address.country(),
        password : faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number("+48 ### ## ##"),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.database.mongodbObjectId()
    }
    return NewCompanyUser
} 

const NewCompanyUser=creatcompanyANDuser()
console.log(NewCompanyUser)
const companyUserss=[]
module.exports=(app)=>{
    app.post("/api/companies/user", (req,res)=>{
        const compuser =creatcompanyANDuser()
        companyUsers.push(compuser)
        res.json(companyUserss)
})
}