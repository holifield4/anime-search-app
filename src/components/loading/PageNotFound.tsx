import { useNavigate } from "react-router-dom";
import { SadFace } from "../../lib/icons/SadFace";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-ios-label-secondary dark:text-dark-label-2">
      <SadFace />
      <h1 className="text-2xl font-bold">Whoops! Page not found</h1>
      <button
        className="text-ios-blue underline text-sm cursor-pointer"
        type="button"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
    </div>
  );
};

export default PageNotFound;
