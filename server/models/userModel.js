var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema ({
    firstName: {type: String, required: [true, "First name is missing"], minlength: 3},
    lastName: {type: String, required: [true, "Last name is missing"], minlength: 3},
    email: {type: String, required: [true, "Email is needed"]},
    password: {type: String, required: [true, "Password missing"], minlength: 5}
}, {timestamps: true})

mongoose.model('User', UserSchema);