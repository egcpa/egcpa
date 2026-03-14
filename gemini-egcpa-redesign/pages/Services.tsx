
import React, { useState } from 'react';
import { AIContentHelper } from '../components/AIContentHelper';

const Services = () => {
  const [generatedServiceContent, setGeneratedServiceContent] = useState<string | null>(null);

  const services = [
    {
      title: "Personal Care",
      desc: "Helping with daily living tasks while preserving self-esteem and privacy.",
      features: ["Bathing & Dressing", "Incontinence Care", "Mobility Assistance"]
    },
    {
      title: "Dementia & Alzheimer's",
      desc: "Specialized care focused on safety, mental engagement, and patience.",
      features: ["Memory Games", "Routine Maintenance", "Safety Monitoring"]
    },
    {
      title: "Companion Care",
      desc: "Alleviating loneliness with meaningful social interaction and support.",
      features: ["Errands & Grocery", "Conversation", "Light Housekeeping"]
    },
    {
      title: "Respite Care",
      desc: "Giving family caregivers the necessary break to recharge and stay healthy.",
      features: ["Short-term stays", "Emergency coverage", "Peace of mind"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-evergreen-primary mb-6">Expert Care, Tailored to You</h1>
          <p className="text-xl text-gray-600">Each plan is unique. We match our expertise to your specific needs, ensuring comfort and independence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-10 border border-evergreen-sage/20 shadow-sm hover:shadow-xl transition-all border-b-8 border-b-evergreen-sage">
              <h3 className="text-2xl font-display font-bold text-evergreen-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="grid grid-cols-1 gap-2 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm font-semibold text-evergreen-dark">
                    <span className="w-2 h-2 bg-evergreen-gold rounded-full mr-2"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 bg-evergreen-cream text-evergreen-primary font-bold rounded-xl hover:bg-evergreen-sage/20 transition-colors">
                Learn More About {service.title}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-evergreen-primary text-white p-12 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-3xl font-display font-bold mb-4">Medication Management</h3>
              <p className="text-evergreen-mint/80 max-w-sm">Never miss a dose again. Our professionals ensure medication is taken accurately and on time.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest font-bold">Accuracy Commitment</div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-display font-bold text-evergreen-primary text-center mb-8">Need specialized page content?</h3>
            {generatedServiceContent ? (
              <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-evergreen-primary">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed mb-8">
                  {generatedServiceContent}
                </div>
                <button 
                  onClick={() => setGeneratedServiceContent(null)}
                  className="text-evergreen-gold font-bold hover:underline"
                >
                  Reset Assistant
                </button>
              </div>
            ) : (
              <AIContentHelper 
                sectionTitle="Dementia & Alzheimer's Care Description" 
                onGenerate={setGeneratedServiceContent} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
