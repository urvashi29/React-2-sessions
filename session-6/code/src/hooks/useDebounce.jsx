import React, { useEffect, useState } from "react";

const useDebounce = (value, delay = 1000) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value));
    return () => clearInterval(timer);
  }, [value, delay]);

  return debounced;
};

export default useDebounce;

// function Debounce(func, delay) {
//   let timeoutId;

//   return function () {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this);
//     }, delay);
//   };
// }

// export default Debounce
