import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Users, DollarSign, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HealthProfessional {
  id: number;
  name: string;
  specialty: string;
  icon: typeof User;
  price: number;
  rating: number;
  availability: string;
  bio: string;
}

export default function BookAppointment() {
  const [selectedProfessional, setSelectedProfessional] = useState<HealthProfessional | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: '',
  });

  const professionals: HealthProfessional[] = [
    {
      id: 1,
      name: 'Dr. Amodria Nalongo',
      specialty: 'Nutritionist',
      icon: Users,
      price: 150000,
      rating: 4.9,
      availability: 'Mon-Fri',
      bio: 'Certified Nutritionist with 10+ years experience',
    },
    {
      id: 2,
      name: 'Dr. Kwame Ssebo',
      specialty: 'Cardiologist',
      icon: Users,
      price: 200000,
      rating: 4.8,
      availability: 'Mon-Fri',
      bio: 'Heart health specialist',
    },
    {
      id: 3,
      name: 'Dr. Nafisa Kaweesi',
      specialty: 'Dietitian',
      icon: Users,
      price: 130000,
      rating: 4.7,
      availability: 'Tue-Sat',
      bio: 'Sports Dietitian & Wellness Coach',
    },
    {
      id: 4,
      name: 'Dr. Mukama Wamala',
      specialty: 'General Practitioner',
      icon: Users,
      price: 160000,
      rating: 4.8,
      availability: 'Mon-Fri',
      bio: 'Primary care physician',
    },
    {
      id: 5,
      name: 'Dr. Nalushiba Amina',
      specialty: 'Fitness Coach',
      icon: Users,
      price: 110000,
      rating: 4.9,
      availability: 'Mon-Sat',
      bio: 'Certified Personal Trainer & Health Coach',
    },
    {
      id: 6,
      name: 'Dr. Kofi Namirembe',
      specialty: 'Wellness Consultant',
      icon: Users,
      price: 140000,
      rating: 4.6,
      availability: 'Mon-Fri',
      bio: 'Holistic Health & Wellness Expert',
    },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProfessional && selectedDate && selectedTime && formData.fullName && formData.email && formData.phone) {
      alert(
        `Appointment booked with ${selectedProfessional.name} on ${selectedDate} at ${selectedTime}`
      );
      // Reset form
      setSelectedProfessional(null);
      setSelectedDate('');
      setSelectedTime('');
      setFormData({ fullName: '', email: '', phone: '', reason: '' });
    }
  };

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Book an Appointment</h1>
          <p className="text-gray-600">Schedule a consultation with our health professionals</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Professionals List */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Professional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionals.map((prof, index) => (
                <motion.div
                  key={prof.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProfessional(prof)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    selectedProfessional?.id === prof.id
                      ? 'bg-green-50 border-2 border-green-500 shadow-lg'
                      : 'bg-white border-2 border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="font-semibold text-gray-700">{prof.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-1">{prof.name}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-2">{prof.specialty}</p>
                  <p className="text-xs text-gray-600 mb-4">{prof.bio}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-gray-600">{prof.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign size={16} className="text-gray-500" />
                      <span className="text-gray-600">UGX {prof.price.toLocaleString()} per session</span>
                    </div>
                  </div>

                  {selectedProfessional?.id === prof.id && (
                    <div className="mt-4 pt-4 border-t border-green-200">
                      <span className="text-green-600 font-semibold text-sm flex items-center gap-2">
                        <ChevronRight size={16} />
                        Selected
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 sticky top-20">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Booking Details</h2>

              {selectedProfessional ? (
                <form onSubmit={handleBooking} className="space-y-4">
                  {/* Selected Professional Summary */}
                  <div className="bg-white rounded-lg p-4 mb-6 border-2 border-green-200">
                    <p className="text-sm text-gray-600 mb-1">Selected Professional</p>
                    <p className="font-bold text-gray-800">{selectedProfessional.name}</p>
                    <p className="text-sm text-green-600">{selectedProfessional.specialty}</p>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Clock size={16} className="inline mr-2" />
                      Select Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Choose a time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reason for Appointment (Optional)
                    </label>
                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder="Tell us why you need this appointment..."
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    />
                  </div>

                  {/* Total Price */}
                  <div className="bg-white rounded-lg p-3 flex justify-between items-center border-2 border-green-200">
                    <span className="font-semibold text-gray-700">Total</span>
                    <span className="text-2xl font-bold text-green-600">
                      UGX {selectedProfessional.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Book Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Confirm Booking
                  </motion.button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Users size={48} className="text-gray-300 mb-4" />
                  <p className="text-gray-600 font-medium">Select a professional to continue</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
