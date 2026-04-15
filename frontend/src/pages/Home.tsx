import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import eatHealthyImg from '../assets/eat healthy.jpg';

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInVariants}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Wellness is Our Priority
              </h1>
              <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                Get personalized meal recommendations based on your health conditions, dietary needs, and lifestyle goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 hover:bg-orange-50 transition font-bold text-lg rounded-lg flex items-center justify-center gap-2 group"
                  asChild
                >
                  <Link to="/health-profile">
                    Get Started 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white hover:bg-orange-700 transition font-bold text-lg rounded-lg"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRightVariants}
              className="bg-white rounded-2xl p-12 text-center shadow-2xl"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-4 flex justify-center"
              >
                <img 
                  src={eatHealthyImg} 
                  alt="Eat Healthy" 
                  className="w-64 h-64 object-cover rounded-xl"
                />
              </motion.div>
              <p className="text-2xl font-bold text-orange-600">Eat Healthy, Live Better</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Why Choose NutriLife?
            </h2>
            <p className="text-xl text-green-700">
              Everything you need for a healthier lifestyle
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">Personalized Meals</h3>
              <p className="text-green-700 mb-6 leading-relaxed">
                Get meal recommendations tailored to your health profile, dietary restrictions, and personal preferences.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Diabetic-friendly options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Low sodium meals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Weight loss plans</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">Health Tracking</h3>
              <p className="text-green-700 mb-6 leading-relaxed">
                Monitor your nutrition intake, calories, sodium levels, and other health metrics in real-time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Calorie tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Nutrition insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Progress reports</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">Smart Recommendations</h3>
              <p className="text-green-700 mb-6 leading-relaxed">
                AI-powered suggestions that learn from your preferences and health goals over time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">AI recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Personalized plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-orange-600" />
                  <span className="text-green-700">Expert suggestions</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-green-700">
              Get started in just 3 simple steps
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div
              variants={scaleVariants}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl font-bold text-orange-600">1</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-center text-green-900 mb-3">Create Profile</h3>
              <p className="text-center text-green-700 leading-relaxed">
                Sign up and tell us about your health conditions, dietary preferences, and lifestyle goals.
              </p>
              <div className="hidden md:block absolute top-10 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={scaleVariants}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl font-bold text-orange-600">2</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-center text-green-900 mb-3">Get Recommendations</h3>
              <p className="text-center text-green-700 leading-relaxed">
                Receive personalized meal recommendations from our AI system and partner restaurants.
              </p>
              <div className="hidden md:block absolute top-10 left-0 w-[40%] h-0.5 bg-gradient-to-l from-orange-400 to-transparent"></div>
              <div className="hidden md:block absolute top-10 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={scaleVariants}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl font-bold text-orange-600">3</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-center text-green-900 mb-3">Order Healthy Meals</h3>
              <p className="text-center text-green-700 leading-relaxed">
                Browse, order, and enjoy nutritious meals delivered to your doorstep with real-time tracking.
              </p>
              <div className="hidden md:block absolute top-10 left-0 w-[40%] h-0.5 bg-gradient-to-l from-orange-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials / Benefits */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-green-50 to-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-green-700">
              See what our users have to say about NutriLife
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Testimonial 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-green-700 mb-4 italic leading-relaxed">
                "NutriLife helped me manage my diabetes with personalized meal plans. My blood sugar levels have improved significantly!"
              </p>
              <div>
                <p className="font-bold text-green-900">Amara Adeyemi</p>
                <p className="text-sm text-green-600">Diabetes Management</p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-green-700 mb-4 italic leading-relaxed">
                "The AI recommendations are spot on! I lost 12kg in 3 months without feeling deprived."
              </p>
              <div>
                <p className="font-bold text-green-900">Chisom Okoro</p>
                <p className="text-sm text-green-600">Weight Loss</p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-green-700 mb-4 italic leading-relaxed">
                "Fast delivery and incredibly healthy meals. My blood pressure readings have never been better!"
              </p>
              <div>
                <p className="font-bold text-green-900">Dr. Emeka Nwosu</p>
                <p className="text-sm text-green-600">Hypertension Management</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-green-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-orange-500 mb-2"
              >
                100K+
              </motion.p>
              <p className="text-green-100 text-lg">Active Users</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-orange-500 mb-2"
              >
                50K+
              </motion.p>
              <p className="text-green-100 text-lg">Healthy Meals</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-orange-500 mb-2"
              >
                500+
              </motion.p>
              <p className="text-green-100 text-lg">Restaurant Partners</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-orange-500 mb-2"
              >
                4.8★
              </motion.p>
              <p className="text-green-100 text-lg">Average Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your Health Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-orange-50 mb-8"
          >
            Join thousands of people improving their health with personalized nutrition today.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-orange-600 hover:bg-orange-50 transition font-bold text-lg rounded-lg inline-flex items-center gap-2 group"
          >
            Get Started Free
            <ArrowRight size={24} className="group-hover:translate-x-1 transition" />
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}
