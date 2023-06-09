'use client';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import Image from 'next/image';

interface MarkdownViewProps {
  post: string;
}

export const MarkdownView = ({ post }: MarkdownViewProps) => {
  return (
    <ReactMarkdown
      className='prose lg:prose-xl max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='w-full max-h-60 object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {post}
    </ReactMarkdown>
  );
};
