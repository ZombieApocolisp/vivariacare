import type { AppDispatch, RootState } from "@state/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use these instead of plain useDispatch/useSelector everywhere
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
