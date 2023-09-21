const mongoose = require ('mongoose');
const userSchema = mongoose.Schema(
    {
        username : {String, required : true },
        Email : {String, required : true} ,
        phone_number : number 
    }
)
const Contact = mongoose.model('Contact', contactSchema)
module.exports =user 