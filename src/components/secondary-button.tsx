import * as React from "react";
import { cn } from "@/lib/utils";

export interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shortcut?: string;
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, children, shortcut, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center whitespace-nowrap",
          // Size and padding
          "px-4 py-2",
          // Text styling
          "text-[#1F1F1F] text-base font-medium",
          // Border radius
          "rounded-[10px]",
          // Transition
          "shadow-sm transition duration-200",
          // Disabled state
          "disabled:opacity-50 disabled:pointer-events-none",
          // Focus state
          "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50",
          // Hover state
          "hover:shadow-md group",
          // Custom class
          className
        )}
        ref={ref}
        style={{
          background: 'linear-gradient(to bottom, #EBEBEB 0%, #FFFFFF 100%)',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
        }}
        {...props}
      >
        {/* Inner shadow effect */}
        <div 
          className="absolute inset-0 rounded-[10px] pointer-events-none"
          style={{
            boxShadow: 'inset 0px 2px 3px rgba(160, 160, 160, 0.2)'
          }}
        />
        
        {/* Corner gradients for depth */}
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none rounded-bl-[10px]"
          style={{
            background: 'radial-gradient(circle at bottom left, rgba(215, 215, 215, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
            clipPath: 'polygon(0 50%, 50% 50%, 0 100%)'
          }}
        />
        
        <div 
          className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none rounded-br-[10px]"
          style={{
            background: 'radial-gradient(circle at bottom right, rgba(215, 215, 215, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
            clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%)'
          }}
        />
        
        {/* Hover effect animated border */}
        <div 
          className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            border: '2px solid transparent',
            borderImageSource: 'linear-gradient(90deg, #1F90FF, #504CF6)',
            borderImageSlice: '1',
            boxShadow: '0 0 5px rgba(31, 144, 255, 0.5)'
          }}
        />
        
        <span className="relative z-10">{children}</span>
        
        {shortcut && (
          <span 
            className="ml-2 inline-flex items-center justify-center rounded relative z-10"
            style={{
              backgroundColor: '#F0F0F0',
              color: '#1F1F1F',
              fontSize: '12px',
              padding: '4px',
              margin: '-1px 0',
              boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {shortcut}
          </span>
        )}
      </button>
    );
  }
);

SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton }; 