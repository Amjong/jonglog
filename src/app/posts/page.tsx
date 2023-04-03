import React from 'react';
import { fetchData } from '../util/fetchdata';
import CategoryPost from '../component/CategoryPost';

export default function PostsPage() {
  const data = fetchData();
  return (
    <div className='mt-5'>
      <CategoryPost data={data} />
    </div>
  );
}
