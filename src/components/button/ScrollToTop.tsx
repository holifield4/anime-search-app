type ScrollToTopProps = {
  onClick: () => void;
  showScrollTop: boolean;
};

const ScrollToTop = ({ onClick, showScrollTop }: ScrollToTopProps) => {
  return (
    <button
      onClick={onClick}
      className={`
            fixed bottom-15 right-8 z-50
            w-12 h-12 rounded-full
            bg-ios-blue
            shadow-md
            dark:shadow-sm
            shadow-ios-secondary
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:bg-ios-blue/80
            active:scale-95
            focus:outline-none
            flex items-center justify-center
            cursor-pointer
            ${
              showScrollTop
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-50 pointer-events-none"
            }
          `}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;