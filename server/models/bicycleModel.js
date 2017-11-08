var mongoose = require('mongoose');
var Schema = mongoose.Schema

var BicycleSchema = new Schema ({
    title: {type: String, required: [true, "Title missing"], minlength: 3},
    description: {type: String, required: [true, "Description missing"], maxlength: 200},
    price: {type: Number, required: [true, "Email is needed"]},
    location: {type: String, required: [true, "Password missing"]},
    image: {type: String, required: [true, "Password missing"]},
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "_creator is missing"]
        }
}, {timestamps: true});

mongoose.model('Bicycle', BicycleSchema);