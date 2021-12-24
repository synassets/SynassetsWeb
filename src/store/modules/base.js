import { SET_REF_INVITE_CODE, SET_CHANNEL, SET_RUSH_DIALOG_SHOW, SET_INCOME_DIALOG_SHOW, SET_REINVENT_DIALOG_SHOW, SET_IS_DRAWING} from '../mutation-types'

export default {
  state: {
    channel: '',
    ref_invite_code: '',
    rush_dialog_show: {},
    income_dialog_show: {},
    reinvent_dialog_show: {},
    is_drawing: {},
  },
  getters: {
    ref_invite_code: state => {
      return state.ref_invite_code
    },
    chennel: state => {
      return state.chennel
    }
  },
  mutations: {
    [SET_REF_INVITE_CODE](state, payload) {
      state.ref_invite_code = payload
    },
    [SET_CHANNEL](state, payload) {
      state.channel = payload
    },
    [SET_RUSH_DIALOG_SHOW](state, payload) {
      _.set(state.rush_dialog_show, payload.address + '.[' + payload.index + ']', 1)
    },
    [SET_INCOME_DIALOG_SHOW](state, payload) {
      const today = new Date(new Date().toLocaleDateString()).getTime()
      _.set(state.income_dialog_show, payload.address, today)
    },
    [SET_REINVENT_DIALOG_SHOW](state, payload) {
      const today = new Date(new Date().toLocaleDateString()).getTime()
      _.set(state.reinvent_dialog_show, payload.address, today)
    },
    [SET_IS_DRAWING](state, payload) {

      _.set(state.is_drawing, payload.address, payload.hash)
    }
  }
}
