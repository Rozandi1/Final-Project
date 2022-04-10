import propTypes from "prop-types";
import "./style.css";

const CardProduct = ({ name, image, price, addToCart }) => {
  return (
    <div className="card w-100">
      <div className="car-img">
        <img src={image} className="img card-img-top" alt="kuliner" />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted text-capitalize">{name}</h6>
        <button type="button" className="btn btn-success w-100" onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

CardProduct.defaultProps = {
  name: "",
  image: "",
  price: "",
  addToCart: () => null,
};

CardProduct.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
  addToCart: propTypes.func,
};

export default CardProduct;
