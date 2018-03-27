const Article = require('../models/articles.model');

module.exports = {
    findAll: (req, res) => {
        Article.find()
            .exec()
            .then(data => {
                res.status(200).json({
                    message: 'Success get all data',
                    data
                })
            })
            .catch(err => {
                return res.status(500).json({
                    message: 'Internal server error'
                })
            })
    },
    findById: (req, res) => {
        Article.findById(req.params.id)
            .exec()
            .then(data => {
                res.status(200).json({
                    message: 'Success get data',
                    data
                })
            })
            .catch(err => {
                return res.status(500).json({
                    message: 'Internal server error'
                })
            })
    },
    create: (req, res) => {
        Article.create({
            title: req.body.title,
            body: req.body.body
        }, (err, data) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                })
            }
            res.status(201).json({
                message: 'Create article success',
                data,
            })
        })
    },
    update: (req, res) => {
        Article.findByIdAndUpdate(req.params.id, req.body, {new :true}, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: 'Internal server error'
                })
            }
            res.status(200).json({
                message: 'Update article success',
                data
            })
        })
    },
    remove: (req, res) => {
        Article.remove({ _id: req.params.id }, (err, data)=>{
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                })
            }
            res.status(200).json({
                message: 'Delete article success'
            })
        })
    }
}