import PosterTile from "./PosterTile.vue";

export default {
  title: "Components/ PoserTile",
  component: PosterTile,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { PosterTile },
  setup() {
    return { args };
  },
  template: "<PosterTile v-bind='args'/>",
});

export const Default = Template.bind({});
