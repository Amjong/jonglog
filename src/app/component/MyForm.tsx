'use client';
import React, { useState } from 'react';

export default function MyForm({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <input
      width={width}
      height={height}
      type='text'
      value={text}
      onChange={handleChange}
    ></input>
  );
}
