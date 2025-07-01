import { PortableText } from '@portabletext/react'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/animations/variants';

export default function BlogContent({ content }: { content: any }) {
  return (
    <section className="py-16 bg-black relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <div className="prose prose-invert prose-lg max-w-none">
              <PortableText value={content} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 