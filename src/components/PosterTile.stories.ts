import PosterTile from "./PosterTile.vue";


export default {
  title: "Components/ PoserTile",
  component: PosterTile,
}

const Template = () => ({
  components: { PosterTile },
  template: "<PosterTile/>",
})

export const Default = Template.bind({});