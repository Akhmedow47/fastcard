import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getBrend,
} from "@/reducer/action";

const Filter = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product.data);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [min, setMin] = useState(170);
  const [max, setMax] = useState(220000);

  const minLimit = 170;
  const maxLimit = 220000;

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBrend());
  }, [dispatch]);

  const handleMinChange = (e) => setMin(Math.min(Number(e.target.value), max));
  const handleMaxChange = (e) => setMax(Math.max(Number(e.target.value), min));
  const handleMinInput = (e) => {
    const value = Number(e.target.value);
    if (value >= minLimit && value <= max) setMin(value);
  };
  const handleMaxInput = (e) => {
    const value = Number(e.target.value);
    if (value <= maxLimit && value >= min) setMax(value);
  };
  const applyFilter = () => {
    const filtered = products.filter((p) => {
      const price = Number(p.discountPrice || p.price);
      const categoryMatch = selectedCategory ? p.categoryId === selectedCategory : true;
      const priceMatch = price >= min && price <= max;
      return categoryMatch && priceMatch;
    });
  };

  return (
    <div className="space-y-3">
      <Accordion type="single" defaultValue={"item-1"} collapsible>
        <AccordionItem asChild value="item-1">
          <div>
            <AccordionTrigger>
              <h6 className="text-[18px] font-semibold">Category</h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className={`text-[#DB4444] text-[18px] font-medium cursor-pointer ${
                  selectedCategory === null ? "underline" : ""
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All Products
              </div>
              {categories.map((c) => (
                <AccordionContent key={c.id}>
                  <label className="flex items-center cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === c.id}
                      onChange={() => setSelectedCategory(c.id)}
                    />
                    <span className="text-[#505050] text-[16px] font-medium">
                      {c.categoryName}
                    </span>
                  </label>
                </AccordionContent>
              ))}
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>

      <div className="p-4 border-t border-gray-200">
        <h3 className="font-semibold text-lg mb-2">Price range</h3>
        <div className="flex gap-2 mb-4">
          <div className="w-1/2">
            <label className="text-xs text-gray-500 mb-1 block">Min</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={min}
              min={minLimit}
              max={max}
              onChange={handleMinInput}
            />
          </div>
          <div className="w-1/2">
            <label className="text-xs text-gray-500 mb-1 block">Max</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={max}
              min={min}
              max={maxLimit}
              onChange={handleMaxInput}
            />
          </div>
        </div>

        <button
          onClick={applyFilter}
          className="w-full border border-red-500 text-red-500 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
