import { $StoreContext } from "@/contexts/$StoreContext";
import type { $Store } from "@/types/$Types";
import { useContext } from "react";
import { useStore } from "zustand";

export const use$Store = <T>(selector: (store: $Store) => T): T => {
  const $StoreContext = useContext($StoreContext);

  if (!$StoreContext) {
    throw new Error("");
  }

  return useStore($StoreContext, selector);
};
