import { IconWrapper } from ".";

export default {
  title: "Components/IconWrapper",
  component: IconWrapper,
  argTypes: {
    size: {
      options: [
        "eighteen-px",
        "twenty-four-px",
        "twelve-px",
        "one-hundred-and-four-px",
        "forty-eight-px",
        "sixteen-px",
        "one-hundred-and-twenty-eight-px",
        "sixty-four-px",
        "ten-px",
        "fourteen-px",
        "twenty-two-px",
        "thirty-two-px",
        "twenty-px",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "eighteen-px",
    union: true,
    className: {},
    img: "/img/union-2.svg",
  },
};
