// node_modules
import { createContext } from "react";
// types
import { ICallToPriceContext } from "./types";
// constants
import { contextDefaultValues } from "./constants";

export const CallToPriceContext =
  createContext<ICallToPriceContext>(contextDefaultValues);
