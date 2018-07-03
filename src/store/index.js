import Vue from 'vue'
import Vuex from 'vuex'
import {config as api} from '../utils/config'
import f from '../utils/fly-getData'
import http from '../utils/http'
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
  async movieDetail ({state, commit}, id) {
    let data = await http.get(api.movieDetail + id);
    commit('MVDETAIL', data)
  },
  async f_getSalesInfo({commit, state}, params) {
    const {data} = await f.getSalesInfo(params);
    return data;
  },
  async searchMoive({commit, state}, params) {
    const {subjects} = await f.search(params);
    commit('CARTOONDATA', subjects);
    return subjects;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
