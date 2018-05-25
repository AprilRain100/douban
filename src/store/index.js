import Vue from 'vue'
import Vuex from 'vuex'
import {requestGet} from '../utils/reques'
import api from '../utils/config'
Vue.use(Vuex)

const state = {
  test: '1111',
  cartoonData: {},
  mv_detail: {}
};

const mutations = {
  TESTMUTATIONS (state, data) {
    state.test = data;
  },
  CARTOONDATA (state, data) {
    state.cartoonData = data;
  },
  MVDETAIL (state, data) {
    state.mv_detail = data;
  }

};

const actions = {
  async searchMoive ({state, commit}, params) {
    let data = await requestGet({
      url: api.search,
      data: {tag: params}
    });
    commit('CARTOONDATA', data)
  },
  async movieDetail ({state, commit}, id) {
    let data = await requestGet({
      url: api.movieDetail + id,
      data: {}
    });
    commit('MVDETAIL', data)
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
