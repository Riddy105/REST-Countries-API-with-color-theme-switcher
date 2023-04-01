import { createContext, useState } from "react";
import Header from "./Header";
import Main from "./Main/Main";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ themeToggler }}>
      <div className={theme}>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
