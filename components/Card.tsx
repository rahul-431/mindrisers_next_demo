"use client"

import React, { useState, useEffect } from "react";

const Card = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const cartItems = [
    {
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Storm Small Jug",
      price: 5000,
      discountPrice: 2500,
    },
    {
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chair",
      price: 4000,
      discountPrice: 2000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chair",
      price: 4000,
      discountPrice: 2000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chair",
      price: 4000,
      discountPrice: 2000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Table",
      price: 6000,
      discountPrice: 3000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Table",
      price: 6000,
      discountPrice: 3000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Table",
      price: 6000,
      discountPrice: 3000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverImage:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Table",
      price: 6000,
      discountPrice: 3000,
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // 640px is considered mobile by Tailwind
    };

    handleResize(); // Check on initial load

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="m-10">
      <div className="text-center mb-5">
        <h1 className="text-black text-3xl font-bold">Best Seller Products</h1>
        <h2 className="text-black">Top sale in this week</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cartItems.slice(0, isMobile ? 4 : cartItems.length).map((item, index) => (
          <div key={index} className="group relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={item.hoverImage}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
              <h2 className="text-white font-semibold">{item.name}</h2>
              <div className="flex justify-between w-full text-white">
                <p className="line-through text-gray-300">Rs.{item.discountPrice}</p>
                <p className="text-orange-400 font-bold">Rs.{item.price}</p>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
                  Add to Cart
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
