const app = require('../app')
const mongoose = require('mongoose')

const port = 3100
app.listen(port,()=>{
  console.log(`Server started on port ${port}.`);

  mongoose.connect('mongodb://localhost:27017/reactTodo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, () => {
      console.log('Connection to databse is uspeshna.');
    });

})
