import React from 'react';
import Profile from '../component/Profile';

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center'>
      <section className='flex flex-col items-center'>
        <Profile></Profile>
      </section>
      <section className='flex flex-col items-center mt-10 bg-slate-200 w-4/5'>
        <h1 className='font-bold text-2xl gap-1 mb-3'>Who am I?</h1>
        <h2 className='gap-1'>나는야 종범</h2>
        <h1 className='font-bold text-2xl gap-1 mb-3 mt-1'>Career</h1>
        <h2 className='gap-1'>삼성전자 생활가전사업부 (2020~ Now)</h2>
        <h1 className='font-bold text-2xl gap-1 mb-3 mt-1'>Skills</h1>
        <h2 className='gap-1'> C, JavaScript, TypeScript </h2>
        <h2 className='gap-1'> React, Next.js</h2>
        <h2 className='gap-1'> Git, Clean Code</h2>
        <h2 className='gap-1'> VSCode </h2>
      </section>
    </div>
  );
}
