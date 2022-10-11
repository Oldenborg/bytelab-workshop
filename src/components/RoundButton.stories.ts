import Component from "./RoundButton.vue";

export default {
  title: "Components/ RoundButton",
  component: Component,
  argTypes: {
    success: { control: "boolean" },
    danger: { control: "boolean" },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: "<Component v-bind='args'>test</Component>",
});

export const Default = Template.bind({});
Default.args = {
  danger: true,
  success: false,
};
