import { useTheme } from "../stores/ThemeProvider";

interface button {
  types: "submit" | "reset" | "button";
  value: string;
  onSubmit : (event: React.FormEvent<HTMLFormElement>) => void;
}
const Button: React.FC<button> = ({ types, value , onSubmit}) => {
  const { theme } = useTheme();
  return (
    <div className="m-auto">
      <button
        className={`border-2  inline px-4 py-1.5 ${
          theme === "dark"
            ? "border-[#C778DD] hover:text-[#C778DD]"
            : "brder-[#a840c5] hover:text-[#a840c5]"
        }`}
        type={types}
        onSubmit={onSubmit}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
