import { useTheme } from "../stores/ThemeProvider";

interface button {
  types: "submit" | "reset" | "button";
  value: string;
  disabled?: boolean;
}
const Button: React.FC<button> = ({ types, value , disabled}) => {
  const { theme } = useTheme();
  return (
    <div className="m-auto">
      <button
        className={`border-2  inline px-4 py-1.5 cursor-pointer ${
          theme === "dark"
            ? "border-[#C778DD] hover:text-[#C778DD]"
            : "border-[#a840c5] hover:text-[#a840c5]"
        }`}
        type={types}
        disabled={disabled}
        
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
