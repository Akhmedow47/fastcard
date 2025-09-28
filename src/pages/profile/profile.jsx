import React, { useEffect, useState } from "react";
import axios from "axios";
import { SaveToken } from "@/utils/token"; // ✅ your helper from login

const Profile = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
useEffect(() => {
  const savedUser = localStorage.getItem("userName");
  if (savedUser) {
    setForm((prev) => ({ ...prev, firstName: savedUser }));
  }
}, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://37.27.29.18:8002/Account/login", {
        userName: form.firstName,
        password: form.currentPassword, 
      });

      if (response.data) {
        SaveToken(response.data); 
        alert("Profile saved (login successful)!");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("Login failed. Please check your username/password.");
    }
  };

  return (
    <div className="min-h-screen flex p-10">
      <div className="w-1/4 text-gray-700 space-y-6">
        <div>
          <h2 className="font-semibold">Manage My Account</h2>
          <ul className="space-y-2 ml-3 mt-2">
            <li className="text-red-500 font-medium">My Profile</li>
            <li className="hover:text-red-500 cursor-pointer">Address Book</li>
            <li className="hover:text-red-500 cursor-pointer">My Payment Options</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">My Orders</h2>
          <ul className="space-y-2 ml-3 mt-2">
            <li className="hover:text-red-500 cursor-pointer">My Returns</li>
            <li className="hover:text-red-500 cursor-pointer">My Cancellations</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">My WishList</h2>
        </div>
      </div>

      <div className="w-3/4 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-red-500 font-semibold text-xl mb-6">Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">First name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Last name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border rounded p-2"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded p-2"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Street address</label>
              <input
                type="text"
                name="street"
                value={form.street}
                onChange={handleChange}
                className="w-full border rounded p-2"
                disabled
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Password Changes</h3>
            <div className="space-y-4">
              <input
                type="password"
                name="currentPassword"
                placeholder="Current password"
                value={form.currentPassword}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  disabled
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
