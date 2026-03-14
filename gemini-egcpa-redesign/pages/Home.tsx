
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/453/1920/1080" 
            alt="Compassionate caregiver" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen-dark/80 via-evergreen-dark/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Compassionate <span className="text-evergreen-gold">Home Care</span> in Collegeville, PA.
            </h1>
            <p className="text-evergreen-mint text-xl md:text-2xl mb-10 leading-relaxed font-light">
              Helping your loved ones maintain independence and dignity at home since 2018. Because there's no place like home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="bg-evergreen-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all text-center">
                Schedule a Free Assessment
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white py-10 shadow-inner relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl">
        <div className="flex flex-wrap justify-around items-center gap-8 px-8">
          <div className="flex flex-col items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-900">BBB <span className="text-blue-500 underline underline-offset-4 decoration-2">A+ Rating</span></div>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mt-2">Accredited Business</span>
          </div>
          <div className="flex flex-col items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-12 h-12 bg-evergreen-primary rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mt-2">State Licensed</span>
          </div>
          <div className="flex flex-col items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex text-evergreen-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mt-2">Top Rated on Google</span>
          </div>
          <div className="flex flex-col items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-2xl font-black text-gray-800 tracking-tighter">Est. 2018</div>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mt-2">Collegeville Local</span>
          </div>
        </div>
      </section>

      {/* 3. The Three Pillars */}
      <section className="py-24 bg-evergreen-cream">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-evergreen-primary font-display text-4xl font-bold mb-4">Why Families Choose Evergreen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Providing more than just a service—we provide peace of mind for the entire family.</p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Caregivers",
              description: "Rigorous vetting, continuous training, and matched for personality and skill.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            },
            {
              title: "Customized Care Plans",
              description: "No two people are the same. We tailor every plan to individual health needs and daily routines.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            },
            {
              title: "24/7 Local Support",
              description: "We are right here in Montgomery County. We are available day and night whenever you need us.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="bg-evergreen-sage/30 w-16 h-16 rounded-2xl flex items-center justify-center text-evergreen-primary mb-6 group-hover:bg-evergreen-primary group-hover:text-white transition-all">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-4 text-evergreen-dark">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Service Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-16">
            <h2 className="text-evergreen-primary font-display text-4xl font-bold mb-6 italic">Stay in the Home You Love.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              "Aging in place" is more than a slogan—it's our mission. We provide the support necessary for seniors to maintain their familiar surroundings, memories, and connections while receiving professional, top-tier care.
            </p>
            <ul className="space-y-4">
              {[
                "Personal Care & Hygiene",
                "Dementia & Alzheimer's Support",
                "Companion Care & Errands",
                "Respite Care for Families"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-evergreen-dark font-semibold">
                  <span className="w-5 h-5 bg-evergreen-gold rounded-full flex items-center justify-center mr-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/services" className="text-evergreen-primary font-bold border-b-2 border-evergreen-gold pb-1 hover:text-evergreen-gold transition-colors">
                Explore Our Full Range of Services →
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-evergreen-gold rounded-full opacity-20 z-0"></div>
            <img 
              src="https://picsum.photos/id/1/600/600" 
              alt="Caregiver helping senior" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* 5. Caregiver First Section */}
      <section className="py-24 bg-evergreen-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-6">Love what you do? Join the Evergreen Family.</h2>
          <p className="text-xl text-evergreen-mint/80 mb-10 leading-relaxed">
            We're looking for caring, compassionate hearts in Montgomery County. We offer competitive pay, flexible schedules, and a culture that truly values your hard work.
          </p>
          <Link to="/careers" className="inline-block bg-white text-evergreen-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-evergreen-gold hover:text-white transition-all">
            Join Our Team
          </Link>
        </div>
      </section>

      {/* 6. Local Reach Section */}
      <section className="py-24 bg-evergreen-cream">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-evergreen-sage/30 h-[400px] flex items-center justify-center text-gray-400">
            {/* Mock Map Representation */}
            <div className="text-center">
              <div className="w-20 h-20 bg-evergreen-sage/20 rounded-full flex items-center justify-center mx-auto mb-4 text-evergreen-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h4 className="text-evergreen-dark font-bold text-lg">Serving the Local Area</h4>
              <p>Collegeville • Phoenixville • Skippack • Royersford</p>
            </div>
          </div>
          <div>
            <h2 className="text-evergreen-primary font-display text-4xl font-bold mb-6">Deep Roots in Montgomery County</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2018, Evergreen Care PA is locally owned and operated. We're your neighbors, caring for neighbors.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-evergreen-sage rounded-xl">
                <span className="block text-evergreen-gold font-bold text-2xl mb-1">100+</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Families Served</span>
              </div>
              <div className="p-4 border border-evergreen-sage rounded-xl">
                <span className="block text-evergreen-gold font-bold text-2xl mb-1">7+</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Years Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="py-20 bg-evergreen-gold">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-display font-bold mb-2">Ready to start the conversation?</h2>
            <p className="text-lg opacity-90">Schedule a free, no-obligation assessment for your loved one today.</p>
          </div>
          <Link to="/contact" className="bg-evergreen-dark text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-black transition-all shadow-xl">
            Request Assessment Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
