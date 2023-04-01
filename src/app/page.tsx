import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { fetchData } from './util/fetchdata';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const data = fetchData();
  return (
    <>
      {
        <ul>
          {data.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      }
    </>
  );
}
