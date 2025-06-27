"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const caseStudies = [
  {
    title: "Modernizing a Subscription Management Platform",
    description: "With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.",
    image: "https://framerusercontent.com/images/82V0lDZt5IN8w9i1157kfT8pSU.jpg",
    stats: [
      { label: "Engagement", value: "12 min" },
      { label: "User Satisfaction", value: "4.5*" },
    ],
    link: "#",
    glowColor: "rgb(130, 201, 94)",
  },
  {
    title: "Revamping an E-Commerce Website",
    description: "Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies.",
    image: "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg",
    stats: [
        { label: "Usability", value: "85%" },
        { label: "User Retention", value: "70%" },
    ],
    link: "#",
    glowColor: "rgb(212, 135, 64)",
  },
  {
    title: "Developing a Mobile Health Tracking App",
    description: "Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.",
    image: "https://framerusercontent.com/images/Y1hHthCTPz6YNLIhonp2E5s5WU.jpg",
    stats: [
        { label: "Conversion Rate", value: "12%" },
        { label: "User Satisfaction", value: "4.8*" },
    ],
    link: "#",
    glowColor: "rgb(186, 138, 214)",
  },
  {
    title: "Optimizing a Corporate Intranet",
    description: "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
    image: "https://framerusercontent.com/images/UlzZi7Dd7txMrOquJLbf9wyEiig.jpg",
    stats: [
        { label: "Conversion Rate", value: "20%" },
        { label: "User Satisfaction", value: "95%" },
    ],
    link: "#",
    glowColor: "rgb(15, 100, 153)",
    buttonText: "Coming Soon",
    buttonDisabled: true,
  },
];

export default function CaseStudies() {
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  if (isMobile) {
    return (
      <section className="bg-black p-4">
        <div className="space-y-8">
          {caseStudies.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {caseStudies.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: typeof caseStudies[0] }) => {
    return (
        <div
            key={card.title}
            className="group relative h-auto md:h-[450px] w-full md:w-[800px] overflow-hidden bg-neutral-900 border border-white/10 rounded-2xl"
        >
            <div 
                style={{ backgroundColor: card.glowColor, opacity: 0.15, filter: 'blur(100px)' }}
                className="absolute inset-0 z-0 transition-all duration-300"
            ></div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-neutral-400">{card.description}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8">
                    <a
                        href={card.link}
                        className={`w-full md:w-auto text-center px-6 py-2 rounded-full text-white ${card.buttonDisabled ? 'bg-neutral-700 opacity-50 cursor-not-allowed' : 'bg-neutral-800 border border-white/20 hover:bg-neutral-700'} transition-colors mb-4 md:mb-0`}
                        aria-disabled={card.buttonDisabled}
                        onClick={(e) => card.buttonDisabled && e.preventDefault()}
                    >
                        {card.buttonText || 'View case study'}
                    </a>
                    <div className="flex gap-8 w-full justify-between md:w-auto">
                        {card.stats.map(stat => (
                            <div key={stat.label} className="text-right">
                                <p className="text-neutral-400 text-sm">{stat.label}</p>
                                <p className="text-white text-xl font-semibold">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        </div>
    )
} 