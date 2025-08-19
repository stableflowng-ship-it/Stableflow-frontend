import * as React from "react";
import { cn } from "@/lib/utils";

export interface TertiaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const TertiaryButton = React.memo(
  React.forwardRef<HTMLButtonElement, TertiaryButtonProps>(
    ({ className, children, label = "Button Text", ...props }, ref) => {
      return (
        <button
          className={cn(
            // Base styles
            "relative inline-flex items-center justify-center whitespace-nowrap",
            // Size and padding
            "px-2 py-1",
            // Text styling
            "text-gray-500 text-xs font-medium",
            // Border radius
            "rounded-full",
            // Shadow
            "shadow-sm",
            // Transition
            "transition-all duration-200",
            // Disabled state
            "disabled:opacity-50 disabled:pointer-events-none",
            // Focus state
            "focus:outline-none focus:ring-1 focus:ring-gray-300",
            // Hover state
            "hover:text-gray-700 hover:bg-gray-100",
            // Custom class
            className
          )}
          ref={ref}
          style={{
            background: "#ffffff",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          }}
          {...props}
        >
          <span className="relative z-0">{children || label}</span>
        </button>
      );
    }
  )
);

TertiaryButton.displayName = "TertiaryButton";

export { TertiaryButton };
