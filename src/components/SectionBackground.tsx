import { LucideIcon } from 'lucide-react';

interface SectionBackgroundProps {
  icons?: Array<{ Icon: LucideIcon; position: string; size: string }>;
  variant?: 'default' | 'light';
}

export default function SectionBackground({ icons = [], variant = 'default' }: SectionBackgroundProps) {
  return null;
}
