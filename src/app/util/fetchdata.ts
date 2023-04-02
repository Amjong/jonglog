import { post } from './../type/post';

const fs = require('fs');

export function fetchData(): post[] {
  return require('public/data/posts.json') as post[];
}

export function fetchTargetPost(path: string): string {
  const post = fs.readFileSync(`public/data/posts/${path}.md`).toString();
  return post;
}

export function fetchTargetImage() {}
