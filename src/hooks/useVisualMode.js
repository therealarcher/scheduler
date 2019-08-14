import { useState } from "react";

const useVisualMode = initialMode => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  return {
    mode,
    transition: (newMode, replace) => {
      setMode(newMode);
      if (replace) {
        const [, ...restHistory] = history;
        setHistory([newMode, ...restHistory]);
      } else {
        setHistory([newMode, ...history]);
      }
    },
    back: () => {
      if (history.length === 1) return;

      const [, ...restHistory] = history;
      setMode(restHistory[0]);
      setHistory(restHistory);
    }
  };
};

export default useVisualMode;
