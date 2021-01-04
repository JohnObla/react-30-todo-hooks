import React, { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultVal) => {
  const init = JSON.parse(localStorage.getItem(key)) || defaultVal;
  const [state, setState] = useState(init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorageState;
