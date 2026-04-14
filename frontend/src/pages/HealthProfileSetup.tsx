import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

export default function HealthProfileSetup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    medicalConditions: [] as string[],
    lifestyle: '',
    goals: '',
  });

  const medicalConditionOptions = [
    { id: 'diabetes', label: 'Diabetes' },
    { id: 'hypertension', label: 'High Blood Pressure' },
    { id: 'heart_disease', label: 'Heart Disease' },
    { id: 'asthma', label: 'Asthma' },
    { id: 'thyroid', label: 'Thyroid Disorder' },
    { id: 'none', label: 'None' },
  ];

  const lifestyleOptions = [
    { id: 'sedentary', label: 'Sedentary (Little exercise)' },
    { id: 'light', label: 'Light (1-3 days/week)' },
    { id: 'moderate', label: 'Moderate (3-5 days/week)' },
    { id: 'active', label: 'Active (6-7 days/week)' },
  ];

  const goalOptions = [
    { id: 'weight_loss', label: 'Weight Loss' },
    { id: 'muscle_gain', label: 'Muscle Gain' },
    { id: 'maintenance', label: 'Maintain Weight' },
    { id: 'general_health', label: 'General Health' },
    { id: 'endurance', label: 'Build Endurance' },
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConditionToggle = (conditionId: string) => {
    setFormData((prev) => {
      const currentConditions = prev.medicalConditions;
      if (currentConditions.includes(conditionId)) {
        return {
          ...prev,
          medicalConditions: currentConditions.filter(c => c !== conditionId),
        };
      } else {
        return {
          ...prev,
          medicalConditions: [...currentConditions, conditionId],
        };
      }
    });
  };

  const isStep1Valid = formData.age && formData.weight && formData.height;
  const isStep2Valid = formData.medicalConditions.length > 0 && formData.lifestyle;
  const isStep3Valid = formData.goals;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    if (isStep3Valid) {
      console.log('Saving health profile:', formData);
      // TODO: Save to backend
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 pt-24 pb-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-900 mb-2">
            Complete Your Health Profile
          </h1>
          <p className="text-gray-600">
            Help us personalize your nutrition recommendations
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: step * 0.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    currentStep >= step
                      ? 'bg-gradient-to-r from-green-800 to-green-700 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step ? (
                    <Check size={24} />
                  ) : (
                    step
                  )}
                </motion.div>

                {step < 3 && (
                  <motion.div
                    variants={progressVariants}
                    initial="hidden"
                    animate={currentStep > step ? 'visible' : 'hidden'}
                    className="h-1 flex-1 mx-2 bg-gradient-to-r from-green-800 to-orange-600 origin-left"
                  />
                )}
                {step < 3 && currentStep <= step && (
                  <div className="h-1 flex-1 mx-2 bg-gray-200" />
                )}
              </div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="flex justify-between text-sm text-gray-600">
            <span className={currentStep === 1 ? 'text-green-900 font-semibold' : ''}>
              Basic Info
            </span>
            <span className={currentStep === 2 ? 'text-green-900 font-semibold' : ''}>
              Health Conditions
            </span>
            <span className={currentStep === 3 ? 'text-green-900 font-semibold' : ''}>
              Goals
            </span>
          </div>
        </motion.div>

        {/* Form Content */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold text-green-900 mb-8">Basic Information</h2>

                <div className="space-y-6">
                  {/* Age */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      placeholder="Enter your age"
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
                    />
                  </motion.div>

                  {/* Weight */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Weight (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      placeholder="Enter your weight"
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
                    />
                  </motion.div>

                  {/* Height */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Height (cm) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      placeholder="Enter your height"
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-green-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder:text-gray-400"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Health Conditions & Lifestyle */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold text-green-900 mb-8">Health Profile</h2>

                <div className="space-y-8">
                  {/* Medical Conditions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-green-900 mb-4">
                      Medical Conditions <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {medicalConditionOptions.map((condition) => (
                        <motion.label
                          key={condition.id}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-300 transition"
                        >
                          <input
                            type="checkbox"
                            checked={formData.medicalConditions.includes(condition.id)}
                            onChange={() => handleConditionToggle(condition.id)}
                            className="w-5 h-5 text-green-800 rounded focus:ring-2 focus:ring-orange-500"
                          />
                          <span className="ml-3 text-gray-900 font-medium">
                            {condition.label}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Lifestyle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-green-900 mb-4">
                      Activity Level <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {lifestyleOptions.map((lifestyle) => (
                        <motion.label
                          key={lifestyle.id}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-300 transition"
                        >
                          <input
                            type="radio"
                            name="lifestyle"
                            value={lifestyle.id}
                            checked={formData.lifestyle === lifestyle.id}
                            onChange={() => handleInputChange('lifestyle', lifestyle.id)}
                            className="w-5 h-5 text-green-800 focus:ring-2 focus:ring-orange-500"
                          />
                          <span className="ml-3 text-gray-900 font-medium">
                            {lifestyle.label}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Goals */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold text-green-900 mb-8">Your Goals</h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-green-900 mb-4">
                    What's your primary goal? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {goalOptions.map((goal) => (
                      <motion.label
                        key={goal.id}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-300 transition"
                      >
                        <input
                          type="radio"
                          name="goals"
                          value={goal.id}
                          checked={formData.goals === goal.id}
                          onChange={() => handleInputChange('goals', goal.id)}
                          className="w-5 h-5 text-green-800 focus:ring-2 focus:ring-orange-500"
                        />
                        <span className="ml-3 text-gray-900 font-medium">
                          {goal.label}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-12 pt-8 border-t border-gray-200"
          >
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="flex-1 px-6 py-3 text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-50 transition font-semibold"
              >
                Back
              </motion.button>
            )}

            {currentStep < 3 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !isStep1Valid) ||
                  (currentStep === 2 && !isStep2Valid)
                }
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  (currentStep === 1 && !isStep1Valid) ||
                  (currentStep === 2 && !isStep2Valid)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-800 to-green-700 text-white hover:shadow-lg'
                }`}
              >
                Next <ChevronRight size={20} />
              </motion.button>
            )}

            {currentStep === 3 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                disabled={!isStep3Valid}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  !isStep3Valid
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:shadow-lg'
                }`}
              >
                Save & Continue <Check size={20} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 mt-8 text-sm"
        >
          Your health information is private and secure • It helps us give better recommendations
        </motion.p>
      </div>
    </div>
  );
}
