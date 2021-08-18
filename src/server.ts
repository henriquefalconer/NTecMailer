import nodemailer from 'nodemailer';
import cron from 'node-cron';
import dotenv from 'dotenv';

dotenv.config();

const mailOptions = {
  from: process.env.EMAIL,
  to: 'contasntec@polijunior.com.br',
  subject: 'Teste',
  text: 'Este é um teste',
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL, pass: process.env.PASS },
});

const mailService = () => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
};

cron.schedule('* * * * *', mailService);
