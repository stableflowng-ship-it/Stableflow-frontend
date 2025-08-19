import * as React from "react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shortcut?: string;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, shortcut = "⌘R", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center whitespace-nowrap",
          // Size and padding
          "lg:px-4 px-2 py-2", // 16px horizontal, 8px vertical padding
          // Text styling
          "text-white text-base font-semibold", // 16px semibold white text
          // Border radius
          "rounded-[10px]",
          // Transition
          "shadow-md transition duration-200",
          // Disabled state
          "disabled:opacity-50 disabled:pointer-events-none",
          // Focus state
          "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50",
          // Custom class
          className
        )}
        ref={ref}
        style={{
          background: "linear-gradient(135deg, #1F90FF 0%, #504CF6 100%)",
          boxShadow: "0px 1px 2px rgba(30, 144, 255, 0.65)",
          position: "relative",
          overflow: "hidden",
        }}
        {...props}
      >
        {/* Base overlay gradient with opacity */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
            pointerEvents: "none",
            borderRadius: "10px",
          }}
        />

        {/* Hover overlay - only visible on hover */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
            pointerEvents: "none",
            borderRadius: "10px",
          }}
        />

        {/* Active/Clicked overlay - only visible when active */}
        <div
          className="absolute inset-0 opacity-0 active:opacity-100 transition-opacity duration-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(16, 72, 128, 0.3) 0%, rgba(50, 48, 155, 0.3) 100%)",
            pointerEvents: "none",
            borderRadius: "10px",
          }}
        />

        <span className="relative z-10">{children}</span>

        {shortcut && (
          <span
            className="ml-2 inline-flex items-center justify-center rounded relative z-10"
            style={{
              backgroundColor: "#969DFF",
              fontSize: "12px",
              padding: "2px 4px",
              borderRadius: "4px",
              margin: "0 0 0 8px",
            }}
          >
            {shortcut}
          </span>
        )}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
