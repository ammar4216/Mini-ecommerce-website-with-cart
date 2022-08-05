import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Cart() {
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <div>
      {products.length > 0 ? (
        <>
          <div className="row mt-2 px-4 py-5">
            <div className="col-12">
              <div className=" text-center d-flex justify-content-around mb-3 p-3 bg-dark bg-gradient">
                <div className="lead display-8 fw-bolder text-light">Picture</div>
                <div className="lead display-8 fw-bolder text-light">Title</div>
                <div className="lead display-8 fw-bolder text-light">Price</div>
                <div className="lead display-8 fw-bolder text-light">Quantity</div>
                <div className="lead display-8 fw-bolder text-light">Total Price</div>
                <div className="lead display-8 fw-bolder text-light">Remove Item</div>
              </div>

              {products.map((product) => (
                <div
                  className="text-center d-flex justify-content-between p-5 bg-light bg-gradient fw-bold"
                  key={product.id}
                >
                  {/* child 1 */}
                  <div>
                    <div className="col-md-2">
                      <img
                        className=""
                        src={product.image}
                        alt={product.title}
                        height="150px"
                        width="150px"
                      />
                    </div>
                  </div>
                  {/* child 2 */}
                  <div className="col-md-2">{product.title}</div>

                  {/* child 3 */}
                  <div>
                    <div className="col-md-2">Rs. {product.price}</div>
                  </div>

                  {/* child 4 */}
                  <div className="col-md-2 d-flex">
                    <span
                      className="dec"
                      onClick={() =>
                        dispatch({ type: "DEC", payload: product.id })
                      }
                    >
                      -
                    </span>
                    <span className="quantity">{product.quantity}</span>
                    <span
                      className="inc"
                      onClick={() =>
                        dispatch({ type: "INC", payload: product.id })
                      }
                    >
                      +{" "}
                    </span>
                  </div>

                      {/* child 5 */}
                  <div>
                    <div className="col-md-2">
                      Rs. {product.price * product.quantity}
                    </div>
                  </div>

                  {/* child 6 */}
                  <a
                  className="col-md-2"
                  style={{cursor: "pointer"}}
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: product.id })
                    }
                  >
                    <i className="fas fa-trash text-danger" ></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="container mt-5 mb-5" style={{height: "100%", minHeight: "450px"}}>
          <h2 className="text-center">
          Cart is Empty Right Now!
        </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
