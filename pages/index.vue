<template>
  <div
    class="container mx-auto p-4 flex flex-col justify-center items-center text-center"
  >
    <div class="space-y-8">
      <div class="flex justify-between items-end">
        <Logo />
        <h1 class="text-xl">
          {{ title }}
        </h1>
      </div>

      <div v-if="!error" class="grid gap-4 grid-cols-4">
        <div
          v-for="rocket in rockets"
          :key="rocket.id"
          class="bg-gray-900 text-white rounded flex flex-col space-y-8 p-4 justify-between"
        >
          <div class="space-y-3">
            <h2 class="inline-block text-lg font-bold">{{ rocket.name }}</h2>
            <p class="inline-block text-gray-200">{{ rocket.description }}</p>
          </div>

          <div class="space-y-3">
            <p class="inline-block italic bg-gray-200 text-gray-900 w-full">
              Height: {{ rocket.height.meters }} m.
            </p>

            <p class="inline-block italic bg-gray-200 text-gray-900 w-full">
              Mass: {{ kgToTon(rocket.mass.kg) }} ton.
            </p>

            <img
              class="inline-block w-full h-56 object-cover"
              :src="getRandomImg(rocket.flickr_images)"
              :alt="rocket.title"
            />
          </div>
        </div>
      </div>

      <div v-else>
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "SpaceX Rockets",
      rockets: [],
      error: ""
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        "https://api.spacexdata.com/v4/rockets"
      );

      this.rockets = data;
    } catch (e) {
      console.error(e);
      this.error = e.message;
    }
  },
  methods: {
    kgToTon(kgMass) {
      const tonMass = kgMass / 1000;
      return tonMass.toFixed(2);
    },
    getRandomImg(images) {
      const idx = Math.floor(Math.random() * images.length);
      return images[idx];
    }
  }
};
</script>
