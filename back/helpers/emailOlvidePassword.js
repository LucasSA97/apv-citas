import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
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
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html: `<p>Hola ${nombre}! Has solicitado reestablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password: <a href='${process.env.FRONTEND_URL}/lost-password/${token}'>Reestablecer Password</a>
        </p>
        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`
      })

      console.log('mensaje enviado: %s', info.messageId)
}

export default emailRegistro