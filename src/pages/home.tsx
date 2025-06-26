import React, { lazy } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import LazyLoad from '@/components/animations/LazyLoad';

const Features = lazy(() => import('@/components/sections/Features'));
const About = lazy(() => import('@/components/sections/About'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Pricing = lazy(() => import('@/components/sections/Pricing'));
const FAQ = lazy(() => import('@/components/sections/FAQ'));
const Footer = lazy(() => import('@/components/sections/Footer'));

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LazyLoad component={Features} />
      <LazyLoad component={About} />
      <LazyLoad component={Testimonials} />
      <LazyLoad component={Pricing} />
      <LazyLoad component={FAQ} />
      <LazyLoad component={Footer} />
    </div>
  );
}
