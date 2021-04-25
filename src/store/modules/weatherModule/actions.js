import axios from 'axios'

const actions = {

  getCurrentWeatherByCityName({ commit }, payload){
    const { city } = payload
    return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q:city,
        units:"metric",
        APPID:process.env.VUE_APP_API_KEY
      }
    }).then((response) => {
      debugger;
      commit('SET_CURRENT_WEATHER', response.data)
      return response
    }).catch((errors) => {
      debugger;
      commit('SET_PAGE_STATUS', 'ERROR')
      return errors
    })
  },

  getCurrentWeatherByCordinates({ commit }, payload){
    debugger;
    const { lat } = payload;
    const { lon } = payload;
    return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        units:"metric",
        APPID:process.env.VUE_APP_API_KEY
      }
    }).then((response) => {
      debugger;
      commit('SET_CURRENT_WEATHER', response.data)
      return response
    }).catch((errors) => {
      debugger;
      commit('SET_PAGE_STATUS', 'ERROR')
      return errors
    })
  },

}

export default actions
