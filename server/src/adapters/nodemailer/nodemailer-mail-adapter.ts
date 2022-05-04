import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e5564e91f8f4f7",
      pass: "06843ee1e0bdf8"
    }
  });



export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({body, subject}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'GeekWx <geekwx@gmail.com>',
        subject,
        html: body
    });

    };
}