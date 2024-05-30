import styled from 'styled-components';

const commonStyles = `
  color: #FFD700;
  font-family: 'Roboto', sans-serif;
`;

const backgroundImage = "url('../../../public/retro-background.jpg') no-repeat center center fixed;";

export const TimerBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${backgroundImage}
  background-size: cover;
`;

export const TimerContainer = styled.div`
  ${commonStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 60vh;
  width: 100%;
  max-width: 1000px;
  margin: 50px auto;
  background: ${backgroundImage}
  background-size: cover;
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TimerButton = styled.button`
  ${commonStyles}
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 10px;
  font-size: 1em;
  background-color: #800080;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 150px;
  height: 50px;

  &:hover {
    background-color: #500050;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    width: 120px;
    height: 40px;
  }
`;

export const StyledInput = styled.input`
  ${commonStyles}
  padding: 10px;
  font-size: 1.5em;
  border-radius: 5px;
  border: none;
  background: transparent;
  margin-bottom: 30px;
  width: 50%;
  box-sizing: border-box;
  align-self: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
