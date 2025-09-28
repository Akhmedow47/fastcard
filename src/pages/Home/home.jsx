import jbl from '@/pics/JBL.svg';
import caro from '@/pics/Снимок экрана 2025-09-24 183300.png';
import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrend, getProductById } from '@/reducer/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { LuEye, LuHeart } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { addToWishlist } from '@/pages/wishlist/wishlistSlice.js';
import { addToCart } from '../cart/cartSlice';
import BannerThree from '../../components/BannerThree';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error, wishlist } = useSelector((state) => state.product);
  const cartToken = localStorage.getItem('accaunt');

  const handleAddToCart = (product) => {
    if (!cartToken) {
      alert("You must login first");
      return;
    }
    dispatch(addToCart(product));
    const saved = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...saved, product]));
    alert("Product added to cart!");
  };

  useEffect(() => {
    dispatch(getBrend());
  }, [dispatch]);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[30px] bg-gray-50 lg:w-[90%] m-auto p-6">
        <div className="p-6">
          <div className="space-y-4 text-gray-800">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between cursor-pointer">
                <span>Woman's Fashion</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex items-center justify-between cursor-pointer">
                <span>Man's Fashion</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="cursor-pointer">Electronics</span>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <Carousel
            autoplay
            className="w-full lg:w-[700px] h-[200px] lg:h-[250px] text-center flex items-center mt-7"
          >
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <img src={caro} alt="carousel" className="w-full h-full object-cover" />
              </div>
            ))}
          </Carousel>
        </main>
      </div>

      <div className="lg:w-[90%] m-auto mt-10">
        <div className="flex gap-3 items-center">
          <div className="bg-[#DB4444] h-10 w-5 rounded-sm"></div>
          <h1 className="text-[#DB4444]">Today’s</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:text-start gap-4 my-4">
          <h1 className="text-[36px] pl-5">Flash Sales</h1>
        </div>

        <Swiper
          className="my-4"
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="relative group border rounded-lg p-3 shadow hover:shadow-lg transition">
                <img
                  src={`http://37.27.29.18:8002/images/${e.image}`}
                  alt={e.productName}
                  className="w-full h-40 object-contain"
                />

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <LuHeart
                    onClick={() => {
                      dispatch(addToWishlist(e));
                      if (wishlist?.find((p) => p.id === e.id)) {
                        alert("Removed from wishlist");
                      } else {
                        alert("Added to wishlist");
                      }
                    }}
                    className={`cursor-pointer ${
                      wishlist?.find((p) => p.id === e.id)
                        ? "text-red-500"
                        : "text-gray-400 hover:text-red-500"
                    }`}
                    size={20}
                  />
           <LuEye
  onClick={async () => {
    try {
      await dispatch(getProductById(e.id)).unwrap();
      navigate(`/product/${e.id}`);
    } catch (err) {
      alert("Failed to open product");
      console.error(err);
    }
  }}/>

                </div>

                <button
                  onClick={() => handleAddToCart(e)}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition"
                >
                  Add To Cart
                </button>

                <h2 className="text-sm font-semibold mt-2">{e.productName}</h2>
                <p className="text-red-500 font-bold mb-7">${e.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-black flex flex-col lg:flex-row justify-between gap-3 w-[100%] lg:w-[90%] m-auto p-10">
        <div className="flex flex-col gap-5 text-start items-start">
          <p className="text-[#00FF66]">Categories</p>
          <h1 className="text-[28px] lg:text-[48px] w-[60%] text-white">
            Enhance Your Music Experience
          </h1>

          <div className="flex gap-4">
            <div className="text-center h-[70px] w-[70px] bg-white rounded-full text-black p-2 text-[15px]">
              <p>23</p>
              <p>Hours</p>
            </div>
            <div className="text-center h-[70px] w-[70px] bg-white rounded-full text-black p-2 text-[15px]">
              <p>05</p>
              <p>Days</p>
            </div>
            <div className="text-center h-[70px] w-[70px] bg-white rounded-full text-black p-2 text-[15px]">
              <p>59</p>
              <p>Minutes</p>
            </div>
            <div className="text-center h-[70px] w-[70px] bg-white rounded-full text-black p-2 text-[15px]">
              <p>35</p>
              <p>Seconds</p>
            </div>
          </div>

          <button className="bg-[#00FF66] rounded px-10 py-2 cursor-default">
            Buy Now!
          </button>
        </div>

        <img className="drop-shadow-2xl" src={jbl} alt="JBL" />
      </div>

      <BannerThree />
    </>
  );
};

export default Home;
