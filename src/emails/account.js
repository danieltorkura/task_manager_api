const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'daniel@pledre.com',
        subject: 'Working now',
        text: 'Get it here you lazy boy'
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'daniel@pledre.com',
        subject: 'Please come back',
        text: `Hello ${name}, why did you cancel. Care to tell us why?`
    })
}

module.exports = {
    sendWelcomeEmail,    
    sendCancelEmail
}

// sgMail.send({
//     to: 'torkuradaniel@gmail.com',
//     from: 'daniel@pledre.com',
//     subject: 'This is my first creation',
//     text: 'I hope this one actually gets to you'
// // }).then((worked) => {
//     console.log("worked")
// }).catch((e) => {  
//     console.log('Error')
// })