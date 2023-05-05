'use client';
import React, { useCallback, useState } from 'react';
import Button from './Button';
import { mailInfo, sendMail } from '../util/mailer';

export default function MyForm() {
  //   const handleSubmit = useCallback(({ from, to, subject, text }: mailInfo) => {
  //     const info = sendMail({ from, to, subject, text });
  //     console.log(info);
  //   }, []);
  const [mail, setMail] = useState<mailInfo>({
    from: '',
    to: '',
    subject: '',
    text: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMail((mail) => ({
      ...mail,
      [name]: value,
    }));
  };
  return (
    <div className='flex flex-col items-center h-96'>
      <h1 className='text-white'>Your Email</h1>
      <input
        className='w-4/5'
        type='text'
        name='from'
        onChange={handleChange}
      ></input>
      <h1 className='text-white'>Subject</h1>
      <input
        className='w-4/5'
        type='text'
        name='subject'
        onChange={handleChange}
      ></input>
      <h1 className='text-white'>Message</h1>
      <input
        className='w-4/5 h-3/5'
        type='text'
        name='text'
        onChange={handleChange}
      ></input>
      <Button>Submit</Button>
    </div>
  );
}
