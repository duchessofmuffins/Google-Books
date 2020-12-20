const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch((error) => {
                console.log(error);
                res.status(422).json(error);
            });
    },
    findbyId: (req, res) => {
        db.Book.findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((error) => {
            console.log(error);
            res.status(422).json(error);
        });
    },
    create: (req, res) => {
        db.Book.create(req.body)
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch((error) => {
                console.log(error);
                res.status(422).json(error);
            });
    },
    update: (req, res)=> {
        db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch((error) => {
                console.log(error);
                res.status(422).json(error);
            });
    },
    remove: (req, res) => {
        db.Book.findById({ _id: req.params.id })
            .then((dbModel) => {
                dbModel.remove();
            })
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch((error) => {
                console.log(error);
                res.status(422).json(error);
            });
    },
};