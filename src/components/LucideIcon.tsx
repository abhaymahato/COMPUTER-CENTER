import { 
  Monitor, 
  BookOpen, 
  Award, 
  Calculator, 
  FileSpreadsheet, 
  Wallet, 
  Terminal, 
  Code, 
  Cpu, 
  Laptop, 
  Users, 
  IndianRupee, 
  ClipboardCheck, 
  Briefcase,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check
} from 'lucide-react';

const iconMap = {
  Monitor,
  BookOpen,
  Award,
  Calculator,
  FileSpreadsheet,
  Wallet,
  Terminal,
  Code,
  Cpu,
  Laptop,
  Users,
  IndianRupee,
  ClipboardCheck,
  Briefcase,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check
};

export type IconName = keyof typeof iconMap;

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size }: LucideIconProps) {
  const IconComponent = iconMap[name as IconName] || Monitor;
  return <IconComponent className={className} size={size} />;
}
