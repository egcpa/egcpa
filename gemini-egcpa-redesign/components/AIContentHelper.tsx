
import React, { useState } from 'react';
import { generateProfessionalCopy } from '../services/geminiService';

interface Props {
  sectionTitle: string;
  onGenerate: (content: string) => void;
}

export const AIContentHelper: React.FC<Props> = ({ sectionTitle, onGenerate }) => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    const content = await generateProfessionalCopy(sectionTitle, details);
    onGenerate(content);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-evergreen-sage shadow-sm mt-8">
      <h4 className="text-evergreen-primary font-display font-bold mb-2 flex items-center">
        <span className="mr-2">✨</span> AI Content Assistant
      </h4>
      <p className="text-sm text-gray-600 mb-4">
        Need help drafting professional copy for the <span className="font-semibold">{sectionTitle}</span> section? 
        Tell us a few specifics and our AI will draft it for you.
      </p>
      <textarea
        className="w-full p-3 border rounded-lg text-sm mb-4 focus:ring-2 focus:ring-evergreen-primary outline-none"
        placeholder="e.g., Mention our founder's 20 years of nursing experience and our specific focus on Phoenixville..."
        rows={3}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full py-2 px-4 rounded-lg font-bold transition-colors ${
          loading 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-evergreen-gold hover:bg-opacity-90 text-white'
        }`}
      >
        {loading ? 'Crafting professional copy...' : 'Generate Custom Content'}
      </button>
    </div>
  );
};
