
import React, { useState } from 'react';
import { AIContentHelper } from '../components/AIContentHelper';

const About = () => {
  const [generatedAbout, setGeneratedAbout] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-evergreen-primary mb-8 text-center">Rooted in Montgomery County</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <img 
              src="https://picsum.photos/id/342/600/800" 
              alt="Founding team" 
              className="rounded-3xl shadow-xl aspect-[3/4] object-cover"
            />
            <div>
              <h2 className="text-2xl font-display font-bold text-evergreen-dark mb-6">Since 2018, our heart has been in Collegeville.</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evergreen Care PA was born out of a simple observation: our neighbors needed more than just caregivers—they needed consistency, friendship, and someone who actually knows their name and how they like their tea.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that aging shouldn't mean losing your identity or your home. Our mission is to bridge the gap between needing help and staying independent.
              </p>
            </div>
          </div>

          <div className="bg-evergreen-cream p-12 rounded-3xl mb-16 border border-evergreen-sage/30">
            <h3 className="text-2xl font-display font-bold text-evergreen-primary mb-6">Our Promise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-evergreen-gold font-bold text-3xl mb-2">Stability</div>
                <p className="text-sm text-gray-600">The same friendly faces every day, not a rotating door of strangers.</p>
              </div>
              <div>
                <div className="text-evergreen-gold font-bold text-3xl mb-2">Dignity</div>
                <p className="text-sm text-gray-600">Empowering seniors to keep their routines and make their own choices.</p>
              </div>
              <div>
                <div className="text-evergreen-gold font-bold text-3xl mb-2">Trust</div>
                <p className="text-sm text-gray-600">Locally licensed and highly transparent communication with families.</p>
              </div>
            </div>
          </div>

          {/* AI Content Generation for specific "About Us" content */}
          <div className="mt-12">
            {generatedAbout ? (
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-evergreen-gold prose prose-evergreen max-w-none">
                <h3 className="text-evergreen-primary font-display font-bold text-xl mb-4 italic">Your Custom Generated Story:</h3>
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {generatedAbout}
                </div>
                <button 
                  onClick={() => setGeneratedAbout(null)}
                  className="mt-6 text-evergreen-gold font-bold hover:underline"
                >
                  Regenerate or Try Again
                </button>
              </div>
            ) : (
              <AIContentHelper 
                sectionTitle="Our Detailed Company Story" 
                onGenerate={setGeneratedAbout} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
