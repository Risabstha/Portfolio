import React, { useState } from "react";
import { useTheme } from "../stores/ThemeProvider";

interface inputs {
  type: string;
  id: string;
  name: string;
  value : string;
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholders: string;
}
const InputField: React.FC<inputs> = ({ type, id, name, value, placeholders, onChange  }) => {
  const [focused, setFocused] = useState<boolean>(false);
  // const [value, setValue] = useState<string>("");
  const { theme } = useTheme();

  return (
    <div className="relative pt-0">
      <form>
        <div className="relative">
          <input
            type={type}
            id={id}
            name={name}
            autoComplete="off"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(value !== "")} // stay up if value not empty
            value={value}
            onChange={onChange}
            className={`
              w-full border-2 ${theme === "dark" ? "" : ""}  px-2 pt-4 pb-1
              text-base outline-none
              ${
                theme === "dark"
                  ? "border-gray-400 focus:border-[#C778DD] "
                  : "border-gray-600 focus:border-[#a840c5]"
              }
              `}
          />

          <label
            htmlFor={id}
            className={`
              absolute left-4 pointer-events-none
              transition-all duration-200 ease-in-out
              ${theme === "dark" ? `bg-[#2d2c2c]` : `bg-[#f2f2f2]`}
              ${
                focused
                  ? ` ${
                      theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                    } text-sm -top-2 px-1`
                  : `  top-[0.66rem] px-2 text-[1.05rem]`
              }
            `}
          >
            {placeholders}
          </label>
        </div>
      </form>
    </div>
  );
};

export default InputField;
