import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { ItinerarySection } from './components/ItinerarySection';
import { BudgetSection } from './components/BudgetSection';
import { CallToAction } from './components/CallToAction';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="relative">
      <ScrollProgress onProgressChange={setScrollProgress} />
      
      <HeroSection />
      <JourneySection scrollProgress={scrollProgress} />
      <ItinerarySection scrollProgress={scrollProgress} />
      <BudgetSection scrollProgress={scrollProgress} />
      <CallToAction scrollProgress={scrollProgress} />
    </div>
  );
}

export default App;