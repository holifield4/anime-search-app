const LoadingIndicator = () => {
  return (
    <div className="size-full flex flex-col justify-center items-center animate-pulse text-ios-label-secondary dark:text-dark-label-2">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-ios-label-secondary dark:bg-dark-label-2 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-ios-label-secondary dark:bg-dark-label-2 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-ios-label-secondary dark:bg-dark-label-2 animate-bounce [animation-delay:-.5s]"></div>
      </div>
      <span>Loading</span>
    </div>
  );
};

export default LoadingIndicator;
