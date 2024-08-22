import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useStore from "./store/store";

export default function App() {
  const { products } = useStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
        {products.map((good, index) => (
          <Route
            key={index}
            path={`product-${good.id}`}
            element={<Product index={index} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

function Product({ index }: { index: number }) {
  const { products } = useStore();

  const good = products[index];

  return (
    <div>
      <h1>{good.name}</h1>
      <img src={good.imageUrl} alt="" />
      <p>{good.description}</p>
    </div>
  );
}
