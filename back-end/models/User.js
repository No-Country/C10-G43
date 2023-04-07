const mongoose = require("mongoose");
const {Schema} = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
      extensionNumber: {
        type: Number,
        required: true,
      },
      extensionNumber: {
        type: Number,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
        unique:true
      },
      identificationType: {
        type: String,
        required: true,
      },
      identificationNumber: {
        type: Number,
        required: true,
        unique:true
      },
      address: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      country:{
        type: String,
        required:true
      },

      personalCards:{
        type:Array(
          new Schema({
            numberCard:Number,
            HashPasword:String,
            balance:Number
          },{_id:false})
        )
      },

      savedCards:{
        type:Array(
          new Schema({
            alias:String,
            cardNumber:Number
          },{_id:false})
        )
      },
      Movements:{
        type:Array(
          new Schema({
            cardOrigin:Number,
            date:Date,
            amount:Number,
            destination:Number,
            folio:Number,
            status:String
          },{_id:false})
        )
      },

    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("users", userSchema);