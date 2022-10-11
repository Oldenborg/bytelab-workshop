import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import PosterTile from "./PosterTile.vue";

describe("PosterTile.vue", () => {
  it("Renders correctly", () => {
    const firstComponent = mount(PosterTile, {
      props: {
        title: "Poster Tile",
        image: "http://placehold.co/300x445",
        year: "1920",
      },
    });

    const secondComponent = mount(PosterTile, {
      props: {
        title: "Rambo",
        image: "http://placehold.co/400x600",
        year: "2020",
      },
    });

    expect(firstComponent.text()).toContain("Poster Tile");
    expect(firstComponent.find("img").attributes("src")).toBe(
      "http://placehold.co/300x445"
    );
    expect(firstComponent.text()).toContain("1920");

    expect(secondComponent.text()).toContain("Rambo");
    expect(secondComponent.find("img").attributes("src")).toBe(
      "http://placehold.co/400x600"
    );
    expect(secondComponent.text()).toContain("2020");
  });
});
