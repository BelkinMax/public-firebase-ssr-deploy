<template>
  <div
    class="container mx-auto p-4 flex flex-col justify-center items-center text-center"
  >
    <div>
      <Logo />
      <h1 class="title">
        {{ message }}
      </h1>
      <div class="grid gap-4 grid-cols-4">
        <div
          v-for="mountain in mountains"
          :key="mountain.title"
          class="bg-gray-900 text-white rounded flex flex-col space-y-8 p-4 justify-between"
        >
          <div class="space-y-3">
            <h2 class="inline-block text-lg font-bold">{{ mountain.title }}</h2>
            <p class="inline-block text-gray-200">{{ mountain.description }}</p>
          </div>

          <div class="space-y-3">
            <p class="inline-block italic bg-gray-200 text-gray-900 w-full">
              {{ mountain.height }}
            </p>

            <img
              class="inline-block w-full h-56 object-fill"
              :src="mountain.image"
              :alt="mountain.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "SSR WORKS",
      mountains: []
    };
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(res =>
      res.json()
    );
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
