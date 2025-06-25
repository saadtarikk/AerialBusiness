export const COMPANY_INFO = {
  name: 'Aireal',
  tagline: 'AI-powered Customer Service Platform',
  address: '105 North 1st Street, #28, San Jose, CA 94748',
  email: 'hello@aireal.com',
  phone: '+1 (555) 123-4567'
};

export const NAVIGATION_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' }
];

export const SOCIAL_LINKS = [
  { href: '#', icon: 'Facebook', label: 'Facebook' },
  { href: '#', icon: 'Twitter', label: 'Twitter' },
  { href: '#', icon: 'Instagram', label: 'Instagram' },
  { href: '#', icon: 'Linkedin', label: 'LinkedIn' }
];

export const FEATURES = [
  {
    icon: 'Bot',
    title: 'AI-Powered Responses',
    description: 'Advanced natural language processing delivers instant, accurate responses to customer inquiries 24/7.'
  },
  {
    icon: 'TrendingUp',
    title: 'Smart Analytics',
    description: 'Comprehensive insights and reporting to optimize your customer service performance and satisfaction.'
  },
  {
    icon: 'Users',
    title: 'Multi-Channel Support',
    description: 'Seamless integration across email, chat, social media, and phone for unified customer experiences.'
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
  },
  {
    icon: 'Settings',
    title: 'Easy Integration',
    description: 'Simple API integration with your existing tools and workflows for seamless deployment.'
  },
  {
    icon: 'Clock',
    title: '24/7 Availability',
    description: 'Never miss a customer inquiry with round-the-clock AI assistance and human agent backup.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    text: 'Aireal transformed our customer service completely. Response times dropped by 60% and customer satisfaction is at an all-time high.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    role: 'CTO, Innovation Labs',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    text: 'The AI capabilities are incredible. It handles complex queries with ease and learns from every interaction.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'VP Operations, ScaleUp',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    text: 'Integration was seamless and the results were immediate. Our team can now focus on complex issues while AI handles routine queries.',
    rating: 5
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses',
    features: [
      'Up to 1,000 conversations/month',
      'Basic AI responses',
      'Email support',
      'Analytics dashboard'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 99,
    description: 'For growing businesses',
    features: [
      'Up to 10,000 conversations/month',
      'Advanced AI with learning',
      'Priority support',
      'Multi-channel integration',
      'Custom branding'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'For large organizations',
    features: [
      'Unlimited conversations',
      'Custom AI training',
      'Dedicated account manager',
      'Advanced security',
      'API access'
    ],
    popular: false
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How does the AI learn about my business?',
    answer: 'Our AI system learns from your existing knowledge base, support tickets, and customer interactions. You can also train it with custom responses and industry-specific information to ensure accurate and relevant answers for your customers.'
  },
  {
    question: 'Can I integrate with my existing customer service tools?',
    answer: 'Yes, Aireal integrates seamlessly with popular platforms like Zendesk, Salesforce, Intercom, and many others. Our API also allows for custom integrations with your existing tools and workflows.'
  },
  {
    question: 'What happens when the AI can\'t answer a question?',
    answer: 'When the AI confidence level is low or the query is too complex, it automatically escalates to your human agents. The handoff is seamless and includes full conversation context, ensuring customers don\'t have to repeat themselves.'
  },
  {
    question: 'Is my customer data secure?',
    answer: 'Absolutely. We use bank-level encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is processed securely and never shared with third parties.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most customers are up and running within 24 hours. Our onboarding team will help you set up integrations, train the AI with your specific content, and ensure everything is working perfectly before you go live.'
  }
];
