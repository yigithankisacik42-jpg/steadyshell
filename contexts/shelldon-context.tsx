"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Mood = "happy" | "sad" | "thinking" | "default" | "celebrate";

interface ShelldonState {
  isVisible: boolean;
  message: string;
  mood: Mood;
}

interface ShelldonContextType extends ShelldonState {
  showShelldon: (message: string, mood?: Mood, duration?: number) => void;
  hideShelldon: () => void;
}

const defaultState: ShelldonState = {
  isVisible: false,
  message: "",
  mood: "default",
};

const ShelldonContext = createContext<ShelldonContextType | undefined>(undefined);

export const ShelldonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ShelldonState>(defaultState);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const hideShelldon = useCallback(() => {
    setState((prev) => ({ ...prev, isVisible: false }));
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const showShelldon = useCallback(
    (message: string, mood: Mood = "default", duration: number = 4000) => {
      // Önceki zamanlayıcıyı iptal et
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setState({ isVisible: true, message, mood });

      // Belirtilen süre sonunda otomatik kapat
      if (duration > 0) {
        const id = setTimeout(() => {
          hideShelldon();
        }, duration);
        setTimeoutId(id);
      }
    },
    [timeoutId, hideShelldon]
  );

  return (
    <ShelldonContext.Provider value={{ ...state, showShelldon, hideShelldon }}>
      {children}
    </ShelldonContext.Provider>
  );
};

export const useShelldon = () => {
  const context = useContext(ShelldonContext);
  if (context === undefined) {
    throw new Error("useShelldon must be used within a ShelldonProvider");
  }
  return context;
};
