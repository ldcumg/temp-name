import type { $State, $Store } from "@/types/$Types";
import { createStore } from "zustand/vanilla";

const initialState: $State = {
  $State: "",
};

export const create$Store = () => {
  return createStore<$Store>()((set) => ({
    ...initialState,
    $function: ($State) => set({ $State }),
  }));
};
