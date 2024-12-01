import { useBasket } from "../../store/basket";
import Baskettem from "./components/Baskettem";

const Basket = () => {
  const { totalPrice } = useBasket((state) => state.invoice);
  const items = useBasket((state) => state.items);
  const { removeItem } = useBasket((state) => state.actions);

  return (
    <div>
      <div className=" pb-4 border-b light:border-[#212121] dark:border-[#EEEEEE] flex w-full justify-between items-center">
        <h2 className="text-xl lg:text-2xl font-bold">سبد خرید</h2>
        <p>قیمت داخل پرداخت: {totalPrice}$</p>
      </div>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <Baskettem
              key={item.id}
              {...item}
              removeItem={() => removeItem(item)}
            />
          ))
        ) : (
          <div className="min-h-32 w-ful flex items-center justify-center">
            <p className="text-xl">محصولی در سبد خرید وجود ندارد</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Basket;
