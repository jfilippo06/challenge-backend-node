const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
    .then(() => console.log('Database listinig'))
    .catch((e) => console.log(`Error ${e}`))