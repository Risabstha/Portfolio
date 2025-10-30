import { useTheme } from "../stores/ThemeProvider";

interface squareBox {
  className: string;
  width ?: number;
  height ?: number;
  viewBox: string;
}

const SquareBox = ({ className, width, height, viewBox }: squareBox) => {

  const {theme} = useTheme();
  return (
    <div>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}  // viewBox = "0 0 91 59" : yesle left edge remove garxa rw right edge add garxa 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="90" height="90" stroke={theme === "dark" ? "#F3F3F3" : "#0F0F0F" }/>
      </svg>
    </div>
  );
};

export default SquareBox;
