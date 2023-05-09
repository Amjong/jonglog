'use strict';

export type mailInfo = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
};

const nodemailer = require('nodemailer');

let isAlreadyCreated = false;
let testAccount;
let transporter;

async function initialSetting() {
  testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  isAlreadyCreated = true;
}

export async function sendMail({ from, to, subject, text }: mailInfo) {
  if (!isAlreadyCreated) {
    await initialSetting();
  }
  return transporter.sendMail({ from, to, subject, text });
}
