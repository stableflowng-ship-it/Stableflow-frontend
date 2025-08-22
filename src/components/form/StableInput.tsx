/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

//
"use client";
import { getNestedValue } from "@/utils/functionHelper";
import { CircleAlert } from "lucide-react";
import React, { ReactNode, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type StableInputType = {
  label: string;
  className?: string;
  placeholder?: string;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  name: string;
  required?: boolean;
  errors?: any;
  pattern?: any;
  type?: string;
  disabled?: boolean;
  onlyAlpha?: boolean;
  onlyNum?: boolean;
  setValue?: UseFormSetValue<FieldValues>;
  register?: UseFormRegister<any>;
  onChange?: any;
  control?: any;
  removeBorder?: true;
  inputClass?: string;
  validate?: any;
  labelClass?: string;
  maxLength?: number;
  minLength?: number;
  value?: string;
  rest?: any;
};

function StableInput(props: StableInputType) {
  const {
    label,
    errors,
    name,
    placeholder,
    register,
    required = true,
    suffixIcon,
    prefixIcon,
    className = "",
    setValue,
    pattern,
    type = "text",
    disabled,
    onlyAlpha,
    onlyNum,
    onChange,
    validate,
    control,
    inputClass = "",
    removeBorder = false,
    labelClass = "",
    maxLength,
    minLength,
    value,
    ...rest
  } = props;

  const onlyAlphaValid = (event: any) => {
    const sanitizedValue = event.target.value.replace(/[^a-zA-Z]/g, "");
    setValue!(name, sanitizedValue);
  };

  const onlyNumValid = (event: any) => {
    const sanitizedValue = event.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/^(\d*\.\d{0,2}).*/, "$1");
    setValue!(name, sanitizedValue);
  };

  const characterValid = (e: any) => {
    if (onlyAlpha) {
      onlyAlphaValid(e);
    }
    if (onlyNum) {
      onlyNumValid(e);
    }
    if (onChange) {
      onChange!(e);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  };
  // const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`w-full ${className!} `}>
      <label className={`text-sm text-[#292D32] font-medium ${labelClass!}`}>
        {label}
      </label>
      <div
        className={`mt-1 flex items-center gap-3 rounded-[10px] bg-[#F5F5F5] ${
          errors && getNestedValue(errors, name)
            ? `border-red-400`
            : "border-[#F1F1F1]"
        } px-3 py-2`}
      >
        {prefixIcon}
        <input
          min={type === "date" ? getCurrentDate() : ""}
          type={type}
          {...(register
            ? {
                ...register!(name, {
                  required: {
                    value: required,
                    message: "This field is required",
                  },
                  pattern: pattern,
                  validate: validate,
                  onChange: characterValid,
                }),
              }
            : {})}
          className={`w-full border-none bg-transparent text-[#31302B] outline-none placeholder:text-sm placeholder:text-[#CBCBCB] placeholder:font-medium focus:border-[3px] ${inputClass}`}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          autoComplete="off"
          value={value}
          {...rest}
        />
        {suffixIcon}
      </div>

      <div className="mt-1 text-xs text-red-400">
        {errors && getNestedValue(errors, name) ? (
          <div className="flex items-center gap-1">
            <CircleAlert size={16} /> {getNestedValue(errors, name).message}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default StableInput;
