/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { TextField, Button, IconButton } from "@mui/material";
import { Google, Facebook, Twitter } from "@mui/icons-material";
import axios from "axios";
import Logo from "../images/Vizrt-Logo-Orange.webp";

//This is the Login Page component that will be displayed on the login page.
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

//This is the function that handles the login of the user
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "http://localhost:5065/user/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setError("");
      router.push("/profile");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data);
      } else {
        setError("Error logging in.");
      }
    }
  };
  
  return (
    //This is the main div that contains the login form
    <div className="flex flex-col items-center pb-6 pt-10 min-h-screen">
      <main
        className="w-full max-w-md space-y-8 px-8"
        style={{ minHeight: "500px" }}
      >
        <div className="flex justify-center mb-8">
          <Image src={Logo} alt="Vizrt Logo" width={150} height={50} />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white text-center">
          Login to your Account
        </h2>
        <form className="mt-8" onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ className: "bg-grey085 text-white" }}
            InputLabelProps={{ className: "text-grey035" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ className: "bg-grey085 text-white" }}
            InputLabelProps={{ className: "text-grey035" }}
          />
          {error && <div className="text-red01 mb-4">{error}</div>}
          <div className="flex items-center justify-between">
            <div className="text-sm ml-auto">
              <Link href="/forgot-password" passHref>
                <Button className="font-medium text-grey035 hover:text-white">
                  Forgot your password?
                </Button>
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-9 mb-4 bg-gradient-to-r from-brandOrange to-brandOrangeDarker"
          >
            Sign In
          </Button>
          <div className="flex items-center justify-center mb-4 text-grey035">
            <hr className="w-1/3 border-t border-grey035" />
            <span className="mx-2 text-center">Other sign in methods</span>
            <hr className="w-1/3 border-t border-grey035" />
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <IconButton className="w-10 h-10 rounded-full bg-white">
              <Google className="text-[#4285F4]" />
            </IconButton>
            <IconButton className="w-10 h-10 rounded-full bg-white">
              <Facebook className="text-[#4267B2]" />
            </IconButton>
            <IconButton className="w-10 h-10 rounded-full bg-white">
              <Twitter className="text-[#1DA1F2]" />
            </IconButton>
          </div>
          <Link href="/signup" passHref>
            <Button fullWidth className="text-brandOrange">
              Don't have an account? Sign Up
            </Button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
