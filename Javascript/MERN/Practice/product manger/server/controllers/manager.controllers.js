
const Manager= require("../models/manager.model")

        module.exports.createNewManager = (request, response) => {
            const { title,price,description} = request.body;
            Manager.create({
                title,
                price,
                description
            })
                .then(manager => response.json(manager))
                .catch(err => response.json(err));
        }