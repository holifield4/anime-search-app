interface BadgeProps {
  label: string | number | null;
  rounded?: boolean;
}

const Badge = ({ label, rounded = false }: BadgeProps) => {
  if (label === null) return;
  return (
    <div
      className={`w-fit px-4 text-md ${
        rounded
          ? "bg-ios-blue-2 text-blue-100"
          : "bg-ios-label-primary text-ios-primary dark:bg-dark-label dark:text-dark-primary"
      }  ${rounded && "rounded-full"} transition-colors`}
    >
      <span>{label}</span>
    </div>
  );
};

export default Badge;
