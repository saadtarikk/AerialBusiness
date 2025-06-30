import { lazy } from 'react';
import Header from '@/components/sections/Header';
import BlogPost from '@/components/sections/BlogPost';
import BlogContent from '@/components/sections/BlogContent';

const Footer = lazy(() => import('@/components/sections/Footer'));

export default function BlogPostPage() {
  // Blog post data - this would normally come from a CMS or API
  const blogPostData = {
    title: "Efficient Strategies for Scaling Your SaaS Business",
    category: "Business",
    date: "Mar 13, 2025",
    image: "/src/assets/ZR1Iqs0oD39u4eGjMDsbMZWhMY.png",
    excerpt: "Learn proven methodologies and frameworks to scale your SaaS business from startup to enterprise level."
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <BlogPost 
          title={blogPostData.title}
          category={blogPostData.category}
          date={blogPostData.date}
          image={blogPostData.image}
          excerpt={blogPostData.excerpt}
        />
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
} 