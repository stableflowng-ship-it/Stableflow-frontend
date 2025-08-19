"use client";
import React, { useState, useEffect, useRef } from "react";

interface BusinessDropdownSelectorProps {
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (option: string) => void;
  width?: string;
}

export const BusinessDropdownSelector: React.FC<
  BusinessDropdownSelectorProps
> = ({
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
  width = "454px",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsFocused(!isOpen);
  };

  return (
    <div
      className="flex flex-col items-start p-0 w-full max-w-md h-9"
      style={{ width }}
      ref={dropdownRef}
    >
      <div
        className={`
          box-border flex flex-row items-center justify-between p-2 px-4 w-full h-9
          bg-gray-100 border cursor-pointer rounded-[10px]
          ${isFocused ? "border-blue-500" : "border-gray-100"}
        `}
        onClick={toggleDropdown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={0}
      >
        <div className="flex flex-row justify-between items-center w-full gap-4">
          <span
            className={`
              h-5 text-sm font-medium tracking-wide leading-tight
              ${value ? "text-gray-800" : "text-gray-300"}
              font-sans truncate
            `}
            style={{ letterSpacing: "0.002em" }}
          >
            {value || placeholder}
          </span>

          <div className="flex items-center justify-center w-5 h-5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M11.25 6.75L9 9L6.75 6.75"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute mt-10 w-full max-w-md bg-white rounded-[10px] shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
