import { RefObject, useCallback, useEffect } from "react";

export function useClickAway(
  ref: RefObject<HTMLElement>,
  isOpen: boolean,
  callback: () => void
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (isOpen && !ref.current?.contains(event.target as Node)) {
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
