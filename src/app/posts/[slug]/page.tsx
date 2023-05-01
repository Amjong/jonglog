import { MarkdownView } from '@/app/component/MarkdownView';
import { post } from '@/app/type/post';
import { fetchData, fetchTargetPost } from '@/app/util/fetchdata';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';
const data = fetchData();

type Props = {
  params: {
    slug: string;
  };
};

export default function PostsDetailPage(props: Props) {
  const { title, path, date, description } = data.find((post) => {
    if (post.path === props.params.slug) {
      return post;
    }
  }) as post;
  const TargetMd = fetchTargetPost(path);
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className='flex flex-col p-4'>
        <div className='flex items-center self-end text-sky-600'>
          <AiTwotoneCalendar />
          <p className='font-semibold ml-2'>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='w-44 border-2 border-sky-600 mt-4 mb-8'></div>
        <MarkdownView post={TargetMd} />
      </section>
    </article>
  );
}

export function generateStaticParams() {
  return data.map((post) => ({
    slug: post.path,
  }));
}
