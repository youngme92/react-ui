import type { Meta, StoryObj } from "@storybook/react"

import Button from "@/components/Button"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: "text" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "children",
    variant: "default",
  },
}
export const Secondary: Story = {
  args: {
    children: "children",
    variant: "secondary",
  },
}
export const Destructive: Story = {
  args: {
    children: "children",
    variant: "destructive",
  },
}
export const Outline: Story = {
  args: {
    children: "children",
    variant: "outline",
  },
}
export const Ghost: Story = {
  args: {
    children: "children",
    variant: "ghost",
  },
}
export const Link: Story = {
  args: {
    children: "children",
    variant: "link",
  },
}
