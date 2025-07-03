import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, IndianRupee, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <Users className="h-5 w-5 text-blue-400" />
            <span className="text-white font-medium">10 College Students Adventure</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Hills & Thrills
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Jalandhar → Dharamshala
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Embark on an epic 2-day journey through the mystical hills of Himachal Pradesh. 
            Follow our adventure as we wind through mountain roads, discover hidden temples, 
            and create memories that will last a lifetime.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <Calendar className="h-6 w-6 text-green-400" />
            <div>
              <p className="text-white font-semibold">Duration</p>
              <p className="text-gray-300">2 Days</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <IndianRupee className="h-6 w-6 text-yellow-400" />
            <div>
              <p className="text-white font-semibold">Budget</p>
              <p className="text-gray-300">₹1,998/person</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <MapPin className="h-6 w-6 text-red-400" />
            <div>
              <p className="text-white font-semibold">Distance</p>
              <p className="text-gray-300">177 km</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Scroll to begin the journey</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};