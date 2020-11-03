import * as types from './mutation-types';
import router from '../../../router';

export const createCard = ({ commit }, data) => {
  commit(types.CREATE_CARD, data);
  router.push('/');
}

export const deleteCard = ({ commit }, id) => {
  commit(types.DELETE_CARD, id);
}

export const updateCard = ({ commit }, data) => {
  commit(types.UPDATE_CARD, data);
  router.push('/');
}