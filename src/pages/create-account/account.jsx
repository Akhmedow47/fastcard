import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);


const handleSubmit = async () => {
  if (password !== confirmPassword) {
    message.error("Passwords do not match!");
    return;
  }

  try {
    const res = await MyAxios.post('/Account/register', {
      userName: name,
      phoneNumber: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });

    message.success("Account created successfully!");
    navigate("/login");
  } catch (err) {
    console.error(err.response?.data || err);
    message.error(err.response?.data?.errors?.[0] || "Error creating account");
  }
};

  return (
    <div className="flex justify-center">
      <div className="w-[500px] flex flex-col gap-4">
        <h1 className="text-[28px] lg:text-[48px] font-bold">
          Create an account
        </h1>
        <p className="lg:text-[28px]">Enter your details below</p>

        <Input
          size="large"
          placeholder="Name"
          prefix={<UserOutlined />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          size="large"
          placeholder="Phone number"
          prefix={<UserOutlined />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="email"
          size="large"
          placeholder="Email"
          prefix={<UserOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          size="large"
          placeholder="Password"
          prefix={<UserOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          size="large"
          placeholder="Confirm password"
          prefix={<UserOutlined />}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          type="primary"
          danger
          loading={loading}
          onClick={handleSubmit}
        >
          Create Account
        </Button>

        <h1 className="lg:text-[28px]">
          Already have account?{" "}
          <Link to={"/login"}>
            <span className="text-green-500">Log in</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Account;
