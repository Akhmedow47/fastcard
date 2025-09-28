import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getBrend, getProductById } from "../../reducer/action";
import { LuHeart, LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../wishlist/wishlistSlice";
import { addToCart } from "../cart/cartSlice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, wishlist } = useSelector((state) => state.product);
  const cartToken = localStorage.getItem("accaunt");

  useEffect(() => {
    dispatch(getBrend());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!cartToken) {
      alert("You must login first");
      return;
    }
    dispatch(addToCart(product));
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...saved, product]));
    alert("Product added to cart!");
  };

  const handleWishlist = (product) => {
    dispatch(addToWishlist(product));
    if (wishlist?.find((p) => p.id === product.id)) {
      alert("Removed from wishlist");
    } else {
      alert("Added to wishlist");
    }
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-50">
      <aside className="w-64 bg-white shadow-md rounded-lg p-4 h-fit">
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span" className="font-semibold text-lg">
              Category
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-red-500">All products</li>
              <li className="cursor-pointer hover:text-red-500">Electronics</li>
              <li className="cursor-pointer hover:text-red-500">Home & Lifestyle</li>
              <li className="cursor-pointer hover:text-red-500">Medicine</li>
              <li className="cursor-pointer hover:text-red-500">Sports & Outdoor</li>
              <li className="cursor-pointer text-red-500 font-medium">See all</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        
      </aside>

      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <div key={product.id} className="border p-3 rounded relative group">
              <img
                src={`http://37.27.29.18:8002/images/${product.image}`}
                alt={product.productName}
                className="w-full h-40 object-contain"
              />
              <h2 className="mt-2 font-semibold">{product.productName}</h2>
              <p className="text-red-500 font-bold">${product.price}</p>

              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <LuHeart
                  onClick={() => handleWishlist(product)}
                  className={`cursor-pointer ${
                    wishlist?.find((p) => p.id === product.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"
                  }`}
                  size={20}
                />
                <LuEye
                  onClick={async () => {
                    try {
                      await dispatch(getDataById(product.id)).unwrap();
                      navigate(`/product/${product.id}`);
                    } catch {
                      alert("Failed to open product");
                    }
                  }}
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                  size={20}
                />
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
