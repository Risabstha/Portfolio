import React, { useState } from "react";
import { useTheme } from "../stores/ThemeProvider";

const InputField: React.FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
   const { theme } = useTheme();

  return (
    <div className="relative w-64 mx-auto pt-10">
      <form>
        <div className="relative">
          <input
            id="ids"
            name="name"
            autoComplete="off"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(value !== "")} // stay up if value not empty
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="
              w-full border border-gray-400  px-2 pt-4 pb-1
              text-base outline-none
              focus:border-blue-500
              
            "
          />

          <label
            htmlFor="ids"
            className={`
              absolute left-4 text-gray-400 pointer-events-none
              transition-all duration-200 ease-in-out
              ${ theme === "dark" ? `bg-[#2d2c2c]` : `bg-[#f2f2f2]`  }
              ${focused
                ? "text-sm -top-2 text-blue-500  px-1"
                : "text-base top-2.5"
              }
            `}
          >
            Enter Name
          </label>
        </div>
      </form>
    </div>
  );
};

export default InputField;
