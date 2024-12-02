const mongoose = require("mongoose")

const customerSchema = mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String
        }

    }
)

const Customer = mongoose.model("Customer",customerSchema)

module.exports = Customer