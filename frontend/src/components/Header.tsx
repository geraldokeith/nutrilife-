import React, { useState } from 'react';
import { Menu, X, Utensils, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-gradient-to-r from-green-800 to-green-700 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="bg-orange-500 p-2 rounded-lg">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">NutriLife</span>
          </motion.div>

          {/* Welcome Message */}
          {isAuthenticated && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center"
            >
              <p className="text-white text-lg font-semibold">Welcome back, {user?.name}!</p>
            </motion.div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {!isAuthenticated && (
              <>
                <Link to="/" className="text-white hover:text-orange-400 transition">
                  Home
                </Link>
                <a href="#meals" className="text-white hover:text-orange-400 transition">
                  Meals
                </a>
                <a href="#categories" className="text-white hover:text-orange-400 transition">
                  Categories
                </a>
                <a href="#about" className="text-white hover:text-orange-400 transition">
                  About
                </a>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-4"
          >
            {isAuthenticated ? (
              <>
                <span className="text-white font-semibold">{user?.name}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={logout}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-6 py-2 text-green-700 bg-white rounded-lg hover:bg-green-50 transition font-semibold"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSignupModalOpen(true)}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
                >
                  Sign Up
                </motion.button>
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2 bg-green-700">
            {!isAuthenticated && (
              <>
                <Link to="/" className="block px-4 py-2 text-white hover:bg-green-600 rounded">
                  Home
                </Link>
                <a href="#meals" className="block px-4 py-2 text-white hover:bg-green-600 rounded">
                  Meals
                </a>
                <a href="#categories" className="block px-4 py-2 text-white hover:bg-green-600 rounded">
                  Categories
                </a>
                <a href="#about" className="block px-4 py-2 text-white hover:bg-green-600 rounded">
                  About
                </a>
                <div className="flex gap-2 px-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLoginModalOpen(true)}
                    className="flex-1 px-4 py-2 text-green-700 bg-white rounded-lg font-semibold"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSignupModalOpen(true)}
                    className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold"
                  >
                    Sign Up
                  </motion.button>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Modal Components */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onSwitchToSignup={() => {
            setIsLoginModalOpen(false);
            setIsSignupModalOpen(true);
          }}
        />
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={() => setIsSignupModalOpen(false)}
          onSwitchToLogin={() => {
            setIsSignupModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      </div>
    </motion.nav>
  );
}
