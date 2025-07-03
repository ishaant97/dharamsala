import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Car, MapPin, Clock, Mountain } from 'lucide-react';

interface JourneySectionProps {
  scrollProgress: number;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ scrollProgress }) => {
  const { scrollYProgress } = useScroll();
  
  const carX = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);
  const carY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, -20, -40]);
  
  const journeyPoints = [
    { 
      progress: 0.2, 
      title: "Departure from Jalandhar", 
      time: "05:30 AM",
      description: "Early morning start from Law Gate",
      icon: Car,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      progress: 0.35, 
      title: "Roadside Breakfast", 
      time: "07:30 AM",
      description: "Hot parathas and chai",
      icon: MapPin,
      color: "from-orange-500 to-yellow-500"
    },
    { 
      progress: 0.5, 
      title: "Arrival in McLeod Ganj", 
      time: "12:00 PM",
      description: "Check-in at hostel",
      icon: Mountain,
      color: "from-green-500 to-emerald-500"
    },
    { 
      progress: 0.65, 
      title: "Bhagsunag Waterfall", 
      time: "02:00 PM",
      description: "Temple visit and waterfall trek",
      icon: Mountain,
      color: "from-purple-500 to-pink-500"
    },
    { 
      progress: 0.8, 
      title: "Return Journey", 
      time: "02:00 PM (Day 2)",
      description: "Heading back to Jalandhar",
      icon: Car,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="relative min-h-[400vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Mountain Silhouettes */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 300" fill="none">
          <path
            d="M0 300L50 250C100 200 200 100 300 80C400 60 500 120 600 140C700 160 800 120 900 100C1000 80 1100 80 1150 80L1200 80V300H0Z"
            fill="url(#mountain-gradient)"
            opacity="0.3"
          />
          <path
            d="M0 300L80 280C160 260 320 220 480 200C640 180 800 180 960 190C1120 200 1280 220 1360 230L1440 240V300H0Z"
            fill="url(#mountain-gradient-2)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="mountain-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Road Path */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 10 90 Q 30 70 50 60 T 90 30"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2,2"
          />
        </svg>
      </div>

      {/* Moving Car */}
      <motion.div
        className="fixed z-20"
        style={{
          left: `${10 + scrollProgress * 70}%`,
          top: `${70 - scrollProgress * 40}%`,
          x: carX,
          y: carY,
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Car className="h-8 w-8 text-blue-400 drop-shadow-lg" />
          <motion.div
            className="absolute -bottom-2 -left-1 w-10 h-1 bg-blue-400/30 rounded-full blur-sm"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Journey Points */}
      <div className="relative z-10">
        {journeyPoints.map((point, index) => {
          const isActive = scrollProgress >= point.progress - 0.05;
          const IconComponent = point.icon;
          
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${20 + point.progress * 60}%`,
                top: `${80 - point.progress * 50}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.8,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center shadow-2xl border-4 border-white/20`}
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(59, 130, 246, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold">{point.time}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                      <p className="text-gray-300 text-sm">{point.description}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Parallax Clouds */}
      <motion.div
        className="fixed top-20 left-10 w-20 h-12 bg-white/10 rounded-full blur-sm"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
      />
      <motion.div
        className="fixed top-32 right-20 w-32 h-20 bg-white/5 rounded-full blur-sm"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, -150]),
        }}
      />
    </section>
  );
};