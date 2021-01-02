import React, { useState } from 'react';

const useFormInput = (init = '') => {
  const [input, setinput] = useState(init);

  const changeInput = evt => setinput(evt.target.value);
  const resetInput = () => setinput(init);
  const changeCheckBox = evt => setinput(evt.target.checked);

  return [input, changeInput, resetInput, changeCheckBox];
};

export default useFormInput;
