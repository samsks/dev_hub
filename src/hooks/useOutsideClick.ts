import { useEffect, useRef } from "react";

export const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutClick = (event) => {
      const target = event.target;
      !ref.current.contains(target) && callback();
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return ref;
};
