import { ProductProps } from "../../../types/Product";

interface Props extends ProductProps {
  onClick: () => void;
}

const ProductCard = ({ title, description, image, onClick }: Props) => {
  return (
    <div className="card bg-base-100  shadow-xl transition-all hover:shadow-lg">
      <figure>
        <img src={image} alt={title} className="w-full h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            className="bg-secondary px-4 py-2 rounded-lg text-gray-700 font-bold transition-all hover:bg-primary"
            onClick={onClick}
            type="button"
          >
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
