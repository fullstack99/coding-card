import * as types from './mutation-types';

const mutations = {
  [types.CREATE_CARD](state, data) {
    state.index++;
    const card = {
      ...data,
      id: state.index
    }
    state.cards.push(card);
  },

  [types.DELETE_CARD](state, id) {
    const cards = state.cards;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        cards.splice(i, 1);
        return;
      }
    }
  },

  [types.UPDATE_CARD](state, data) {
    const cards = state.cards;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === data.id) {
        cards[i] = { ...data }
        return;
      }
    }
  },
}

export default mutations;