// Optimized scroll utilities for better performance

export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.querySelector(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Use requestAnimationFrame for smoother scrolling
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  const duration = Math.min(Math.abs(distance) / 2, 800); // Max 800ms duration
  let start: number | null = null;

  const animateScroll = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressRatio = Math.min(progress / duration, 1);

    // Easing function for smooth animation
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const currentPosition = startPosition + distance * easeInOutCubic(progressRatio);
    
    window.scrollTo(0, currentPosition);

    if (progressRatio < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Instant scroll for users who prefer reduced motion
    window.scrollTo(0, offsetPosition);
  } else {
    requestAnimationFrame(animateScroll);
  }
};

export const throttledScrollHandler = (callback: () => void, delay: number = 16) => {
  let ticking = false;

  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
