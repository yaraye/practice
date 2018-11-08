const db = require('../models');

module.exports = {
    findAllMembers: (req, res) => {
        db.members
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    
    },
    createMember: (req, res) => {
        db.members
        .create(req.body)
        .then(function(member) {
            res.json(member);
        });
    },

    // findAllSymptoms: (req, res) => {
    //     db.Symptoms
    //     .findAll({})
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(500).json(err));
    // },

    // findOneSymptoms: (req, res) =>{
    //     db.Symptoms
    //       . findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    // }


};