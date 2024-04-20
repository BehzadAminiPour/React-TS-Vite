interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div className="my-2">
      <h2>List of products : </h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear} className="btn btn-secondary ms-1 btn-sm">
        Clear
      </button>
    </div>
  );
};

export default Cart;
