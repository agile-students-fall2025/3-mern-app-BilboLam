const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  }
)

// create mongoose Model
const About = mongoose.model('About', aboutSchema)

// export the model so other modules can import it
module.exports = {
  About,
}
