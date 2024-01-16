import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT ,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });

      const { email, nombre, token } = datos 
      //Enviar el email
      const info = await transport.sendMail({
        from: 'APV - Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Comprobar cuenta',
        text: 'Comprobar cuenta',
        html: `<p>Hola ${nombre}! Comprueba tu cuenta en APV.</p>
        <p>Tu cuenta ya está lista. Solo debes comprobarla en el siguiente enlace: <a href='${process.env.FRONTEND_URL}/confirm/${token}'>Comprobar Cuenta</a>
        </p>
        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`
      })

      console.log('mensaje enviado: %s', info.messageId)
}

export default emailOlvidePassword