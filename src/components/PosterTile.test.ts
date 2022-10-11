import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import PosterTile from "./PosterTile.vue";

describe("PosterTile.vue", () => {
  it("Renders correctly", () => {
    const wrapper = mount(PosterTile, { props: { title: "Poster Tile" } });

    expect(wrapper.text()).toContain("Poster Tile");
  });
});
