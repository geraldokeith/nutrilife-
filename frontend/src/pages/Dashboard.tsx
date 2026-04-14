import React, { useState } from 'react';
import { Search, Bell, User, ChevronRight, Utensils, Fish, Leaf, Drumstick, Salad, Stethoscope, Scale, Bird, Users2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  // Sample meal data
  const recommendedMeals = [
    {
      id: 1,
      name: 'Grilled Salmon',
      category: 'High Protein',
      icon: Fish,
      calories: 350,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Quinoa Bowl',
      category: 'Vegetarian',
      icon: Leaf,
      calories: 280,
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Chicken Stir Fry',
      category: 'Low Carb',
      icon: Drumstick,
      calories: 320,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Greek Salad',
      category: 'Low Calorie',
      icon: Salad,
      calories: 200,
      rating: 4.5,
    },
  ];

  const categories = [
    { name: 'Diabetes', icon: Stethoscope, color: 'from-blue-500 to-blue-600' },
    { name: 'Weight Loss', icon: Scale, color: 'from-purple-500 to-purple-600' },
    { name: 'Low Sodium', icon: Bird, color: 'from-orange-500 to-orange-600' },
    { name: 'Elderly', icon: Users2, color: 'from-green-500 to-green-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 bg-white shadow-sm z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search meals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-gray-600 hover:text-green-600 transition"
              >
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                <User size={24} className="text-gray-700" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Stats Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* BMI Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg"
          >
            <p className="text-sm font-semibold opacity-90">Your BMI</p>
            <p className="text-4xl font-bold mt-3">{user?.bmi || 'N/A'}</p>
            <p className="text-xs opacity-75 mt-2">Body Mass Index</p>
          </motion.div>

          {/* Goal Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg"
          >
            <p className="text-sm font-semibold opacity-90">Your Goal</p>
            <p className="text-2xl font-bold mt-3">{user?.goal || 'General Health'}</p>
            <p className="text-xs opacity-75 mt-2">Primary Objective</p>
          </motion.div>

          {/* Progress Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg"
          >
            <p className="text-sm font-semibold opacity-90">Progress</p>
            <p className="text-3xl font-bold mt-2">65%</p>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-3">
              <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs opacity-75 mt-2">to goal</p>
          </motion.div>
        </motion.div>

        {/* Recommended Meals */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Utensils size={32} className="text-green-600" />
            Recommended Meals For You
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {recommendedMeals.map((meal, index) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              >
                <div className="h-32 bg-gradient-to-br from-orange-400 to-orange-300 rounded-t-xl flex items-center justify-center">
                  {React.createElement(meal.icon, { size: 64, className: 'text-orange-600' })}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase font-semibold">{meal.category}</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">{meal.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-600">{meal.calories} cal</p>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <p className="text-sm font-semibold text-yellow-500">{meal.rating}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${category.color} text-white rounded-xl p-8 cursor-pointer shadow-lg hover:shadow-xl transition`}
              >
                <div className="mb-4">
                  {React.createElement(category.icon, { size: 48 })}
                </div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="text-white text-opacity-80 mt-2">Explore recipes</p>
                <ChevronRight className="mt-4" size={24} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-8 shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4">View All Meals</h3>
            <p className="text-orange-100 mb-6">Browse our complete collection of nutritious meals tailored to your preferences</p>
            <Link to="/meals" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-2 rounded-lg hover:bg-orange-50 transition">
              Explore <ChevronRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-8 shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4">Track Your Orders</h3>
            <p className="text-green-100 mb-6">Monitor your meal deliveries and view your order history</p>
            <Link to="/orders" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-6 py-2 rounded-lg hover:bg-green-50 transition">
              View Orders <ChevronRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
