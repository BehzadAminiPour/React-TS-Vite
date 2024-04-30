import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { cartId } = useParams();

  return (
    <div>
      <h3>Product's Code : {cartId}</h3>
      <Link to="/cart" className="btn btn-primary">
        Back to cart
      </Link>
    </div>
  );
};

export default SingleProduct;
