import { post } from './../type/post';

export function fetchData(): post[] {
  return require('public/data/posts.json') as post[];
}
