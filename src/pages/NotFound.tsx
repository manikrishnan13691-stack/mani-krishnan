import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-display text-8xl font-bold text-gradient">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
          <a
            href="/"
            className="inline-block rounded-full border border-border px-8 py-3 font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
