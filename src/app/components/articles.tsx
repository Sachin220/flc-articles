import '../globals.css';
import Link from 'next/link';
import React from 'react';

interface ArticleProps {
  posts: Array<{ id: number; title: string; slug: string }>;
}

const Articles: React.FC<ArticleProps> = ({ posts }) => {
  return (
    <>
      <section>
        <h2 className="sectionTitle">Recent Articles</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/articles/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Articles;