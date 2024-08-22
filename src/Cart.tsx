import useStore from "./store/store";
import heart from "./assets/heart-solid.svg";
import like from "./assets/heart-red.svg";
import trash from "./assets/trash-solid.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    products,
    favorites,
    addToFavorites,
    removeFromFavorites,
    removeFromProduct,
  } = useStore();

  interface Product {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
  }

  const toggleFavorite = (good: Product) => {
    if (favorites.includes(good)) {
      removeFromFavorites(good.id);
    } else {
      addToFavorites(good);
    }
  };

  const [show, setShow] = useState(false);

  const displayedProducts = show ? favorites : products;
  const textButton = show ? "show all" : "favorites";

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="flex flex-col gap-[70px] mb-[60px] 768px:flex-row">
        {displayedProducts.map((good, index) => {
          const isFavorite = favorites.includes(good);
          return (
            <div className="flex flex-col items-center" key={index}>
              <h1>{good.name}</h1>
              <img
                onClick={() => navigate(`/product-${good.id}`)}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={good.imageUrl}
                alt=""
              />
              <div className="flex justify-center gap-[15px] my-[10px]">
                <img
                  onClick={() => toggleFavorite(good)}
                  className="w-[25px]"
                  src={isFavorite ? like : heart}
                  alt=""
                />
                <img
                  className="w-[20px]"
                  src={trash}
                  alt=""
                  onClick={() => {
                    removeFromProduct(good.id);
                    removeFromFavorites(good.id);
                  }}
                />
              </div>
              <p>{good.description.slice(0, 15)}...</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setShow(show ? false : true)}
        className="bg-black text-white w-[200px] h-[50px]"
      >
        {textButton}
      </button>
    </div>
  );
}
