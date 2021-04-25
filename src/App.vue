<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : weather.weather[0].main=='Rain'?'rain' :''">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      query: '',
      gettingLocation: false,
      errorStr: null
    }
  },

  created () {
    // do we support geolocation
    if (!('geolocation' in navigator)) {
      this.errorStr = 'Geolocation is not available.'
      return
    }

    this.gettingLocation = true
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false
      this.getCurrentWeatherByCordinates({ lat: pos.coords.latitude, lon: pos.coords.longitude })
    }, err => {
      this.gettingLocation = false
      this.errorStr = err.message
    })
  },

  computed: {
    ...mapGetters({
      weather: 'weatherModule/getCurrentWeatherData'
    })
  },
  methods: {
    ...mapActions('weatherModule', ['getCurrentWeatherByCityName', 'getCurrentWeatherByCordinates']),
    fetchWeather (e) {
      console.log(process.env.VUE_APP_API_KEY)
      if (e.key == 'Enter') {
        this.getCurrentWeatherByCityName({ city: this.query })
      }
    },
    dateBuilder () {
      const d = new Date()
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      const day = days[d.getDay()]
      const date = d.getDate()
      const month = months[d.getMonth()]
      const year = d.getFullYear()

      return `${day} ${date} ${month} ${year}`
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
