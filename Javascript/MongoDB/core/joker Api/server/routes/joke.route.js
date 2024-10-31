const JokeController= require("../controllers/joke.controller")




module.exports=(app)=>{
    app.post("/api/jokes", JokeController.createNewJoke)
    app.get("/api/jokes", JokeController.findAllJoke)
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
    app.put("/api/jokes/:id", JokeController.updateExistingJoke)
    app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke)
}