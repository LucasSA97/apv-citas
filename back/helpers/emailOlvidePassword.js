import nodemailer from 'nodemailer';

const emailRegistro = () => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "a7fb0d04542dd4",
          pass: "********dfff"
        }
      });
}

export default emailRegistro