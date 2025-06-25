'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 50])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const charVariants = {
    hidden: { opacity: 0, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.1, ease: 'easeOut' }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 2 }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 5,
      transition: { duration: 0.8, ease: 'easeOut', delay: 2.2 }
    }
  }

  // Title words
  const titleWords = ['The', 'AI-powered', 'Customer', 'Service', 'Platform']

  // Description text split into characters
  const description = "Aireal helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease."
  const descriptionChars = description.split('')

  return (
    <header className="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-2xl min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-2xl">
        <Image
          src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png"
          alt="Sky background"
          fill
          className="object-cover rounded-2xl"
          priority
          sizes="min(100vw, 1920px)"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 rounded-2xl" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-6xl mx-auto px-10 py-20 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 bg-white/20 backdrop-blur-md rounded-full shadow-lg"
          >
            <svg className="w-4 h-4 flex-shrink-0 fill-black" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="6" fill="currentColor" />
            </svg>
            <p className="text-sm font-medium text-primary">
              business &amp; solution
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight text-primary">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2 sm:mr-3"
                custom={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p className="text-lg lg:text-xl font-normal leading-relaxed text-primary max-w-3xl">
            {descriptionChars.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                custom={index}
                className="inline-block"
                style={{ 
                  whiteSpace: char === ' ' ? 'pre' : 'normal' 
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.8 + (index * 0.02)
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-lg backdrop-blur-md shadow-lg border-0 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
              >
                <span className="relative z-10">Get Started</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="mailto:someone@yoursite.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/26 text-primary font-medium rounded-lg backdrop-blur-md shadow-md border border-white transition-all duration-300 hover:bg-white/40 hover:shadow-lg"
              >
                <span className="relative z-10">Book a Demo</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            className="w-full max-w-4xl mt-12 lg:mt-16"
          >
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ 
                y,
                perspective: '1000px',
                rotateX: '5deg'
              }}
              whileHover={{
                rotateX: '0deg',
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://framerusercontent.com/images/YgUzdX0IbuuAdlAK9HhOXgkq8.png"
                alt="Aireal Dashboard Preview"
                width={1748}
                height={1241}
                className="w-full h-auto rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

export default Hero 