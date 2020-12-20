<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float:left;margin:10px"
    >
      <nuxt-link :to="`/home/${home.objectID}`" prefetch
        ><home-card :home="home"
      /></nuxt-link>
    </div>
  </div>
</template>

<script>
import homes from "../data/homes.json";
export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "description",
          content: "これはホームページです",
          hid: "description",
        },
      ],
    };
  },
  data() {
    return {
      homes: homes.slice(0, 3),
    };
  },
};
</script>

<style></style>
