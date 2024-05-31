import { useState, useEffect, useRef } from "react";

const INITIAL_INPUT_VALUE = "00:00";

export function useTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUE);
  const alarmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: number | null = null;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isRunning || time === 0) {
      clearInterval(interval!);
      if (isRunning && time === 0 && alarmRef.current) {
        alarmRef.current.play();
      }
    }

    return () => clearInterval(interval!);
  }, [isRunning, time]);

  useEffect(() => {
    const [minutes, seconds] = inputValue.split(":").map(Number);
    setTime(minutes * 60 + seconds);
  }, [inputValue]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setIsPaused(true);
    } else if (inputValue !== INITIAL_INPUT_VALUE) {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    setInputValue(INITIAL_INPUT_VALUE);
    if (alarmRef.current) {
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^([0-5]?[0-9]?|60)?:?[0-5]?[0-9]?$/;
    if (
      (e.target.value === "" || regex.test(e.target.value)) &&
      e.target.value.includes(":")
    ) {
      setInputValue(e.target.value);
    }
  };

  return {
    time,
    isRunning,
    isPaused,
    inputValue,
    handleStartStop,
    handleReset,
    handleInputChange,
    alarmRef,
  };
}
