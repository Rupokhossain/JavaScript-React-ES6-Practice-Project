
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {

  const getStoredValue = () => {
    const savedData = localStorage.getItem(key);
  
    return savedData ? JSON.parse(savedData) : initialValue;
  };

  // ২. state declar
  const [value, setValue] = useState(getStoredValue);

  // ৩. value change hole storage a auto save hobe
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;