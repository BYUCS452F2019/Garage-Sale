import { userService } from '../_services';

const state = {
  all: {},
  allItems: [],
  userItems: []
};

const actions = {
  getAllItems({ commit }) {
    // commit('getAllRequest');

    // userService
    //   .getAll()
    //   .then(
    //     users => {commit('getAllSuccess', users),
    //     error => commit('getAllFailure', error)
    //   );

    userService.getAllItems().then(
      items => {
        commit('addAllItems', items);
      },
      error => commit('getAllFailure', error)
    );
  },
  getAllUserItems({ commit }, userID) {
    //commit('getAllUserItemsRequest');

    userService.getItemsByUserID(userID).then(
      userItems => {
        commit('getAllUserItemsSuccess', userItems);
      },
      error => commit('getAllUserItemsFailure', error)
    );
  },

    addItem({ commit, dispatch }, userform) {
        
        userService.addItem(userform)
            .then(() => dispatch('getAllUserItems', userform.userId));
        
    },

  // Stopping point
  delete({ commit }, id) {
    commit('deleteRequest', id);

    userService
      .delete(id)
      .then(
        user => commit('deleteSuccess', id),
        error => commit('deleteFailure', { id, error: error.toString() })
      );
  }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    addAllItems(state, items) {
        state.allItems = [...items];
      },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    getAllUserItemsSuccess(state, userItems) {
        state.userItems = [...userItems]
    },
    getAllUserItemsFailure(state, error) {
        state.userItems = error;
    },
    addItem(state, item){
        state.userItems.push(item);
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }
        });
    }
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
};
