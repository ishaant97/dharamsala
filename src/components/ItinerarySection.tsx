import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Utensils, Camera, Mountain, Users } from 'lucide-react';

interface ItinerarySectionProps {
  scrollProgress: number;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ scrollProgress }) => {
  const day1Activities = [
    { time: '05:00 AM', activity: 'Gather at Law Gate, Jalandhar', icon: Users, emoji: '🚀' },
    { time: '05:30 AM', activity: 'Depart for Dharamshala (~177 km)', icon: MapPin, emoji: '🚗' },
    { time: '07:30 AM', activity: 'Roadside breakfast: Paratha + chai', icon: Utensils, emoji: '🥪' },
    { time: '12:00 PM', activity: 'Arrive in McLeod Ganj, hostel check-in', icon: Mountain, emoji: '🏨' },
    { time: '02:00 PM', activity: 'Visit Bhagsunag Temple & Waterfall', icon: Camera, emoji: '🏞️' },
    { time: '05:30 PM', activity: 'Visit Dalai Lama Temple', icon: Mountain, emoji: '🏛️' },
    { time: '08:00 PM', activity: 'Dinner at Tibetan café (Momos + Thukpa)', icon: Utensils, emoji: '🥟' },
  ];

  const day2Activities = [
    { time: '07:30 AM', activity: 'Wake-up, hostel breakfast', icon: Utensils, emoji: '🌅' },
    { time: '09:30 AM', activity: 'Explore Kangra Fort (₹40 entry)', icon: Mountain, emoji: '🏰' },
    { time: '11:00 AM', activity: 'Visit Chamunda Devi Temple', icon: Mountain, emoji: '🙏' },
    { time: '02:00 PM', activity: 'Depart Dharamshala → Jalandhar', icon: MapPin, emoji: '🏠' },
    { time: '08:00 PM', activity: 'Reach Jalandhar Law Gate', icon: MapPin, emoji: '🎯' },
  ];

  const isVisible = scrollProgress > 0.3;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our carefully crafted itinerary through the mystical hills of Himachal Pradesh
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Day 1</h3>
              <p className="text-blue-400 text-lg">Saturday - The Adventure Begins</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {day1Activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative flex items-start space-x-6 mb-6 group"
                >
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <span className="font-bold text-blue-400">{activity.time}</span>
                      </div>
                      <span className="text-2xl">{activity.emoji}</span>
                    </div>
                    <p className="text-white font-medium">{activity.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Day 2</h3>
              <p className="text-orange-400 text-lg">Sunday - Exploration & Return</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>
              {day2Activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative flex items-start space-x-6 mb-6 group"
                >
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-400" />
                        <span className="font-bold text-orange-400">{activity.time}</span>
                      </div>
                      <span className="text-2xl">{activity.emoji}</span>
                    </div>
                    <p className="text-white font-medium">{activity.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};