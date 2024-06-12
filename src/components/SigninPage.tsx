import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TextField, Button, IconButton, Typography } from '@mui/material';
import { Google, Facebook, Twitter } from '@mui/icons-material';
import axios from 'axios';
import Logo from "../images/Vizrt-Logo-Orange.webp";
import router from 'next/router';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post("http://localhost:5065/user/signup", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.Message);
      setError('');
      router.push('/login');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data);
      } else {
        setError("Error signing up.");
      }
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center pb-6 pt-10 min-h-screen">
      <main className="w-full max-w-md space-y-8 px-8" style={{ minHeight: '500px' }}>
        <div className="flex justify-center mb-8">
          <Image src={Logo} alt="Vizrt Logo" width={150} height={50} />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white text-center">Create an Account</h2>
        <form className="mt-8" onSubmit={handleSignup}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ className: 'bg-gray-700 text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ className: 'bg-gray-700 text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{ className: 'bg-gray-700 text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />
          {error && (
            <Typography color="error" className="mb-4">
              {error}
            </Typography>
          )}
          {message && (
            <Typography color="primary" className="mb-4">
              {message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mb-4 bg-gradient-to-r from-orange-500 to-orange-800"
          >
            Sign Up
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
          <Link href="/login" passHref>
            <Button fullWidth className="text-[#ff7f50]">Already have an account? Sign In</Button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;
