import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Profile() {
  return (
    <div>
      <Image
        src={`/images/profile.png`}
        alt='profile img'
        width={200}
        height={200}
        className='rounded-full'
      ></Image>
      <h1 className='text-3xl font-bold'>Hi, I am Jongbum</h1>
      <h2 className='text-2xl text-gray-700 text-center'>
        Zero-stack Engineer
      </h2>
      <h3 className='text-slate-500 text-center'>프론트엔드 꿈나무 종범</h3>
      <div className='flex flex-col items-center mt-1'>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
}
