import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TextField, Button, IconButton } from '@mui/material';
import { Google, Facebook, Twitter } from '@mui/icons-material';
import Logo from "../images/Vizrt-Logo-Orange.webp";
const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-6 pt-10 min-h-screen">
      <main className="w-full max-w-md space-y-8 px-8" style={{ minHeight: '500px' }}>
        <div className="flex justify-center mb-8">
          <Image src={Logo} alt="Vizrt Logo" width={150} height={50} />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white text-center">Login to your Account</h2>
        <form className="mt-8">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            InputProps={{ className: 'bg-gray-700 text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
            InputProps={{ className: 'bg-gray-700 text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />
          <div className="flex items-center justify-between">
            <div className="text-sm ml-auto">
              <Link href="/forgot-password" passHref>
                <Button className="font-medium text-gray-400 hover:text-white">Forgot your password?</Button>
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-9 mb-4"
            style={{ backgroundColor: '#ff7f50', color: '#fff' }}
          >
            Sign In
          </Button>
          <div className="flex items-center justify-center mb-4 text-gray-400">
            <hr className="w-1/3 border-t border-gray-400" />
            <span className="mx-2 text-center">Other sign in methods</span>
            <hr className="w-1/3 border-t border-gray-400" />
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
            <Button fullWidth className="text-[#ff7f50]">Don't have an account? Sign Up</Button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
