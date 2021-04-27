const mongoose = require('mongoose')

module.exports = mongoose.model('Todo',{
  title:'String',
  isDone: {type: Boolean, default: false}
})
