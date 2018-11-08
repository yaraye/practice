
// module.exports = function(sequelize, DataTypes) {

//   const Members = sequelize.define("Members", {
//         name: DataTypes.STRING,
//         password: DataTypes.STRING,
//     });
//     return Members;
// }

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    isDeleted:{
        type: Boolean,
        default:false
    },
    signUpDate:{
        type: Date,
        default: Date.now()
    }
});

loginSchema.method.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9), null);
},
loginSchema.method.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.export = mongoose.model('member', loginSchema);