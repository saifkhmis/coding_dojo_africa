const mongoose= require('mongoose')


const JokeSchema= new  mongoose.Schema(
    {
        setup:{
            type: String,
            require:[true,"{PATH} is require"],
            miniLength:[10, "{PATH}must be at last 10 characters long"]
        },
        punchline:{
            type:String,
            require:[true,"{PATH} is require"],
            miniLength:[3, "{PATH}must be at last 10 characters long"]
            
        }
    },{timestamps:true}
)
const Joke= mongoose.model('Jokes',JokeSchema)
module.exports=Joke