const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/tasks')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})

// const jwt = require('jsonwebtoken')

// // const bcrypt = require('bcryptjs')

// const myFunction = async() => {
//     const token = jwt.sign({_id:'34reed'}, 'freelesson', {expiresIn: "2h"})
//     console.log(token)

//     const data = jwt.verify(token, 'freelesson')

//     console.log(data)   
// }


// myFunction()
// try {
//     myFunction()
// } catch (error) {
//     console.log(e)
// }
