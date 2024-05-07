import { Link } from "react-router-dom";

interface Props {
  cartItems: { id: number | string; name: string; image: string }[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div className="my-2">
      <h2>List of products : </h2>
      <div>
        {cartItems.map((item) => (
          <Link to={`/cart/${item.id}`} key={item.id} className="nav-link mb-5">
            <p>{item.name}</p>
            <button className="btn btn-sm btn-info">More...</button>
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
