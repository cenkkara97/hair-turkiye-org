"use client";

import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  variant?: "default" | "highlighted" | "warning";
  className?: string;
}

const variants = {
  default: {
    container: "bg-white border-data-panel-border hover:border-brand-gold/30",
    iconBg: "bg-brand-gold/10 text-brand-gold",
    title: "text-brand-navy",
    description: "text-brand-muted",
  },
  highlighted: {
    container: "bg-gradient-to-br from-brand-gold/5 to-brand-navy/5 border-brand-gold/30 hover:border-brand-gold",
    iconBg: "bg-brand-gold text-white",
    title: "text-brand-navy",
    description: "text-brand-muted",
  },
  warning: {
    container: "bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:border-red-300",
    iconBg: "bg-red-100 text-red-600",
    title: "text-red-800",
    description: "text-red-600",
  },
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  variant = "default",
  className = "",
}: FeatureCardProps) {
  const styles = variants[variant];

  return (
    <div className={`group rounded-xl border p-6 transition duration-300 hover:shadow-lg hover:scale-105 ${styles.container} ${className}`}>
      <div className={`flex size-12 items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform ${styles.iconBg}`}>
        <Icon className="size-6" />
      </div>
      
      <h3 className={`text-lg font-semibold mb-3 ${styles.title}`}>
        {title}
      </h3>
      
      <p className={`text-sm leading-relaxed mb-4 ${styles.description}`}>
        {description}
      </p>
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}