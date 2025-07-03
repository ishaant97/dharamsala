import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Car, Bed, Utensils, Camera } from 'lucide-react';

interface BudgetSectionProps {
  scrollProgress: number;
}

export const BudgetSection: React.FC<BudgetSectionProps> = ({ scrollProgress }) => {
  const budgetItems = [
    { label: 'Transport', amount: 798, icon: Car, color: 'from-blue-500 to-cyan-500', percentage: 40 },
    { label: 'Stay', amount: 400, icon: Bed, color: 'from-green-500 to-emerald-500', percentage: 20 },
    { label: 'Meals & Snacks', amount: 650, icon: Utensils, color: 'from-orange-500 to-yellow-500', percentage: 32 },
    { label: 'Sightseeing & Misc', amount: 150, icon: Camera, color: 'from-purple-500 to-pink-500', percentage: 8 },
  ];

  const isVisible = scrollProgress > 0.6;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Budget Breakdown
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for your perfect mountain getaway
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {budgetItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 50,
                scale: isVisible ? 1 : 0.9
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{item.label}</h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <IndianRupee className="h-6 w-6 text-green-400" />
                  <span className="text-3xl font-bold text-white">{item.amount}</span>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${item.percentage}%` : 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <p className="text-gray-400 text-sm">{item.percentage}% of total budget</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">Total Budget Per Person</h3>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <IndianRupee className="h-12 w-12 text-white" />
                <motion.span
                  className="text-7xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  1,998
                </motion.span>
              </div>
              <p className="text-2xl text-blue-100 mb-4">All-inclusive package for 2 amazing days</p>
              <p className="text-blue-200">✨ No hidden charges • Full transparency • Best value</p>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};