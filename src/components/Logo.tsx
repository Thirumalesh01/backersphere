
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span className="font-bold text-xl text-primary">Crowd<span className="text-foreground">Fund</span></span>
    </div>
  );
};

export default Logo;
