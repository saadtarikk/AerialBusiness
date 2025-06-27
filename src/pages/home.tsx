import { lazy } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import LazyLoad from '@/components/animations/LazyLoad';

const Features = lazy(() => import('@/components/sections/Features'));
const Process = lazy(() => import('@/components/sections/process'));
const About = lazy(() => import('@/components/sections/About'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Blog = lazy(() => import('@/components/sections/Blog'));
const Pricing = lazy(() => import('@/components/sections/Pricing'));
const FAQ = lazy(() => import('@/components/sections/FAQ'));
const Footer = lazy(() => import('@/components/sections/Footer'));

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <LazyLoad component={Features} />
                <LazyLoad component={Process} />
                <LazyLoad component={About} />
                <LazyLoad component={Testimonials} />
                <LazyLoad component={Blog} />
                <LazyLoad component={Pricing} />
                <LazyLoad component={FAQ} />
            </main>
            <Footer />
        </div>
    );
}
