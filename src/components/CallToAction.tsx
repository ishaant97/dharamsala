import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, IndianRupee, ArrowRight, Download } from 'lucide-react';

interface CallToActionProps {
  scrollProgress: number;
}

export const CallToAction: React.FC<CallToActionProps> = ({ scrollProgress }) => {
  const isVisible = scrollProgress > 0.8;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-orange-900 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Roll?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Join us for an unforgettable adventure through the mystical hills of Himachal Pradesh. 
            <br />
            <span className="text-blue-400 font-semibold">Memories are waiting to be made!</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Let's Book This Trip!</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-md"
            >
              <Download className="h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
              <span>Download Itinerary</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <Users className="h-6 w-6 text-blue-400" />
              <div>
                <p className="text-white font-semibold">Group Size</p>
                <p className="text-gray-300">10 Students</p>
              </div>
            </div>
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
                <p className="text-white font-semibold">Total Cost</p>
                <p className="text-gray-300">₹1,998</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <p className="text-2xl text-blue-300 font-bold mb-4">
              "Travel far, laugh loud, split the fuel bill!" 😄
            </p>
            <p className="text-gray-400">
              Made with ❤️ for adventure seekers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};