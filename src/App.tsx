import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackToTopButton from "./components/ui/BackToTopButton";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const BlogPage = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Router />
        <BackToTopButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
