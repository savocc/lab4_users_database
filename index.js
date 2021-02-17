'use strict'
var mongoose = require("mongoose");
const express = require('express');
const app = express();
app.use(express.json());
var http = require('http').Server(app);

var https = require('https');
let USERS = require("./users");
var dbUrl = "mongodb+srv://messenger_app:GxnGeXkikQujzu5T@cluster0.9pgwk.mongodb.net/user?retryWrites=true&w=majority";
//create a new product

function getErrors(error) {
    if (error) {
        let errorArray = [];
        if (error.errors['username']) {
            console.log(error.errors['username'].message)
            errorArray.push('username');
        }
        if (error.errors['email']) {
            console.log(error.errors['email'].message)
            errorArray.push('email');
        }
        if (error.errors['city']) {
            console.log(error.errors['city'].message)
            errorArray.push('city');
        }
        if (error.errors['url']) {
            console.log(error.errors['url'].message)
            errorArray.push('url');
        }
        if (error.errors['zip']) {
            console.log(error.errors['zip'].message)
            errorArray.push('zip');
        }
        if (error.errors['phone']) {
            console.log(error.errors['phone'].message)
            errorArray.push('phone');
        }
        return errorArray;
    } else {
        return 'No Errors, Product Saved Succefully'
    }
};

app.post('/users',function(req,res){
    let reqq = req.body;
    let product = new USERS();
    product.username =  reqq.username;
    product.email =  reqq.email;
    product.city =  reqq.address.city;
    product.url =  reqq.website;
    product.zip =  reqq.address.zipcode;
    product.phone =  reqq.phone;
    product.save(function (error) {//check for errors
        let errors = getErrors(error);//Send Errors to browser
        res.send(errors);
    });

});



mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
  }); 


const PORT = process.env.PORT || 3000;

var server = http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
 
