interface Props {
  cartItems: string[];
}

const Cart = ({ cartItems }: Props) => {
  return (
    <div>
      <h2>List of products : </h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
