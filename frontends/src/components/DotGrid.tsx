import { useTheme } from "../stores/ThemeProvider";

interface dotGrid {
    length : number;
    className : string;
}

// React.FC<dotGrid> ko alternative
const DotGrid = ({length, className}: dotGrid) => {
    const {theme} = useTheme();
  return (
    <div
      className={className}
    >
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          className={`w-1 h-1  rounded-full  ${
            theme === "dark" ? "bg-[#F3F3F3]" : "bg-[#0F0F0F]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default DotGrid;
