const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    auth: {
        user: 'unir.grupo.b@gmail.com',
        pass: 'mdmoptnjizhodjqv'
    }
});

module.exports = {
    transporter
}