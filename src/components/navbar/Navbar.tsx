import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import ThemeToggle from "../button/ThemeToggle";
import { changeTheme } from "../../store/theme/theme.slice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="w-full h-20 text-3xl md:text-4xl font-bold tracking-widest select-none text-ios-label-primary dark:text-dark-label flex items-center justify-between px-10 dark:bg-dark-primary bg-ios-cyan drop-shadow-lg border-b border-ios-secondary dark:border-dark-label transition-colors">
      <button
        className="cursor-pointer text-shadow-sm text-shadow-ios-secondary dark:text-shadow-dark-secondary"
        type="button"
        onClick={() => navigate("/")}
      >
        Anime List
      </button>
      <ThemeToggle
        checked={theme.darkMode}
        onChange={() => dispatch(changeTheme(!theme.darkMode))}
      />
    </nav>
  );
};

export default Navbar;
