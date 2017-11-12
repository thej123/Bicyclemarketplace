var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function (req, res) {
        User.findOne({email: req.body.email}, function (err, data) {
            if(data){
                console.log("user already exist", data)
                return  res.json(false)
            }
            else {
                var user = new User(req.body);
                user.save(function (err, data) {
                    if (err) {
                        return res.json(err);
                    }
                    console.log("create user", data)
                    res.json(data);
                })
            }
        })
    },


    userlogin: function (req, res) {
        console.log(req.body);
        User.findOne({email: req.body.email, password: req.body.password}, function (err, data) {
            if(err) {
                return res.json(err);
            }
            console.log(data);
            res.json(data)

        })
    }
}