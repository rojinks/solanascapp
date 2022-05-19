const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text']
    },
},
{
    timestamps: true
    }
)

module.exports = mongoose.model('Profile', profileSchema)

