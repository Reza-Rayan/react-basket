import { products } from "./products.json";
import { ProductProps } from "../../types/Product";
// Custom Components
import ProductCard from "./components/ProductCard";
import { useBasket } from "../../store/basket";

const Products = () => {
  const { addItem } = useBasket((state) => state.actions);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
      {products.map((product: ProductProps) => (
        <ProductCard
          key={product.id}
          {...product}
          onClick={() => addItem(product)}
        />
      ))}
    </div>
  );
};

export default Products;
