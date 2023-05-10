import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import myProfile from "../pages/myProfile.vue";

describe("myProfile", () => {
  it("renders MyRestaurants", () => {
    const wrapper = mount(myProfile);
    const greet = wrapper.getComponent({ name: "MyRestaurants" });

    expect(greet.find("p").exists()).toBeTruthy();
  });
});
