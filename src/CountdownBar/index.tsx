import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { ICountdownBarAppearance } from "./props";

interface ICountdownBar {
  height?: string;
  appearance?: ICountdownBarAppearance;
  duration?: number;
  paused?: boolean;
  onCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const CountdownBar = ({
  height = "4px",
  appearance = "primary",
  duration = 3000,
  paused = false,
  onCountdown,
}: ICountdownBar) => {
  const interceptOnCountdown = (e: AnimationEvent<HTMLDivElement>) => {
    try {
      onCountdown && onCountdown(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <StyledCountdownBar
      id="progress-bar"
      $appearance={appearance}
      $height={height}
      $duration={duration}
      $paused={paused}
      onAnimationEnd={interceptOnCountdown}
    />
  );
};

export { CountdownBar };
export type { ICountdownBar };
