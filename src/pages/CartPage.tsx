import { Link } from "react-router-dom";

interface Props {
  cartItems: { id: number; name: string }[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div className="my-2">
      <h2>List of products : </h2>
      <div>
        {cartItems.map((item) => (
          <Link to={`/cart/${item.id}`} key={item.id} className="nav-link">
            {item.name}
          </Link>
        ))}
      </div>
      <button onClick={onClear} className="btn btn-secondary ms-1 btn-sm">
        Clear
      </button>
    </div>
  );
};

export default Cart;
