import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [transitioning, setTransitioning] = useState(false);
  const [transitionPos, setTransitionPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = useCallback((e) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTransitionPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
      setTransitioning(true);
      setTimeout(() => setIsDark(prev => !prev), 800);
      setTimeout(() => setTransitioning(false), 4500);
    } else {
      setIsDark(prev => !prev);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, transitioning, transitionPos }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
