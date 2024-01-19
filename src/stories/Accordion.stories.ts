import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "@/components/Accordion";

import { Unchecked } from "@/stories/AccordionItem.stories";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { Item: Accordion.Item },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //     // backgroundColor: { control: "color" },
  //     children: { control: "text" },
  //   },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};

// export const OneItem: Story = {
//   args: {
//     children: <Unchecked {...Unchecked.args} />,
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: "Delete now",
//     backgroundColor: "red",
//   },
// };
