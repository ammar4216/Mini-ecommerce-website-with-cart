import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const [quantity, setQuantity] = useState(1);


  const dispatch = useDispatch();

  const dicQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      ).catch((err) => {
        console.log(err);
      });
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={150} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">Rs. {product.price}</h3>
          <p className="lead">{product.description}</p>
          <div className=" mt-4 d-flex mb-4">
              <span className="dec lead fw-bold" onClick={dicQuantity}>
                {" "}
                -{" "}
              </span>
              <span className="quantity lead fw-bold ">{quantity}</span>
              <span className="inc lead fw-bold" onClick={() => setQuantity(quantity + 1)}>
                +{" "}
              </span>
            </div>
          <button
            className="btn btn-outline-dark px-4 py-2 mt-3"
            onClick={()=>dispatch({type:"ADD_TO_CART",payload:{product,quantity}})}
          >
            <i className="fa fa-shopping-cart me-1"></i>Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2 mt-3">
            <i className="fa fa-shopping-cart me-1"></i>Cart Section
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default ProductDetail;
