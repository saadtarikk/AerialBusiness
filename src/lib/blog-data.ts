export interface Post {
  title: string;
  slug: {
    current: string;
  };
  category: string;
  date: string;
  image: any;
  excerpt: string;
  content?: any;
}

/*
export const posts: Post[] = [
  {
    slug: "the-ultimate-saas-template-for-startups",
    title: "The Ultimate SaaS Template for Startups",
    category: "AI",
    date: "Feb 16, 2025",
    image: "/src/assets/ARTVA54SjmGxUnXYrIR3eezEy0.png",
    excerpt: "Using SaaS for financial management brings a range of benefits. From real-time data insights to enhanced security and easy scalability, SaaS tools are designed to support financial accuracy and business agility."
  },
  {
    slug: "efficient-strategies-for-scaling-your-saas-business",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    category: "SaaS",
    date: "Mar 13, 2025",
    image: "/src/assets/ZR1Iqs0oD39u4eGjMDsbMZWhMY.png",
    excerpt: "Learn proven methodologies and frameworks to scale your SaaS business from startup to enterprise level."
  },
  {
    slug: "why-data-security-is-vital-for-every-saas-platform",
    title: "Why Data Security is Vital for Every SaaS Platform",
    category: "Startup",
    date: "Oct 10, 2024",
    image: "/src/assets/tyw3zK8EGKr3laKc5scgwDmBag.png",
    excerpt: "In an age of data breaches, ensuring the security of your SaaS platform is not just a feature—it's a necessity. Discover the key strategies to protect your users and your business."
  }
];
*/ 