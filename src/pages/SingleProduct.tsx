import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const { cartId } = useParams();
  const product = products.find((product) => product.id === cartId);
  const { name, image } = product;
  return (
    <div>
      <h3>Product's Code : {cartId}</h3>
      <h2>{name}</h2>
      <p>
        <img src={image} alt={name} />
      </p>
      <Link to="/cart" className="btn btn-primary">
        Back to cart
      </Link>
    </div>
  );
};

export default SingleProduct;
