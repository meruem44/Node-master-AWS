import 'dotenv/config';

import Queue from './app/lib/queue';

Queue.process();

//import { mailQueue, sendQueue } from './app/lib/queue';

//import RegistrationMail from './app/jobs/RegistrationMail';
//import SendSMS from './app/jobs/SendSMS';

//mailQueue.process(RegistrationMail.handle);
//sendQueue.process(SendSMS.handle);

//mailQueue.on('failed', (job) => {
//   console.log('Job Faild', job.name);
//});
