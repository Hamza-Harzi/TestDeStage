import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import MyRestaurants from "../components/MyRestaurants.vue";

describe("MyRestaurants", () => {
  it("check if img exists", () => {
    const wrapper = mount(MyRestaurants);
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
});
