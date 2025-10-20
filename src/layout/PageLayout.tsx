import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/button/ScrollToTop";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop } = contentRef.current;
      setShowScrollTop(scrollTop > 100);
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
      return () => contentElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
      setShowScrollTop(false);
    }
  }, [location]);

  return (
    <div className={`w-full h-[100dvh] flex flex-col overflow-hidden font-inter`}>
      <Navbar />
      <div
        ref={contentRef}
        className="flex-1 overflow-auto bg-[url('/src/assets/bg.svg')] relative dark:bg-[url('/src/assets/darkbg.svg')] bg-cover bg-no-repeat transition-all"
      >
        {children}
        <ScrollToTop onClick={scrollToTop} showScrollTop={showScrollTop} />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
