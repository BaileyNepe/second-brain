const mongoose = require('mongoose');

const stepSchema = mongoose.Schema({
  stepId: Number,
  description: String,
  isComplete: Boolean,
});
const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    energyLevel: { type: Number, min: 1, max: 3, required: true },
    steps: [stepSchema],
    isDone: { type: Boolean },
    dueDate: Date,
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

// id - number
// todo - string
// description - string
// low energy - boolean
// medium energy - boolean
// high energy - boolean
// steps - array object
// done - boolean
// dueDate - date

// steps [
//     {
//         first : "go to car"
//     },
//     {
//       second: "open door"
//     }
// ]
