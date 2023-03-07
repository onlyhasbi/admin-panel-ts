import { useCallback, useEffect } from "react";

export function useClickAway(ref, isOpen, callback) {
  const handleClickOutside = useCallback(
    (event) => {
      if (isOpen && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [ref, isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
}
