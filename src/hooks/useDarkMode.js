import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage"


function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage();
  React.useEffect(() => {
    useLocalStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
}

export default useDarkMode;
