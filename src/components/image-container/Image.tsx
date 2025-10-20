interface ImageProps {
  source?: string;
}

const Image = ({ source = "" }: ImageProps) => {
  return (
    <div className={`w-3/4 md:w-60 h-full overflow-hidden border-2 border-ios-label-primary dark:border-dark-label-2 shadow-xs shadow-ios-label-secondary transition-colors`}>
      <img
        src={source}
        alt={source}
        className={`w-full object-cover`}
        loading="lazy"
      />
    </div>
  );
};

export default Image;
