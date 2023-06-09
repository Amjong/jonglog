'use client';
import React from 'react';

export default function Button({ children, handleSubmit }: any) {
  return (
    <button
      onClick={handleSubmit}
      className='bg-yellow-300 rounded-sm font-bold ring-black ring-2 pr-1 pl-1 m-1 scale-110'
    >
      {children}
    </button>
  );
}
