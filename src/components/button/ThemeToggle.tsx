import { Moon } from "../../lib/icons/Moon";
import { Sun } from "../../lib/icons/Sun";

interface ThemeToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ThemeToggle = ({ checked, onChange }: ThemeToggleProps) => {
  return (
    <label className="inline-flex items-center relative cursor-pointer">
      <input
        className="peer hidden"
        id="toggle"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="relative w-[60px] h-[30px] bg-ios-primary peer-checked:bg-dark-secondary rounded-full after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:border after:border-ios-secondary peer-checked:after:bg-dark-primary after:rounded-full after:top-[5px] after:left-[5px] peer-checked:after:left-[35px] shadow-sm duration-300 after:duration-300 after:shadow-md transition-all"></div>{" "}
      <Sun />
      <Moon />
    </label>
  );
};

export default ThemeToggle;
