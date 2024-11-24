const mongoose = require('mongoose')

const BusinessSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    }
)


const BusinessModel = mongoose.model("business", BusinessSchema)
module.exports = BusinessModel