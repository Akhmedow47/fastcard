import { Outlet, Link } from "react-router-dom"; 
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from '../pics/fastcard.svg';
import search from '../pics/searchh.svg';
import whishlist from '../pics/Wishlist (2).svg';
import store from '../pics/storee.svg';
import menu from '../pics/menu.svg';
import user from '../pics/user.svg';
import send from '../pics/icon-send.svg';
import insta from '../pics/icon-instagram.svg';
import twit from '../pics/Icon-Twitter.svg';
import linkd from '../pics/Icon-Linkedin.svg';
import faceb from '../pics/Icon-Facebook.svg';
import copy from '../pics/icon-copyright.svg';

export default function Layout() {
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [userAnchor, setUserAnchor] = useState(null);

  const mobileOpen = Boolean(mobileAnchor);
  const userOpen = Boolean(userAnchor);

  const handleMobileClick = (event) => setMobileAnchor(event.currentTarget);
  const handleMobileClose = () => setMobileAnchor(null);

  const handleUserClick = (event) => setUserAnchor(event.currentTarget);
  const handleUserClose = () => setUserAnchor(null);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow px-6 py-4 flex flex-col lg:flex-row justify-between">
        <div className="hidden lg:flex items-center justify-between w-full">
          <img src={logo} alt="logo" />

         <nav className="hidden lg:flex gap-6 text-gray-700">
  <div className="relative group">
    <Link
      to="/"
      className="px-2 py-1 hover:bg-gray-100 rounded transition"
    >
      Home
    </Link>
  
  </div>

  <div className="relative group">
    <Link
      to="/contact"
      className="px-2 py-1 hover:bg-gray-100 rounded transition"
    >
      Contact
    </Link>
  
  </div>

  <div className="relative group">
    <Link
      to="/about"
      className="px-2 py-1 hover:bg-gray-100 rounded transition"
    >
      About
    </Link>
  
  </div>
</nav>

          <div className="flex items-center gap-4">
            <div className="flex bg-gray-200 px-3 py-1 rounded-md w-[250px]">
              <input type="text" placeholder="What are you looking for?" className="w-[90%] outline-0" />
              <img src={search} alt="search" />
            </div>
<Link to="/wishlist">
            <button><img src={whishlist} alt="wishlist" /></button>
</Link>
<Link to="/cart">
            <button className=''><img src={store} alt="store" /></button>
</Link>

            <div>
              <Button
                aria-controls={userOpen ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={userOpen ? "true" : undefined}
                onClick={handleUserClick}
              >
                <img src={user} alt="user" />
              </Button>
              <Menu
                id="user-menu"
                anchorEl={userAnchor}
                open={userOpen}
                onClose={handleUserClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                

                <Link to='/create'>
                <MenuItem onClick={handleUserClose}>Create account</MenuItem>
                </Link>

                <Link to="/login">
                  <MenuItem onClick={handleUserClose}>Login</MenuItem>
                </Link>
                <Link to="/profile">
                  <MenuItem onClick={handleUserClose}>Profile</MenuItem>
                </Link>
              </Menu>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between w-full">
          <div className="flex gap-4 items-center">
            <Button onClick={handleMobileClick}>
              <img src={menu} alt="menu" />
            </Button>
            <h1 className="font-bold text-2xl">Exclusive</h1>
          </div>
          <img src={store} alt="store" />

          <Menu
            anchorEl={mobileAnchor}
            open={mobileOpen}
            onClose={handleMobileClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem onClick={handleMobileClose}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={handleMobileClose}><Link to="/contact">Contact</Link></MenuItem>
            <MenuItem onClick={handleMobileClose}><Link to="/about">About</Link></MenuItem>

            <MenuItem onClick={handleUserClick}>User Menu</MenuItem>
            <Menu
              anchorEl={userAnchor}
              open={userOpen}
              onClose={handleUserClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Link to={'/profile'}>
              <MenuItem onClick={handleUserClose}>Profile</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem onClick={handleUserClose}>Login</MenuItem>
              </Link>
            </Menu>
          </Menu>
        </div>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="bg-black text-white">
        <div className="flex gap-10 flex-wrap lg:justify-between px-7 py-10">
          <ul>
            <li className="font-bold py-2">Exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className="flex border rounded">
              <input type="text" className="outline-0" />
              <img src={send} alt="send" />
            </li>
          </ul>
          <ul>
            <li className="font-bold py-2">Support</li>
            <li>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
          <ul>
            <li className="font-bold py-2">Account</li>
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
          <ul>
            <li className="font-bold py-2">Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li className="font-bold py-2">Social</li>
            <li className="flex gap-1">
              <img src={faceb} alt="facebook" />
              <img src={twit} alt="twitter" />
              <img src={insta} alt="instagram" />
              <img src={linkd} alt="linkedin" />
            </li>
          </ul>
        </div>
        <hr className="text-gray-500" />
        <div className="flex gap-2 justify-center">
          <p className="text-gray-500">
            © Copyright Rimel 2022. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
