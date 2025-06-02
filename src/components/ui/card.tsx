// src/components/ui/card.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("bg-slate-800 rounded-2xl shadow-md p-4", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("mt-2", className)}>{children}</div>;
}

