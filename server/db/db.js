const mongoose = require('mongoose');

const password = encodeURIComponent("")
mongoose.connect(`mongodb+srv://manishReddy:${password}@cluster0.xnkhp.mongodb.net/?retryWrites=true&w=majority`, {
    useUnifiedtopology: true,
    useNewUrlParser: true
}).then(
    () => console.log('DB connected..')
).catch(err => console.log(err))