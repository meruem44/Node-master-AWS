import { sendQueue } from '../lib/queue';

class SendSMS {
    async send(req, res) {
       const { sendCell } = req;

     // Chamar job de sendSMS
     await sendQueue.add({ sendCell });

     res.json({ ok: true });
    };
};

export default new SendSMS();