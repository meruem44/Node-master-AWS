import aws from 'aws-sdk';

export default {
    key: 'SendSMS',
    async handle({ data }) {
        const { sendCell, res } = data;

        const sns = new aws.SNS({
            accessKeyId: process.env.ID_ACCESS,
            secretAccessKey: process.env.SECRET_KEY,
            region: process.env.REGION_AWS
        });

        await sns.publish(sendCell).promise();

    },
};