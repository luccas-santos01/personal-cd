import { useTimer } from "../../hooks/userTimer";
import {
  TimerBackground,
  TimerContainer,
  TimerButton,
  StyledInput,
  ButtonContainer,
} from "./styles";
import alarmSound from "../../alarms/retro-game.mp3";

function Timer() {
  const {
    time,
    isRunning,
    isPaused,
    inputValue,
    handleStartStop,
    handleReset,
    handleInputChange,
    alarmRef,
  } = useTimer();

  return (
    <TimerBackground>
      <TimerContainer>
        <h1>Timer</h1>
        {!isRunning && !isPaused && (
          <StyledInput
            aria-label="timer-input"
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
