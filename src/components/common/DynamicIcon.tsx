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
  Palette,
  Layout,
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
  Terminal,
  Search,
  FileSpreadsheet,
  CreditCard,
  FileCheck,
  Laptop,
  Users,
  CheckCircle2,
  Zap,
  Settings,
  PenTool,
  Image,
  Shirt,
  QrCode,
  Award,
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
  HelpCircle,
  Palette,
  Layout,
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
  Terminal,
  Search,
  FileSpreadsheet,
  CreditCard,
  FileCheck,
  Laptop,
  Users,
  CheckCircle2,
  Zap,
  Settings,
  PenTool,
  Image,
  Shirt,
  QrCode,
  Award
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} />;
};
