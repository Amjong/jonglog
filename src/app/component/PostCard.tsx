'use client';

import React from 'react';
import { post } from '../type/post';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({
  title,
  description,
  date,
  category,
  path,
}: post) {
  return (
    <li className='border shadow-lg hover:shadow-xl hover:scale-105 hover:ease-in duration-200'>
      <Link href={`./posts/${path}`}>
        <Image
          src={`/images/posts/${path}.png`}
          alt='post image'
          width={500}
          height={500}
        />
        <div>
          <h3 className='text-right text-slate-500 pr-1'>{date}</h3>
          <h1 className='text-2xl font-bold text-center pt-1'>{title}</h1>
          <h2 className='text-slate-600 text-center'>{description}</h2>
          <div className='flex flex-col items-center pt-1 pb-2'>
            <h1 className='bg-green-200 w-1/5 h-1/5 text-center text-gray'>
              {category}
            </h1>
          </div>
        </div>
      </Link>
    </li>
  );
}
