import Component from "./RoundButton.vue";

export default {
  title: "Components/ RoundButton",
  component: Component,
  argTypes: {
    title: { control: "text" },
    image: { control: "text" },
    year: { control: "text" },
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
  title: "Rambo",
  image: "https://placehold.co/300x445",
  year: "2013",
};
