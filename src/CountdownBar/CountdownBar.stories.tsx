import { CountdownBar, ICountdownBar } from ".";
import { action } from "@storybook/addon-actions";
import { props, parameters } from "./props";

const story = {
  title: "feedback/CountdownBar",
  components: [CountdownBar],
  parameters,
  argTypes: {
    ...props,
    onCountdown: { action: "onAnimationEnd" },
  },
};

const Default = (args: ICountdownBar) => <CountdownBar {...args} />;
Default.args = {
  height: "4px",
  appearance: "primary",
  duration: 3000,
  paused: false,
  onCountdown: action("onAnimationEnd"),
};

export { Default };
export default story;
