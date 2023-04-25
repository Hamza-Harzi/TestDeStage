<script setup lang="ts">
import restaurants from "@/data.json";
interface RowProps {
  rank?: number;
  name?: string;
  index?: number;
  isHeader?: boolean;
}
</script>
<template>
  <div>
    <img
      class="w-full left-0"
      src="https://www.trgplc.com/wp-content/uploads/2022/03/homepage-hero-desktop-1.jpg"
      alt=""
    />

    <div class="w-4/5 mx-28 my-28 bg-gray-500 lg:bg-gray-300">
      <h1 class="text-2xl font-bold ml-16 my-20 lg:ml-96">
        Thes best restaurants in world
      </h1>
      <div class="mx-24" mt-14>
        <div
          class=""
          v-for="(restaurant, index) in restaurants"
          :key="restaurant.id"
          :name="restaurant.name"
        >
          <h2 class="my-9 text-xl font-bold">{{ restaurant.name }}</h2>
          <div class="grid items-center p-px lg:flex">
            <img class="w-4/12 lg:mb-3" :src="restaurant.imageUrl" alt="" />
            <p class="ml-1 lg:my-10 lg:ml-32">{{ restaurant.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
