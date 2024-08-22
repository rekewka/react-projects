export interface Product {
  name: string;
  id: number;
  description: string;
  imageUrl: string;
}

const goods: Product[] = [
  {
    name: "Sample Product 1",
    id: 1,
    description: "This is a description of the first sample product.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 2",
    id: 2,
    description: "This is a description of the second sample product.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 3",
    id: 3,
    description: "This is a description of the third sample product.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default goods;
