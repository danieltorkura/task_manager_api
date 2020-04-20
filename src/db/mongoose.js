const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})



// const me = new User ({
//     name: 'Andrew',
//     email: 'torkuradaniel@gmail.com',
//     age: 27,
//     password:'madamfunke'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// const task = new Tasks ({
//     description: 'Write article',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })