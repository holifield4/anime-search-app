import { SadFace } from "../../lib/icons/SadFace";

const NotFound = () => {
  return (
    <div className="size-full flex flex-col items-center justify-center text-ios-label-secondary dark:text-dark-label-2 text-sm">
      <SadFace />
      <span>No Result Found</span>
    </div>
  );
};

export default NotFound;
