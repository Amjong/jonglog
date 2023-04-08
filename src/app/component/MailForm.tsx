import React from 'react';
import MyForm from './MyForm';
import Button from './Button';

export default function MailForm() {
  return (
    <div className='bg-slate-500 flex flex-col items-center'>
      <h1 className='text-white'>Your Email</h1>
      <MyForm width='300' height='50'></MyForm>
      <h1 className='text-white'>Subject</h1>
      <MyForm width='300' height='50'></MyForm>
      <h1 className='text-white'>Message</h1>
      <MyForm width='300' height='500'></MyForm>
      <Button>Submit</Button>
    </div>
  );
}
