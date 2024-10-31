const Joke = require('../models/joke.model')


 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.status(201).json({ 
                success: true,
                message: "✅✅ New joke created successfully ✅✅",
                newJoke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.findAllJoke= (req, res) => {
    Joke.find()
        .then((allDaJoke) => {
            res.json({
                success:true,
                message:'all jokes find successfully ',
                jokes: allDaJoke})
        })
        .catch((err) => {
            res.json({
                success: false,
                message:"failed to find jokes",
                error:err
            })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
   Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({
                success:true,
                message:'one single joke find successfully ',
                jokes: oneSingleJoke })
        })
        .catch((err) => {
            res.json({
                success: false,
                message:"failed to find one single joke",
                error:err
            })
        });}


module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({
                success:true,
                message:"update successfully ",
                user: updatedJoke })
        })
        .catch((err) => {
            res.json({
                success: false,
                message: "failed to update joke",
                error: err
            })
        });}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({
                success:true,
                message: "joke deleted successfully",
                result: result })
        })
        .catch((err) => {
            res.json({
                success: false,
                message: "failed to delete joke",
                error: err
            })
        });}



