import Link from 'next/link';
import React from 'react';
import { BsGithub, BsYoutube } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';
import MailForm from '../component/MailForm';

export default function ContactPage() {
  return (
    <div className='flex flex-col items-center h-full'>
      <div className='basis-1/3'>
        <h1 className='font-bold text-3xl'>Contact me</h1>
        <h2 className='m-1'>amjong2@naver.com</h2>
        <div className='flex flex-row space-x-1'>
          <Link href='https://github.com/Amjong/jonglog'>
            <BsGithub className='text-3xl m-1'></BsGithub>
          </Link>
          <Link href='https://velog.io/@amjong2'>
            <FaBlogger className='text-3xl m-1'></FaBlogger>
          </Link>
          <Link href='https://www.youtube.com/channel/UC3wDrNqUI-TiZuBppviqnJA'>
            <BsYoutube className='text-3xl m-1'></BsYoutube>
          </Link>
        </div>
      </div>
      <h1 className='text-3xl font-bold'>Or Send me an email</h1>
      <div className='w-1/3 mt-3 basis-2/3'>
        <MailForm></MailForm>
      </div>
    </div>
  );
}
