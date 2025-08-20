// 

"use client";
import { create } from "zustand";

interface InputState {
  value: string;
  setInputValue: (val: string) => void;
  resetInputValue: () => void;
}

export const useInputStore = create<InputState>((set) => ({
  value: "",
  setInputValue: (val) => set({ value: val }),
  resetInputValue: () => set({ value: "" }),
}));
