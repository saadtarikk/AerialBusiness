import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Info, CheckCircle, XCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { containerVariants, itemVariants } from '@/components/animations/variants';
import testimonialAvatar from '@/assets/yIREXkwAthEgTDhWj0Imj3yZ9JA.png';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: `${data.message} (Phone: ${data.phone || 'N/A'})`,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your message has been sent.',
          variant: 'default',
          action: <CheckCircle className="text-green-500" />,
        });
        reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
        action: <XCircle className="text-red-500" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-dark-section relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="glass" className="mb-8">
              Contact us
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-[40px] lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Get in touch with our team
          </motion.h2>
        </motion.div>
        
        <div className="glassmorphism rounded-2xl p-8 md:p-12 lg:p-16 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Side */}
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={itemVariants} className="text-xl text-white/70 leading-relaxed">
                Feel free to reach out - we'd love to connect.
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={itemVariants} className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <Mail className="w-6 h-6 text-aireal-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email us</h3>
                    <a href="mailto:hello@aireal.com" className="text-white/70 hover:text-white transition-colors">
                      hello@aireal.com
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <Info className="w-6 h-6 text-aireal-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Get support</h3>
                    <a href="https://slack.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                      Chat with us
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={itemVariants} 
                className="glassmorphism-card p-8 rounded-2xl border-white/10"
              >
                <p className="text-white/80 italic mb-6">
                  "Aireal AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making"
                </p>
                <div className="flex items-center">
                  <img src={testimonialAvatar} alt="Amber Stone" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-white">Amber Stone</p>
                    <p className="text-sm text-white/60">Manager, GrowthTech</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              className="glassmorphism-card p-8 rounded-2xl border-white/10"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">First Name</label>
                    <Input id="firstName" placeholder="First name" {...register('firstName', { required: true })} />
                    {errors.firstName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">Last Name</label>
                    <Input id="lastName" placeholder="Last name" {...register('lastName', { required: true })} />
                     {errors.lastName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <Input id="email" type="email" placeholder="Your email" {...register('email', { required: true })} />
                  {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="Your phone" {...register('phone')} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <Textarea id="message" placeholder="Write your message" {...register('message', { required: true })} />
                  {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                </div>
                <div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-aireal-purple to-gradient-pink text-white transition-transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>
                </div>
                <p className="text-xs text-white/60 text-center">
                  By submitting this form you agree to our friendly{' '}
                  <a href="/privacy-policy" className="underline hover:text-white">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 