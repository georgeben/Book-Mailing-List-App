const express = require('express');
const mongoose = require('mongoose');
//The router is like a mini app
const router = express.Router();
const Subscribers = mongoose.model('Subscribers');

router.get("/", (req, res) =>{
    //res.send("<h1>Awesome</h1>")
    res.render("index", {
        title:"The jungle of Mongoose"
    })
});

router.post("/", (req, res) =>{
    console.log("New entry", req.body)
    const subscriber = new Subscribers({name:req.body.name,
                                        email:req.body.email,
                                        date: new Date()});
    subscriber.save()
    .then(() =>{
        console.log("Successfully saved data to database");
        //res.send("Thanks for submitting");
        res.render("thankyou", {
            name: req.body.name,
        })
    })
    .catch((err) =>{
        console.log("Error while saving", err.message);
        res.send("Sorry, something went wrong");
    })
    
});

router.get("/subscribers", (req, res) =>{
    //let subscribers;
    Subscribers.find().sort({'date': -1})
    .then((subscribers) => {

        res.render("subscribers", {
            subscribers:subscribers,
            present:subscribers.length > 0,
        })
    })
    .catch((err) =>{
        console.log("Error when retrieving subscribers", err.message);
    })
    
})

module.exports = router;