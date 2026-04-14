import React from 'react';
import { Utensils, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold text-orange-500">NutriLife</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your Wellness is Our Priority. Personalized nutrition-based meal recommendations for healthier living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Meals</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Health Profiles</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 NutriLife. All rights reserved.</p>
            <p>Your Wellness is Our Priority ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
