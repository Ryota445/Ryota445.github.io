import { Image } from ".";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    ratio: {
      options: [
        "eleven-thousand-six-hundred-and-eighteen",
        "thirty-four",
        "twenty-three",
        "one-thousand-six-hundred-and-ten",
        "custom",
        "fifty-two",
        "twenty-one",
        "thirty-two",
        "eleven",
        "thirty-one",
        "sixteen-thousand-one-hundred-and-eighty-one",
        "one-hundred-and-sixty-nine",
        "forty-three",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    ratio: "eleven-thousand-six-hundred-and-eighteen",
    placeholder: true,
    className: {},
  },
};
