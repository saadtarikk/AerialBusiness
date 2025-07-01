import { lazy, useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import Header from '@/components/sections/Header';
import BlogPost from '@/components/sections/BlogPost';
import BlogContent from '@/components/sections/BlogContent';
import { client } from '@/lib/sanity';
import NotFound from '@/pages/not-found';
import { Post } from '@/lib/blog-data';

const Footer = lazy(() => import('@/components/sections/Footer'));

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      const query = `*[_type == "post" && slug.current == $slug][0]`;
      const params = { slug };

      client.fetch(query, params).then((data) => {
        setPost(data);
      });
    }
  }, [slug]);

  if (!post) {
    // You might want to show a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <BlogPost 
          title={post.title}
          category={post.category}
          date={post.date}
          image={post.image}
          excerpt={post.excerpt}
        />
        <BlogContent content={post.content} />
      </main>
      <Footer />
    </div>
  );
} 