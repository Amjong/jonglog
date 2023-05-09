'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';
import { mailInfo } from '../util/mailer';
import { requestEmail } from '../util/contact';

type Banner = {
  message: string;
  state: string;
};
export default function MyForm() {
  const [mail, setMail] = useState<mailInfo>({
    from: '',
    to: '',
    subject: '',
    text: '',
  });
  const [banner, setBanner] = useState<Banner | null>(null);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = requestEmail(mail)
      .then((data) => {
        console.log(data);
        setBanner({
          message: '메시지 전송에 성공했습니다.',
          state: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
        setBanner({
          message: '메시지 전송에 실패했습니다.',
          state: 'failed',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMail((mail) => ({
      ...mail,
      [name]: value,
    }));
  };
  return (
    <div>
      {banner && <div>{banner.message}</div>}
      <form className='flex flex-col items-center h-96'>
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
        <Button handleSubmit={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}
