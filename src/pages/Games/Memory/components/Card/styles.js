import styled, { keyframes } from "styled-components";

const hideImage = keyframes`
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const hideCard = keyframes`
  0% {
    transform: rotateY(0);
  }
  70% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 0.6rem;
  transform: ${({ active }) => (active ? "rotateY(0)" : "rotateY(180deg)")};
  animation: 2s ${hideCard} linear;
  transition: transform 0.5s;
  cursor: ${({ active }) => (active ? "default" : "pointer")};

  span {
    transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
    animation: 2s ${hideImage} linear;
    transition: transform 0.5s;
    font-size: 1.4rem;
  }
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  transition: transform 0.5s;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
  animation: 2s ${hideImage} linear;
`;
