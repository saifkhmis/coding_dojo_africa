const {faker}=require('@faker-js/faker')


const creatUser=()=>{
    const NewUser ={
        password : faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number("+48 ### ## ##"),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.database.mongodbObjectId()
    }
    return NewUser
} 



const newfakeUser=creatUser()
console.log(newfakeUser)
const users = []
module.exports=(app)=>{
    app.post("/api/users/new", (req,res)=>{
        const user =creatUser()
        users.push(user)
        res.json(users)
    })
}
