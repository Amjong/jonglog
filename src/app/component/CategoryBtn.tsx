'use client';
import React from 'react';

export default function CategoryBtn({ text, onClick }) {
  return (
    <div
      className='cursor-pointer text-slate-500 hover:text-blue-500'
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </div>
  );
}
