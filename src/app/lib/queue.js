import Queue from 'bull';
import redisConfig from '../../config/redis';

import RegistrationMail from '../jobs/RegistrationMail';
import SendSMS from '../jobs/SendSMS';

export const mailQueue = new Queue(RegistrationMail.key, redisConfig);
export const sendQueue = new Queue(SendSMS.key, redisConfig);

