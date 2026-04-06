import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.tsx"));
const PestPage = lazy(() => import("./pages/PestPage.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-background"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios/:slug" element={<ServicePage />} />
            <Route path="/plagas/:slug" element={<PestPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
