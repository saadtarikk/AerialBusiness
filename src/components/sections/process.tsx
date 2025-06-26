import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useRef } from 'react';

const processSteps = [
  {
    title: 'Seamless Data Integration Process',
    description: 'Effortlessly connect with diverse data sources, ensuring smooth data flow for real-time insights and accurate analysis.',
    features: [
      'Unified Data Connections',
      'Real-Time Data Syncing',
      'Flexible API Integrations',
    ],
    image: 'https://framerusercontent.com/images/zaEX044MBN67y0sSyvg21mfrYU.png',
  },
  {
    title: 'Advanced AI-Powered Analytics Tools',
    description: 'Leverage intelligent analytics to uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.',
    features: [
      'Accurate Trend Forecasting',
      'Dynamic Insightful Dashboards',
      'AI-Driven Data Metrics',
    ],
    image: 'https://framerusercontent.com/images/yoQLPHY6sswtNCidh6OzhKa3mqU.png',
  },
  {
    title: 'Intelligent Automation Workflow Engine',
    description: 'Automate repetitive tasks, optimize workflows, and boost productivity with smart, AI-powered automation capabilities.',
    features: [
      'Streamlined Workflow Automation',
      'Efficient Task Optimization',
      'Smart Trigger Functions',
    ],
    image: 'https://framerusercontent.com/images/NLzFdcV0j5wsySA9BJOoXnGs.png',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const ProcessStepCard = ({ step, index }: { step: (typeof processSteps)[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
  
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <Card className="glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8 grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{step.description}</p>
                    <ul className="space-y-4">
                        {step.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-lg">
                            <CheckCircle className="w-6 h-6 text-gradient-purple mr-4 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-lg overflow-hidden aspect-[4/3]">
                   <motion.img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                        style={{ y }}
                    />
                </div>
            </CardContent>
        </Card>
      </motion.div>
    );
  }

export default function Process() {
  return (
    <section id="process" className="py-32 bg-dark-section overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="glass" className="mb-8">
                Product Overview
            </Badge>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-[40px] lg:text-6xl font-medium text-foreground mb-8 leading-[1.1]">
            Explore the Power of{' '}
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              Fluence AI
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how Fluence AI transforms raw data into actionable insights. Our advanced features are designed to optimize workflows.
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
            <div className="w-full max-w-6xl space-y-16">
                {processSteps.map((step, index) => (
                    <ProcessStepCard key={index} step={step} index={index} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}