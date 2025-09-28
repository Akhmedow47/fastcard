import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearWishlist, removeFromWishlist } from "./wishlistSlice";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { LuHeart, LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { getBrend } from "../../reducer/action"; // your backend fetch
import { addToWishlist } from "./wishlistSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.wishlist);
  const { data: recommendations, isLoading, error } = useSelector(
    (state) => state.product
  );

  // Fetch backend products for Just For You
  useEffect(() => {
    dispatch(getBrend());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center pb-3 mb-6">
        <h2 className="text-xl font-bold">Wishlist ({items.length})</h2>
        {items.length > 0 && (
          <button
            onClick={() => dispatch(clearWishlist())}
            className="border px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={`http://37.27.29.18:8002/images/${item.image}`}
                alt={item.productName}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.productName}</h3>
                <p className="text-red-500 mt-1">${item.price}</p>
                {item.discount > 0 && (
                  <p className="text-red-500 text-sm mt-1">{item.discount}% Off</p>
                )}
              </div>

              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-100 transition"
              >
                <FaTrashAlt className="text-red-500" />
              </button>

              <button className="bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition">
                <FaShoppingCart /> Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12">
        <div className="flex justify-between items-center pb-3 mb-6">
          <h2 className="text-xl font-bold">Just For You</h2>
          <Link to="/">
          <button className="border px-4 py-2 rounded-md hover:bg-gray-300 transition">
            See All
          </button>
          </Link>
        </div>

        {isLoading ? (
          <p>Loading recommendations...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={`http://37.27.29.18:8002/images/${item.image}`}
                  alt={item.productName}
                  className="w-full h-48 object-cover"
                />

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <LuHeart
                    onClick={() => dispatch(addToWishlist(item))}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                    size={20}
                  />
                  <LuEye
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}
                    className="text-gray-400 hover:text-blue-500 cursor-pointer"
                    size={20}
                  />
                </div>

                <button className="bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition">
                  <FaShoppingCart /> Add To Cart
                </button>

                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.productName}</h3>
                  <p className="text-red-500 mt-1">${item.price}</p>
                  {item.discount > 0 && (
                    <p className="text-red-500 text-sm mt-1">{item.discount}% Off</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
