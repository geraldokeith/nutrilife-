import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password && confirmPassword && password === confirmPassword) {
      login(email, name, undefined, 'General Health');
      onClose();
      navigate('/health-profile');
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl my-8 mx-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-2xl font-bold text-green-900">Create Account</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} className="text-gray-600" />
          </motion.button>
          onSubmit={handleSignup}
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {/* Full Name Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-green-900 mb-2">
              Full Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-green-900 mb-2">
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
            />
          </motion.div>

          {/* Password Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-green-900 mb-2">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
            />
          </motion.div>

          {/* Confirm Password Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-green-900 mb-2">
              Confirm Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
            />
          </motion.div>

          {/* Sign Up Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-green-800 to-green-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition mt-6"
          >
            Create Account
          </motion.button>

          {/* Already have account Link */}
          <motion.div variants={itemVariants} className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Already have an account?{' '}
              <motion.button
                whileHover={{ color: '#FF6B35' }}
                type="button"
                onClick={() => {
                  onClose();
                  onSwitchToLogin();
                }}
                className="text-orange-600 font-bold hover:text-orange-700 transition"
              >
                Login
              </motion.button>
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
