import Queue from '../lib/queue';

class SendSMS {
    async send(req, res) {
       const { sendCell } = req;

     // Chamar job de sendSMS
     await Queue.add('SendSMS',{ sendCell });

     res.json({ ok: true });
    };
};

export default new SendSMS();