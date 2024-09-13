import React, { createContext, useContext, useState, RefObject } from "react";

// Типи для контексту
interface AudioContextType {
  currentAudio: RefObject<HTMLAudioElement> | null;
  setCurrentAudio: (ref: RefObject<HTMLAudioElement> | null) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentAudio, setCurrentAudio] =
    useState<RefObject<HTMLAudioElement> | null>(null);

  return (
    <AudioContext.Provider value={{ currentAudio, setCurrentAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
