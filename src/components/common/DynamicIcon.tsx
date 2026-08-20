import React from 'react';
import { 
  BookOpen, 
  Code, 
  FileText, 
  FlaskConical, 
  Mic, 
  Microscope, 
  GraduationCap, 
  Rocket,
  Presentation,
  HelpCircle,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Code,
  FileText,
  FlaskConical,
  Mic,
  Microscope,
  GraduationCap,
  Rocket,
  Presentation,
  HelpCircle
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} />;
};
