import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackToTopButton from "./components/ui/BackToTopButton";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "@/components/animations/Loader";

const Home = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const BlogPage = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div />}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/*
          `AnimatePresence` is a crucial component from Framer Motion that allows components to animate out when they are removed from the React tree.
          When `isLoading` becomes `false`, the `Loader` component is unmounted. `AnimatePresence` detects this change and ensures that the `exit` animation defined inside the `Loader` component completes before it is fully removed from the DOM.
        */}
        <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
        
        {/*
          The main content of the application is wrapped in a `motion.div` to control its appearance.
          - The `animate` prop is linked to the loading state. When loading is finished, it transitions to opacity: 1.
          - `initial={{ opacity: 0 }}` sets the starting state to be invisible.
          - This creates a smooth fade-in effect for the page content.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: !isLoading ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <CustomCursor />
          <Toaster />
          <Router />
          <BackToTopButton />
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
