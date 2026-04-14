import React from 'react';
import { Home, Utensils, FolderOpen, ShoppingCart, Package, Heart, BarChart3, User, CreditCard, Bell, Settings, LogOut, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { logout } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Utensils, label: 'Meal Recommendations', href: '/meals' },
    { icon: FolderOpen, label: 'Meal Categories', href: '/categories' },
    { icon: ShoppingCart, label: 'My Orders', href: '/orders' },
    { icon: Package, label: 'Order Tracking', href: '/tracking' },
    { icon: Heart, label: 'Saved Meals', href: '/saved' },
    { icon: BarChart3, label: 'Health Dashboard', href: '/health-dashboard' },
    { icon: User, label: 'My Profile', href: '/health-profile' },
    { icon: Calendar, label: 'Book Appointment', href: '/book-appointment' },
    { icon: CreditCard, label: 'Subscription', href: '/subscription' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-gradient-to-b from-green-900 to-green-800 shadow-lg overflow-y-auto z-40"
    >
      <div className="py-8 px-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.href}>
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-100 hover:bg-green-700 hover:text-white transition-all group cursor-pointer"
            >
              <item.icon size={20} className="group-hover:text-orange-400 transition" />
              <span className="font-medium text-sm">{item.label}</span>
            </motion.div>
          </Link>
        ))}

        {/* Divider */}
        <div className="my-4 border-t border-green-700"></div>

        {/* Logout Button */}
        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={logout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-300 hover:bg-red-900 hover:text-red-100 transition-all group"
        >
          <LogOut size={20} className="group-hover:text-red-400 transition" />
          <span className="font-medium text-sm">Logout</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
