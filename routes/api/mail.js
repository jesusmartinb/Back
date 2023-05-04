const { transporter } = require('../../config/mailer');

const router = require('express').Router();





router.post('/', (req, res) => {
    const destinatario = req.body.destinatario;
    const asunto = req.body.asunto;
    const cuerpo = req.body.cuerpo;

    const mailOptions = {
        from: 'unir.grupo.b@gmail.com',
        to: destinatario,
        subject: asunto,
        text: cuerpo
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo electrónico');
        } else {
            console.log('Correo electrónico enviado: ' + info.response);
            res.status(200).send('Correo electrónico enviado');
        }
    });
});



module.exports = router;