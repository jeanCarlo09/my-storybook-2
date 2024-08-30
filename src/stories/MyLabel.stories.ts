import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select" },
    fontColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    allCaps: false,
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
    size: "normal",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
    allCaps: false,
    size: "normal",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
    allCaps: false,
    size: "normal",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom Background Color Label",
    color: "text-primary",
    allCaps: false,
    size: "normal",
    backgroundColor: "#ffeb3b",
  },
};
