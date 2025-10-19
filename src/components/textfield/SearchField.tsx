import { MagnifyingGlass } from "../../lib/icons/MagnifyingGlass";

const SearchField = (props: React.InputHTMLAttributes<HTMLInputElement> ) => {
  return (
    <div className="relative text-ios-label-secondary">
      <div className="w-56 focus-within:w-64 transition-all duration-300">
        <input
          {...props}
          placeholder="Search"
          className="input shadow-md focus:border-1 bg-ios-primary border-ios-secondary pl-5 pr-10 py-3 rounded-xl w-full outline-none h-12"
          name="search"
          aria-label="Search"
        />
        <MagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SearchField;