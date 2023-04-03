import { MarkdownView } from '@/app/component/MarkdownView';
import { fetchData, fetchTargetPost } from '@/app/util/fetchdata';

const data = fetchData();

type Props = {
  params: {
    slug: string;
  };
};

export default function PostsDetailPage(props: Props) {
  const TargetPost = data.find((post) => {
    if (post.path === props.params.slug) {
      return post;
    }
  });
  const TargetMd = TargetPost && fetchTargetPost(TargetPost.path);
  return (
    <div className='markdown-body'>
      <div>{TargetMd && <MarkdownView post={TargetMd} />}</div>
    </div>
  );
}

export function generateStaticParams() {
  return data.map((post) => ({
    slug: post.path,
  }));
}
