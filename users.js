const mongoose = require("mongoose");// create product schema
let users = mongoose.Schema(
    {username: {type: String,required: [true, 'username required'],minlength:[4,'Minimum length 4 characters']},
    email: {type: String,required: [true, 'Email required'],pattern:['/[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com/','email not correct']},
    city: {type: String,required: [true, 'City required'],pattern:['//^[a-zA-Z ]*$/','Only alphabets and space']},
    url: {type: String,required: [true, 'URL required'],pattern:['/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/','Pattern']},
    zip: {type: String,required: [true, 'Zip required'], pattern:['/[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9]/','number Pattern']},
    phone: {type: String,required: [true, 'Phone required'],pattern:['/[0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]/','Pattern']}});
    module.exports = mongoose.model("users", users);

    