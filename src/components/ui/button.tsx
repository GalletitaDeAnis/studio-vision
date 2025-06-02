// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, asChild = false, children, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-white font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
