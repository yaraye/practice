const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  member: { 
    type: String, 
    required: true 
  },
  payment: {
     type: String, 
     required: true 
    },
  reason: { 
    type: String, 
    required: true 
  },
  description: {
    type:String
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
