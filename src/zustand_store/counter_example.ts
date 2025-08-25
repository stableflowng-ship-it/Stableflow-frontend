// 

import { create } from "zustand";


type BusinessState = {
  data: unknown
  isPending: boolean;
  isCompleted: boolean;
  updatePending: () => void;
  // reset: () => void;
}

export const useBusinessStore = create<BusinessState>((set) => ({
  data: {},
  isPending: false,
  isCompleted: false,
  updatePending: () => set(() => ({ isPending: true })),
  updateCompleted: () => set((state) => ({ isCompleted: state.isCompleted })),
  // reset: () => set({ count: 0 }),
}));