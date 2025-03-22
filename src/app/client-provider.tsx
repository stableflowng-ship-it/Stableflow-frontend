'use client';

import { store } from "./store/store";
import { Provider } from "react-redux";

// Client component wrapper for Redux provider
export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
} 