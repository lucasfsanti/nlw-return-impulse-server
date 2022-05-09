import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "55b1a6754ddf3a",
        pass: "bf9ada5aaf740f"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Feedback Widget <feedback_widget@feedback.com>',
            to: 'Lucas Santiago <lucasfsanti@gmail.com>',
            subject,
            html: body
        })
    }
}
