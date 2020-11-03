import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const initialState = {
  cards: [],
  index: -1
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
