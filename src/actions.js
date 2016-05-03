/*jshint esversion: 6 */

export const increment = ({ dispatch }, counterId) => dispatch('INCREMENT', counterId);

export const decrement = ({ dispatch }, counterId) => dispatch('DECREMENT', counterId);

export const double = ({ dispatch }, counterId) => dispatch('DOUBLE', counterId);

export const addCounter = ({ dispatch }) => dispatch('ADD_COUNTER');

export const incrementIfOdd = (store, counterId) => {
    if (store.state.counters[counterId] % 2 !== 0) {
        store.dispatch('INCREMENT', counterId);
    }
};
