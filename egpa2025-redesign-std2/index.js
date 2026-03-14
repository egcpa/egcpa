// Direct import from URL for legacy browser compatibility (SeaMonkey)
import { GoogleGenAI } from "https://esm.sh/@google/genai";

/**
 * VANILLA SPA ROUTER
 * Handles hash navigation and view toggling.
 */
function handleRouting() {
  const hash = window.location.hash || '#home';
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle sections visibility
  let found = false;
  sections.forEach(section => {
    if (`#${section.id}` === hash) {
      section.classList.add('active');
      found = true;
    } else {
      section.classList.remove('active');
    }
  });

  // Fallback to home if hash is invalid
  if (!found && sections.length > 0) {
    window.location.hash = '#home';
    return;
  }

  // Toggle Nav Link Active States
  navLinks.forEach(link => {
    const linkHash = link.getAttribute('href');
    if (linkHash === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Dynamic Header Styling
  const isTopHome = hash === '#home' && window.scrollY < 50;
  updateHeaderStyle(!isTopHome);

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHeaderStyle(isLightMode) {
  const header = document.getElementById('main-header');
  const logoText = document.getElementById('logo-text');
  const logoSubtext = document.getElementById('logo-subtext');
  const navLinks = document.querySelectorAll('.nav-link');

  if (isLightMode) {
    header?.classList.add('glass-nav', 'shadow-xl', 'py-3');
    header?.classList.remove('bg-transparent', 'py-6');
    logoText?.classList.remove('text-white');
    logoText?.classList.add('text-evergreen-primary');
    logoSubtext?.classList.remove('text-evergreen-mint/70');
    logoSubtext?.classList.add('text-gray-400');
    navLinks.forEach(l => {
      l.classList.remove('text-white');
      l.classList.add('text-evergreen-dark');
    });
  } else {
    header?.classList.remove('glass-nav', 'shadow-xl', 'py-3');
    header?.classList.add('bg-transparent', 'py-6');
    logoText?.classList.add('text-white');
    logoText?.classList.remove('text-evergreen-primary');
    logoSubtext?.classList.add('text-evergreen-mint/70');
    logoSubtext?.classList.remove('text-gray-400');
    navLinks.forEach(l => {
      l.classList.add('text-white');
      l.classList.remove('text-evergreen-dark');
    });
  }
}

/**
 * GEMINI AI SERVICE
 */
async function generateAIText(userInput) {
  try {
    // Accessing the key provided by the deployment platform environment
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    if (!apiKey) throw new Error("API Key not found. Please set API_KEY in your environment.");
    
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      Task: Write professional web copy for "Evergreen Care PA", a home care agency in Collegeville, PA.
      Context: User input: ${userInput}
      Guidelines: Tone is compassionate, expert, and local. Focus on "Aging in Place". Max 100 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text || "Our specialists are ready to help. Contact us for a custom care plan.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our drafting tool is currently in maintenance. Please call us at (610) 555-0123 for immediate assistance.";
  }
}

/**
 * INITIALIZATION
 */
function init() {
  // SPA Routing setup
  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('load', handleRouting);
  
  // Real-time scroll listener for header transitions
  window.addEventListener('scroll', () => {
    if (window.location.hash === '#home' || !window.location.hash) {
       updateHeaderStyle(window.scrollY > 50);
    }
  });

  // AI "Smart Drafter" interaction
  const aiBtn = document.getElementById('ai-generate-btn');
  const aiInput = document.getElementById('ai-input');
  const aiResult = document.getElementById('ai-result');

  aiBtn?.addEventListener('click', async () => {
    if (!aiInput.value.trim()) return;
    
    const originalText = aiBtn.innerText;
    aiBtn.innerText = 'Consulting AI...';
    aiBtn.setAttribute('disabled', 'true');
    aiResult?.classList.remove('hidden');
    aiResult.innerText = 'Crafting your professional care summary...';

    const content = await generateAIText(aiInput.value);
    
    aiResult.innerText = content;
    aiBtn.innerText = originalText;
    aiBtn.removeAttribute('disabled');
  });

  // Global Form Handling for UX
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      if (btn) {
        const originalText = btn.innerText;
        btn.innerText = 'Request Sent!';
        btn.classList.add('bg-green-600');
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('bg-green-600');
          form.reset();
        }, 3000);
      }
    });
  });
}

// Start Application
init();