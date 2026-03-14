// Direct import from ESM URL for browser-native compatibility (SeaMonkey / GH Pages)
import { GoogleGenAI } from "https://esm.sh/@google/genai";

/**
 * VANILLA SPA ROUTER
 * Handles hash navigation and view toggling without a heavy framework.
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

  // Header dynamic styling based on section/scroll
  const isTopHome = hash === '#home' && window.scrollY < 50;
  updateHeaderStyle(!isTopHome);

  // Smooth scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * UI UPDATE: Header Style
 * Transitions between transparent/hero mode and white/sticky mode.
 */
function updateHeaderStyle(isLightMode: boolean) {
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
 * Generates professional care draft based on user input.
 */
async function generateAIText(userInput: string) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API Key not found in environment.");
    
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      Task: Write a professional, compassionate care approach overview for a home care agency named "Evergreen Care PA" in Collegeville.
      User Scenario: ${userInput}
      Guidelines: Tone should be "neighborly yet clinical". Focus on family peace of mind and safety at home. Max 120 words.
    `;

    // Fix: Simplified content format to single string as per latest guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "Our clinical team is ready to build a personalized plan for you. Contact us for a free assessment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our local care experts are best reached by phone right now. Please call us at (610) 555-0123 for immediate professional guidance.";
  }
}

/**
 * APP INITIALIZATION
 */
function init() {
  // Setup routing listeners
  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('load', handleRouting);
  
  // Setup scroll listener for the header
  window.addEventListener('scroll', () => {
    if (window.location.hash === '#home' || !window.location.hash) {
       updateHeaderStyle(window.scrollY > 50);
    }
  });

  // Setup AI Drafter button
  const aiBtn = document.getElementById('ai-generate-btn');
  // Fix: Cast aiInput to HTMLInputElement to resolve property 'value' access error (lines 132, 140)
  const aiInput = document.getElementById('ai-input') as HTMLInputElement | null;
  const aiResult = document.getElementById('ai-result');

  aiBtn?.addEventListener('click', async () => {
    // Fix: Added null check for aiInput before accessing .value
    if (!aiInput || !aiInput.value.trim()) return;
    
    const originalText = aiBtn.innerText;
    aiBtn.innerText = 'Crafting...';
    aiBtn.setAttribute('disabled', 'true');
    if (aiResult) {
      aiResult.classList.remove('hidden');
      aiResult.innerHTML = '<div class="flex items-center space-x-2"><div class="w-2 h-2 bg-evergreen-gold rounded-full animate-bounce"></div><div class="w-2 h-2 bg-evergreen-gold rounded-full animate-bounce delay-100"></div><div class="w-2 h-2 bg-evergreen-gold rounded-full animate-bounce delay-200"></div><span class="ml-2">Consulting our clinical guidelines...</span></div>';
    }

    // Fix: Access .value after type confirmation to fix HTMLElement error
    const content = await generateAIText(aiInput.value);
    
    if (aiResult) aiResult.innerText = content;
    aiBtn.innerText = 'Draft Another Version';
    aiBtn.removeAttribute('disabled');
  });

  // Global Form Success Feedback
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      if (btn) {
        const originalText = (btn as HTMLElement).innerText;
        (btn as HTMLElement).innerText = '✓ Success! We\'ll call you shortly.';
        btn.classList.add('bg-green-700');
        setTimeout(() => {
          (btn as HTMLElement).innerText = originalText;
          btn.classList.remove('bg-green-700');
          (form as HTMLFormElement).reset();
        }, 3500);
      }
    });
  });

  console.log("Evergreen Care SPA Initialized successfully.");
}

// Start the application
init();