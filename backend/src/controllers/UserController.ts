import { Request, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
    { name: "João", email: "joao@example.com" }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: "João Gabriel",
                email: "joao@example.com"
            },
            message: {
                subject: "Welcome to the system",
                body: "Welcome to the System, you're requisition has been listened"
            }
        });

        res.send()
    }
};
