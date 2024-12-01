import { ProductProps } from "../../../types/Product";

interface Props extends ProductProps {
  quantity: number;
  removeItem: () => void;
}

const Baskettem = ({ image, title, price, quantity, removeItem }: Props) => {
  return (
    <li className="flex py-6 gap-4">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border  border-gray-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="ml-4">{price}$</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p>تعداد: {quantity}</p>
          <div className="flex">
            <button
              type="button"
              className="btn btn-outline rounded-lg  font-medium text-indigo-600 hover:text-indigo-400"
              onClick={removeItem}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Baskettem;
