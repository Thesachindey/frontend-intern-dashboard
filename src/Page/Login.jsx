import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/api';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data.email, data.password);
      if (response.token) {
        login(response.token);
        navigate('/dashboard');
      }
    } catch (error) {
      alert("Invalid credentials. Please use:\nEmail: user1@example.com\nPassword: password123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-donezo-bg font-sans px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 md:p-12 rounded-4xl shadow-soft w-full max-w-[450px]"
      >
        {/* Donezo Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-donezo-dark rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-donezo-dark/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Donezo</h2>
          <p className="text-slate-500 text-sm mt-2">Welcome back! Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-slate-700">Email Address</span>
            </label>
            <input 
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
              type="email" 
              placeholder="e.g. user1@example.com"
              className={`input input-bordered w-full h-14 rounded-2xl bg-slate-50 border-slate-200 focus:bg-white focus:border-donezo-dark transition-all ${errors.email ? 'input-error border-red-500' : ''}`} 
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-slate-700">Password</span>
              <span className="label-text-alt text-donezo-dark font-medium cursor-pointer hover:underline">Forgot?</span>
            </label>
            <input 
              {...register("password", { required: "Password is required" })}
              type="password" 
              placeholder="••••••••"
              className={`input input-bordered w-full h-14 rounded-2xl bg-slate-50 border-slate-200 focus:bg-white focus:border-donezo-dark transition-all ${errors.password ? 'input-error border-red-500' : ''}`} 
            />
            {errors.password && <span className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</span>}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn h-14 bg-donezo-dark hover:bg-donezo-accent text-white w-full rounded-2xl border-none mt-4 text-lg font-bold normal-case shadow-lg shadow-donezo-dark/10"
          >
            {isSubmitting ? <span className="loading loading-spinner"></span> : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Don't have an account? <span className="text-donezo-dark font-bold cursor-pointer hover:underline">Sign up for free</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;