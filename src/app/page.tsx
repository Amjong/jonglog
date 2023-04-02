import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { fetchData } from './util/fetchdata';
import PostCard from './component/PostCard';
import Profile from './component/Profile';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const data = fetchData();
  return (
    <>
      <section className='flex flex-col items-center'>
        <Profile></Profile>
      </section>
      <section>
        <h1 className='font-bold text-2xl ml-10'>Featured Post</h1>
        <ul className='ml-10 mr-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
          {data.map(
            ({ title, description, date, category, path, featured }, index) => {
              if (featured) {
                return (
                  <PostCard
                    key={index}
                    featured={featured}
                    title={title}
                    description={description}
                    date={date}
                    category={category}
                    path={path}
                  />
                );
              }
            }
          )}
        </ul>
      </section>
      <section>
        <h1 className='font-bold text-2xl'> You may like </h1>
      </section>
    </>
  );
}
