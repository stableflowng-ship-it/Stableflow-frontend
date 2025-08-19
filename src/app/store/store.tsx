"use client";
import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
