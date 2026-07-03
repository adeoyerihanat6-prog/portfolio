import  { createContext, useState, useEffect } from 'react'

export let ThemeContext = createContext();

const MyContext = ({ children }) => {

  let [themeChoice, setThemeChoice] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });

  let toggleTheme = () => setThemeChoice(prev => !prev);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeChoice));
  }, [themeChoice]);

  return (
    <ThemeContext.Provider value={{ themeChoice, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default MyContext