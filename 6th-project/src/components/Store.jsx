import {create} from 'zustand';

const useStore = create((set) => ({
  cart: {
    burger: 0,
    icecream: 0,
    pizza: 0,
    chicken: 0,
  },
  addItem: (item) => set((state) => ({
    cart: {
      ...state.cart,
      [item]: state.cart[item] + 1,
    },
  })),
}));

export default useStore;
