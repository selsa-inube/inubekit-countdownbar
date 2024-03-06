import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance } from "./props";

export interface ICountdownBar {
  height?: string;
  appearance?: Appearance;
  duration?: number;
  paused?: boolean;
  onCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

export const CountdownBar = ({
  height = "4px",
  appearance = "primary",
  duration = 3000,
  paused = false,
  onCountdown,
}: ICountdownBar) => {
  return (
    <StyledCountdownBar
      id="progress-bar"
      $appearance={appearance}
      $height={height}
      $duration={duration}
      $paused={paused}
      onAnimationEnd={onCountdown}
    />
  );
};
