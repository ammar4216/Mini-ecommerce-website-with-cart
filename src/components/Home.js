import React, { useState, useEffect, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Product from "./Product";

function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const compMount = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products").catch(
        (err) => {
          console.log(err);
        }
      );

      if (compMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        compMount.current = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    const updateList = data.filter((value) => value.category === category);
    setFilter(updateList);
  };

  const images = [
    "/assets/pic_1.jpg",
    "/assets/pic_2.jpg",
    "/assets/pic_3.jpg",
    "/assets/pic_4.jpeg",
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          {/* Category Section */}
          <div className="col-md-2 catsection padding-0 border border-2  px-4 py-5 bg-light bg-gradient">
            <div class="list-group ">
              <h4 className="display-10 text-center mt-2">Categories</h4>
              <hr />
              <button
                className="list-group-item list-group-item-action border-0 bg-light bg-gradient"
                onClick={() => setFilter(data)}
              >
                All
              </button>
              <hr />
              <button
                className="list-group-item list-group-item-action border-0 bg-light bg-gradient"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </button>
              <hr />
              <button
                className="list-group-item list-group-item-action border-0 bg-light bg-gradient"
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </button>
              <hr />
              <button
                className="list-group-item list-group-item-action border-0 bg-light bg-gradient"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
              <hr />
              <button
                className="list-group-item list-group-item-action border-0 bg-light bg-gradient"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </button>
            </div>
          </div>
          {/* Slider Section */}
          <div className="col-md-7">
            <Slide>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[0]})` }}></div>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[1]})` }}></div>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[2]})` }}></div>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[3]})` }}></div>
              </div>
            </Slide>
          </div>
          {/* Login Section */}
          <div className="col-md-3 loginSection px-3">
            <div class="wrapper">
              <div class="logo">
                <img src="/assets/login_logo.png" alt="Login" />
              </div>
              <div class="text-center mt-4 name">Login</div>
              <form class="p-3 mt-3">
                <div class="form-field d-flex align-items-center">
                  <span class="far fa-user"></span>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Username"
                  />
                </div>
                <div class="form-field d-flex align-items-center">
                  <span class="fas fa-key"></span>
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Password"
                  />
                </div>
                <button class="btn mt-3 btn-dark">Login</button>
              </form>
              <div class="text-center fs-6">
                <a className="lead fw-bold" href="#">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Product filter={filter} loading={loading} />
    </>
  );
}

export default Home;
