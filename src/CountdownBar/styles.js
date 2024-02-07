import styled from "styled-components";
import { keyframes } from "styled-components";
import { inube } from "@inubekit/foundations";

const $CountdownBarAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

export const StyledCountdownBar = styled.div`
  width: 100%;
  height: ${({ $height }) => $height};
  transform-origin: left;
  animation: ${$CountdownBarAnimation} ${({ $duration }) => $duration}ms linear;
  background-color: ${({ theme, $appearance }) => {
    return (
      theme?.color?.stroke?.[$appearance]?.regular ||
      inube.color.stroke[$appearance].regular
    );
  }};
  animation-fill-mode: forwards;
  animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};
`;
