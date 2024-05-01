// const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
const { ServiceUnavailableException } = require("../helpers/exceptions");


// const Mailgen = require('mailgen');


// const generateEmailTemplate = (link) => { 
// const mailGenerator  = new Mailgen({
//     theme: 'default',
//     product: {
//         name: 'Mailgen',
//         link,
//     }
// });
    
//     const template = mailGenerator.generate();
//     return template;
// }

// const EMAIL_PASSWORD = process.env.PASSWORD;

const SENDER = process.env.EMAIL_SENDER;
const PORT = process.env.PORT;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);


// const transporter = nodemailer.createTransport({
//   host: "smtp.ukr.net",
//   port: 465,
//   secure: true, 
//   auth: {
//     user: SENDER,
//     pass: EMAIL_PASSWORD,
//   },
// });


// const send = async (config) => {
//   try {
//      const { from = SENDER, to,
//         subject,
//         text,
//          html,
//     } = config;
//     const info = await transporter.sendMail({
//         from,
//         to,
//         subject,
//         text,
//         html,
//     });
//     console.log(info);
//   } catch (error) {
//       console.error(error.message);
//       throw new ServiceUnavailableException(error.message);
//   }
// }



const sendVerificationEmail = async (email, code) => { 
    try {
    const verificationLink = `http://localhost:${PORT}/auth/verify/${code}`;
    const html = `<p>To verify your email please click on <a href="${verificationLink}">link</a></p>`;
      const info = await sgMail.send({from: SENDER, to: email, text: 'Verify your email', subject: 'Email verification', html });    
      console.log(info);
    } catch (error) {
        throw new ServiceUnavailableException(error?.response?.body);
    }
    
}


const sendForgotPasswordEmail = async (email, code) => { 
    try {
    const verificationLink = `http://localhost:${PORT}/auth/verify/${code}`;
    const html = `<p>To verify your email please click on <a href="${verificationLink}">link</a></p>`;
      const info = await sgMail.send({from: SENDER, to: email, text: 'Verify your email', subject: 'Email verification', html });    
      console.log(info);
    } catch (error) {
        throw new ServiceUnavailableException(error?.response?.body);
    }
    
}


module.exports = {sendVerificationEmail, sendForgotPasswordEmail}