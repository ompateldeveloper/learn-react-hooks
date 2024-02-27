import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;  
    const [value, setValue] = useState(parsedValue);
    
    const updateValue = (newValue) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    };
  
    return [value, updateValue];
}

export default useLocalStorage;
