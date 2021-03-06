import styled, { keyframes } from "styled-components";

const showWrapper = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const showModal = keyframes`
  0% {
    position: absolute;
    bottom: -44vh;
  }
  100% {
    position: absolute;
    bottom: 30vh;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s ${showWrapper} linear;
  background-color: #00000080;
  z-index: 3;
`;

export const ModalUI = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  animation: 0.6s ${showModal} linear;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 12rem;
  gap: 1.6rem;
  color: #fb5607;
  > div {
    text-transform: capitalize;
    font-size: 2rem;
  }

  .time {
    font-weight: bold;
    margin: 1rem 0;
    font-size: 2.4rem;
  }
`;

export const Restart = styled.button`
  font-size: 2.4rem;
  padding: 1rem;
  background-color: gray;
  border-radius: 10rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: center;
`;
