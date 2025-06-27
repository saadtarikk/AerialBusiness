import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackToTopButton from "./components/ui/BackToTopButton";
import CustomCursor from "./components/CustomCursor";

const Home = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
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
