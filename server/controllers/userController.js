var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function (req, res) {
        var user = new User(req.body);
        user.save(function (err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    findEmail: function (req, res) {
        User.findOne({email: req.body.email}, function (err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data)
        })
    },

    login: function (req, res) {
        User.findOne({email: req.body.email, password: req.body.password}, function (err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data)
        })
    }
}