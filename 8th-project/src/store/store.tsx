import { create } from "zustand";
import goods from "./Api.tsx";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Store {
  products: Product[];
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productID: number) => void;
  addToProduct: (product: Product) => void;
  removeFromProduct: (productID: number) => void;
}

const useStore = create<Store>((set) => ({
  products: goods,
  favorites: [],
  addToFavorites: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFromFavorites: (productID) =>
    set((state) => ({
      favorites: state.favorites.filter((product) => product.id !== productID),
    })),
  addToProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeFromProduct: (productID) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productID),
    })),
}));

export default useStore;
