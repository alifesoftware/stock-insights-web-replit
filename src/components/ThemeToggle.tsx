import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-md border-0 bg-transparent hover:bg-accent"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <Sun 
        className={`h-4 w-4 transition-all duration-300 ${
          theme === 'light' 
            ? 'rotate-0 scale-100' 
            : 'rotate-90 scale-0'
        }`}
      />
      <Moon 
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === 'dark' 
            ? 'rotate-0 scale-100' 
            : '-rotate-90 scale-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
