"use client";

import { $StoreContext } from "@/contexts/$StoreContext";
import { create$Store } from "@/stores/$Store";
import type { RegisterStoreApi } from "@/types/authTypes";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ZustandStoreProviderProps {
  children: ReactNode;
}

export const ZustandStoreProvider = ({ children }: ZustandStoreProviderProps) => {
  const $StoreRef = useRef<RegisterStoreApi>(null);


  if (!$StoreRef.current) {
    $StoreRef.current = create$Store();
  }

  return (
        <$StoreContext.Provider value={$StoreRef.current}>{children}</$StoreContext.Provider>
  );
};
