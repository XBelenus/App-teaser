<template>
  <div id="geolocalisation small">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main><div id="geodiv"></div>
      <img src="" alt="Vue.js PWA">
      
    </main>
  </div>
</template>

<script>

export default {
  name: 'geolocalisation',
  data: function () {
    return {
      options: {
        enableHighAccuracy: true,
        timeout: 500000,
        maximumAge: 0
      },
      mylon: '',
      mylat: ''
    }
  },
  methods: {
    sayhi: function () {
    },
    geoSuccess: function (position) {
      var geocoord = position.coords
      this.mylon = geocoord.longitude
      this.mylat = geocoord.latitude
      console.log(this.mylon)
    },
    geoError: function (err) {
      console.log(err)
      alert('impossible de définir votre position !' + err)
    }
  },
  created: function () {
    this.sayhi()
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
