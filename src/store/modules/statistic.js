import _ from 'lodash'
import { STATISTIC_SET_IS_LOADING, STATISTIC_SET_IS_LOADING_ERROR, STATISTIC_CLEAN_ALL, STATISTIC_UPDATE_DATA } from '../mutation-types';

export default {
  state: {
    is_loading: false,
    exchange_chart_data: [],
    exchange_last_price: 0,
    exchange_vol_24h: 0,
    exchange_price_24h: 0,
    exchange_price_7days: 0,
    exchange_increase: 0,
    exchange_increase7_day: 0,

    last_update: 0,
  },
  getters: {
    is_loading: state => {
      return state.is_loading
    },
    chart_data: state => {
      return state.chart_data
    }
  },
  mutations: {
    [STATISTIC_SET_IS_LOADING](state, payload) {
      state.history_address = payload
      if (payload != null && payload.length > 0) {
        state.disable = false
      }
    },
    [STATISTIC_SET_IS_LOADING_ERROR](state, payload) {
      state.history_address = payload
      if (payload != null && payload.length > 0) {
        state.disable = false
      }
    },
    [STATISTIC_CLEAN_ALL](state) {

    },
    [STATISTIC_UPDATE_DATA](state, payload) {
      state.exchange_chart_data = payload.exchange_chart_data
      state.exchange_last_price = payload.exchange_last_price
      state.exchange_vol_24h = payload.exchange_vol_24h
      state.exchange_price_24h = payload.exchange_price_24h
      state.exchange_price_7days = payload.exchange_price_7days
      state.exchange_increase = payload.exchange_increase
      state.exchange_increase7_day = payload.exchange_increase7_day

      state.last_update = payload.last_update
    }
  }
}
