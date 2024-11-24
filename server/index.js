const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const BusinessModel = require('./models/business')


const PORT = 3002;

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/business");

app.post('/registration', (req, res) => {
    BusinessModel.create(req.body)
    .then(business => res.json(business))
    .catch(err => res.json(err))

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));