import { useState, useEffect, useRef } from "react";
import {
  TimerBackground,
  TimerContainer,
  TimerButton,
  StyledInput,
  ButtonContainer,
} from "./styles";
import alarmSound from "../../alarms/retro-game.mp3";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [inputValue, setInputValue] = useState("00:00");
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "00:00";
    }
  }, [isRunning, isPaused]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setIsPaused(true);
    } else if (inputValue !== "00:00") {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    setInputValue("00:00");
    if (inputRef.current) {
      inputRef.current.value = "00:00";
    }
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

  return (
    <TimerBackground>
      <TimerContainer>
        <h1>Timer</h1>
        {!isRunning && !isPaused && (
          <StyledInput
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        )}
        <div>
          <ButtonContainer>
            {!(time === 0 && isRunning) && (
              <TimerButton onClick={handleStartStop}>
                {isRunning ? "Pausar" : "Começar"}
              </TimerButton>
            )}
            {(isRunning || isPaused) && (
              <TimerButton onClick={handleReset}>Resetar</TimerButton>
            )}
          </ButtonContainer>
        </div>
        {(isRunning || isPaused) && (
          <h2>
            {Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time / 60)}
            :{time % 60 < 10 ? `0${time % 60}` : time % 60}
          </h2>
        )}
        <audio ref={alarmRef} src={alarmSound} />
      </TimerContainer>
    </TimerBackground>
  );
}

export default Timer;
