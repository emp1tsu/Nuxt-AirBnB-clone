<template>
  <div>
    <div style="display:flex">
      <img
        v-for="image in home.images"
        :key="image"
        alt="alt..."
        :src="image"
        width="200"
        height="150"
      />
    </div>
    {{ home.title }}
    ${{ home.pricePerNight }} / night<br />
    <img src="/images/marker.svg" width="20" height="20" />{{
      home.location.address
    }}
    <img src="/images/star.svg" width="20" height="20" />{{
      home.location.city
    }}
    {{ home.location.state }} {{ home.location.country }}<br />
    {{ home.reviewValue }}<br />
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
    {{ home.bathrooms }} bath<br />
    {{ home.description }}
    <div style="height:800px;width:800px" ref="map"></div>
  </div>
</template>

<script>
if (process.client) {
  window.initMap = function() {
    console.log("text");
  };
}

export default {
  head() {
    return {
      title: this.home.title,
    };
  },
  methods: {},
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    );
  },
  async asyncData({ params, $dataApi, error }) {
    const response = await $dataApi.getHome(params.id);
    if (!response.ok)
      return error({
        statusCode: response.status,
        message: response.statusText,
      });

    return {
      home: response.json,
    };
  },
};
</script>

<style></style>
