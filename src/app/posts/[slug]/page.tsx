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
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section>
        <div>
          <AiTwotoneCalendar />
          <p>{date.toString()}</p>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
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
