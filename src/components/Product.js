
import React from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function Product({filter, loading}) {
  

  const Loading = () => {
    return (
        <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        </>
    );
  };

  const ShowProducts = () => {
    return <>
    {filter.map((prod)=>{
        return(
            <>
            <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4" key={prod.id}>
              <img src={prod.image} className="card-img-top" alt={prod.title} height="250px" />
              <div className="card-body">
                <h4 className="card-title mb-0">{prod.title.substring(0,12)}</h4>
                <p className="card-text lead fw-bold">Rs. {prod.price}</p>
                <NavLink to={`/products/${prod.id}`} className="btn btn-dark">
                  Buy Now
                </NavLink>
              </div>
            </div>
            </div>
            </>
        );
    })}
    </>;
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Trending Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;
