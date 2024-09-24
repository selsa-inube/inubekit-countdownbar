import styled from "styled-components";
import { keyframes } from "styled-components";
import { tokens } from "./Tokens/tokens";

const $CountdownBarAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

const StyledCountdownBar = styled.div`
  width: 100%;
  height: ${({ $height }) => $height};
  transform-origin: left;
  animation: ${$CountdownBarAnimation} ${({ $duration }) => $duration}ms linear;
  background-color: ${({ theme, $appearance }) => {
    return (
      theme?.countdownBar?.[$appearance]?.color || tokens[$appearance].color
    );
  }};
  animation-fill-mode: forwards;
  animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};
`;

export { StyledCountdownBar };
