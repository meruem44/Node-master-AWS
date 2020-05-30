import aws from 'aws-sdk';

class SendSMS {
    async send(req, res) {
        console.log(req.sendCell);

        const sns = new aws.SNS({
            accessKeyId: process.env.ID_ACCESS,
            secretAccessKey: process.env.SECRET_KEY,
            region: process.env.REGION_AWS
        });

        await sns.publish(req.sendCell).promise()
            .then(data => {
                return res.json(req.User);
            }).catch(err => {
                return res.json({err: err});
            });


    };
};

export default new SendSMS();