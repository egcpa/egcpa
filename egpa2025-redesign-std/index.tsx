import { GoogleGenAI } from "@google/genai";

/**
 * VANILLA SPA ROUTER
 * Handles hash navigation and view toggling.
 */
function handleRouting() {
  const hash = window.location.hash || '#home';
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.getElementById('main-header');
  const logoText = document.getElementById('logo-text');
  const logoSubtext = document.getElementById('logo-subtext');

  // Toggle sections
  sections.forEach(section => {
    if (`#${section.id}` === hash) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  // Toggle Nav Link States
  navLinks.forEach(link => {
    const linkHash = (link as HTMLAnchorElement).getAttribute('href');
    if (linkHash === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Special UI states for specific sections (Dark/Light mode)
  if (hash === '#contact' || (hash === '#home' && window.scrollY < 50)) {
     // Contact is dark by default, Home is dark at top
     updateHeaderStyle(false);
  } else {
     updateHeaderStyle(true);
  }

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHeaderStyle(isScrolledOrLightSection: boolean) {
  const header = document.getElementById('main-header');
  const logoText = document.getElementById('logo-text');
  const logoSubtext = document.getElementById('logo-subtext');
  const navLinks = document.querySelectorAll('.nav-link');

  if (isScrolledOrLightSection) {
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
async function generateAIText(userInput: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const prompt = `
      Task: Write high-quality, compassionate, and professional web copy for "Evergreen Care PA", a home care agency in Collegeville, PA.
      Topic: Personalized Care Approach
      Context: User input describes their situation: ${userInput}
      Guidelines: Use a Humanist tone, warm but clinical, focus on "Aging in Place" and family trust. Limit response to 120 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text || "Our team is specialized in crafting care plans that fit your life. Let's discuss this further in a free assessment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is temporarily offline, but our human staff is here! Call (610) 555-0123 for immediate professional guidance.";
  }
}

/**
 * INITIALIZATION
 */
function init() {
  // Navigation
  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('load', handleRouting);
  
  // Sticky Header Logic
  window.addEventListener('scroll', () => {
    const hash = window.location.hash || '#home';
    if (hash === '#home') {
       updateHeaderStyle(window.scrollY > 50);
    }
  });

  // AI Content Tool Logic
  const aiBtn = document.getElementById('ai-generate-btn');
  const aiInput = document.getElementById('ai-input') as HTMLTextAreaElement;
  const aiResult = document.getElementById('ai-result');

  aiBtn?.addEventListener('click', async () => {
    if (!aiInput.value.trim()) return;
    
    aiBtn.innerText = 'Crafting...';
    aiBtn.setAttribute('disabled', 'true');
    aiResult?.classList.remove('hidden');
    aiResult!.innerText = 'Generating your professional care draft...';

    const content = await generateAIText(aiInput.value);
    
    aiResult!.innerText = content;
    aiBtn.innerText = 'Generate New Version';
    aiBtn.removeAttribute('disabled');
  });

  // Simple Form Interception
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      if (btn) {
        const originalText = btn.innerText;
        btn.innerText = 'Success! Redirecting...';
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

// Start the engine
init();