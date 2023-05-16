import { useState, useEffect, useCallback } from "react";

function useCopyToClipboard() {
  const [isCopy, setIsCopy] = useState(false);

  const copy = useCallback((text) => {
    if (typeof text != "string") return;

    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopy(true);
      })
      .catch((err) => {
        console.error("Не удалось скопировать текст: ", err);
      });
  }, []);

  useEffect(() => {
    if (isCopy) {
      const timer = setTimeout(() => {
        setIsCopy(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopy]);

  return [isCopy, copy]
}

export default useCopyToClipboard;
