import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// Define possible theme types
type Theme = "light" | "dark";

// Define the shape of context value , Yo contextProvider le 'theme' and 'toogleTheme' value send garxa
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with default value as null 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook for convenience 
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Props for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;    // ReactNode --- render anything
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {    // <ThemeProviderProps> = props name
  // Initialize theme from localStorage, default to "light"
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "dark"    // by default dark theme hunxa webapp ko
  );

  // Apply theme to localStorage on change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () : void => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
