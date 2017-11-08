var mongoose = require('mongoose');
var Bicycle = mongoose.model('Bicycle');

module.exports = {
    create: function (req, res) {
        var bicycle = new Bicycle(req.body);
        bicycle.save(function (err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data)
        })
    },

    update: function (req, res) {
        Bicycle.update({_id: req.params.id}, req.body, function(err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    showmine: function (req, res) {
        Bicycle.find({_creator: req.params.id}, function (err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    showall: function (req,res) {
        Bicycle.find({})
        .populate('User')
        .exec(function(err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    delete: function(req, res) {
        Bicycle.remove({_id: req.params.id}, function(err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    }
}