'use client';
import React, { useCallback, useState } from 'react';
import PostCard from './PostCard';
import CategoryBtn from './CategoryBtn';
import { post } from '../type/post';

const categories = [
  'All posts',
  'my story',
  'frontend',
  'backend',
  'javascript',
];

export default function CategoryPost({ data }: { data: post[] }) {
  const [selected, setSelected] = useState('All posts');
  const handleClick = useCallback((value: string) => {
    setSelected(value);
  }, []);
  return (
    <div className='flex flex-row'>
      <section className='basis-3/4'>
        <ul className='ml-10 mr-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
          {data.map(({ title, description, date, category, path }, index) => {
            if (selected === categories[0] || selected === category) {
              return (
                <PostCard
                  key={index}
                  featured={true}
                  title={title}
                  description={description}
                  date={date}
                  category={category}
                  path={path}
                />
              );
            }
          })}
        </ul>
      </section>
      <section className='basis-1/4 text-center'>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <ul>
          {categories.map((category, index) => (
            <CategoryBtn key={index} text={category} onClick={handleClick} />
          ))}
        </ul>
      </section>
    </div>
  );
}
