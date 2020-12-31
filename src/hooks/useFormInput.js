import React, { useState } from 'react';

const useFormInput = (init = '') => {
  const [input, setinput] = useState(init);

  const changeInput = evt => setinput(evt.target.value);
  const resetInput = () => setinput(init);

  return [input, changeInput, resetInput];
};

export default useFormInput;
