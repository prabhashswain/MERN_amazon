import React, { useReducer, useEffect } from "react";
import axios from "axios";
import logger from 'use-reducer-logger';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state,products:action.payload, loading: false };

    case "FETCH_FAILED":
      return { ...state, error:action.payload, loading: false };

    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading,error,products }, dispatch] = useReducer(logger(reducer),{
    products:[],
    error:'',
    loading:true
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type:"FETCH_REQUEST" })
      try {
      const { data } = await axios.get(`/api/products`);
        dispatch({ type:"FETCH_SUCCESS",payload:data.products })
      } catch (error) {
        dispatch({ type:"FETCH_FAILED",payload:error.message })
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        { loading ? <div>Loading...</div>
        : error ? <div>error</div>
        :
        products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>$</strong> {product.price}
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
