//Imports
const nodemailer = require('nodemailer');

//------------------------------------------------------------------------------------------------------------
function mailSend(motivo,correoDireccion,cuerpo){
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
        user: 'mis-turnos@hotmail.com',
        pass: 'uade1234'
        }
    });
    
    let mailOptions = {
    from: 'mis-turnos@hotmail.com',
    to: correoDireccion,
    subject: motivo,
    html: cuerpo
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}
//------------------------------------------------------------------------------------------------------------

exports.mailSend = mailSend;