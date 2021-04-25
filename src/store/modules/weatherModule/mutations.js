const mutations = {
  SET_CURRENT_WEATHER: (state, currentData) => {
    state.currentData = currentData
  },
  SET_PAGE_STATUS: (state, status) => {
    state.pageStatus = status
  }
}

export default mutations
