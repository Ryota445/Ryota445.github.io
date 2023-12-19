import { SearchBox } from ".";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    enter: {
      options: ["text", "icon", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    enter: "text",
    suffix: true,
    filled: true,
    allowClear: true,
    className: {},
  },
};
