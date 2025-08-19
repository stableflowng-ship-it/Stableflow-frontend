"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shortcut?: string;
}

const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ className, children, shortcut, ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <div
      className="flex flex-col items-start p-0.5  w-40 lg:w-56 h-11 bg-white shadow-sm rounded-xl transition-all duration-200"
      style={{
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <button
        className={cn(
          "flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 rounded-lg transition-all duration-200",
          isPressed ? "transform scale-95" : "hover:bg-gray-50",
          className
        )}
        ref={ref}
        style={{
          background: isPressed
            ? "linear-gradient(180deg, rgba(200, 200, 200, 0.4) 0%, rgba(220, 220, 220, 0.2) 100%), #FFFFFF"
            : "linear-gradient(180deg, rgba(215, 215, 215, 0.25) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
          boxShadow: isPressed
            ? "inset 0px 0px 4px rgba(168, 168, 168, 0.4)"
            : "inset 0px 0px 2.5px rgba(168, 168, 168, 0.25)",
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        {...props}
      >
        <span
          className={`text-base font-medium text-center flex items-center transition-colors duration-200 ${
            isPressed ? "text-gray-700" : "text-gray-900"
          }`}
          style={{
            fontFamily:
              "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
            lineHeight: "22px",
          }}
        >
          {children}
        </span>
        {shortcut && (
          <span
            className="ml-2 inline-flex items-center justify-center rounded relative z-10"
            style={{
              backgroundColor: "#F0F0F0",
              color: "#1F1F1F",
              fontSize: "12px",
              padding: "4px",
              margin: "-1px 0",
              boxShadow: "inset 0px 1px 1px rgba(0, 0, 0, 0.1)",
            }}
          >
            {shortcut}
          </span>
        )}
      </button>
    </div>
  );
});

SecondaryButton.displayName = "SecondaryButton";

export const SmallSecondaryButton = ({
  text = "View transaction",
  onClick,
}: {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <div
      className="flex  cursor-pointer flex-col items-start p-px gap-2 w-30 lg:w-28 h-6 bg-white shadow-sm rounded-full z-10"
      style={{
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className={cn(
          "flex flex-row justify-center items-center px-2 py-1 gap-1 w-full h-[22px] bg-gradient-to-b from-gray-200/25 to-transparent rounded-full shadow-inner transition-all duration-200",
          isPressed ? "transform scale-95" : "hover:bg-gray-50"
        )}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={onClick}
      >
        <span
          className="text-xs font-medium leading-[14px] tracking-tight"
          style={{ color: "#8D8D8D", fontFamily: "'SF Pro Text', sans-serif" }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export { SecondaryButton };
