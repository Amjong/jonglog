'use client';
import React, { ChangeEvent, useCallback, useState } from 'react';
import Button from './Button';
import { mailInfo, sendMail } from '../util/mailer';

export default function MyForm() {
  const [mail, setMail] = useState<mailInfo>({
    from: '',
    to: '',
    subject: '',
    text: '',
  });
  async function handleSubmit() {
    const res = await fetch('/api/mailer', {
      method: 'POST',
      body: JSON.stringify(mail),
    });
    console.log(res);
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMail((mail) => ({
      ...mail,
      [name]: value,
    }));
  };
  return (
    <form className='flex flex-col items-center h-96' action='/api/mailer'>
      <h1 className='text-white'>Your Email</h1>
      <input
        className='w-4/5'
        type='text'
        name='from'
        onChange={handleChange}
      ></input>
      <h1 className='text-white'>To</h1>
      <input
        className='w-4/5'
        type='text'
        name='to'
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
    </form>
  );
}
