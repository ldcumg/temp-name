import type { create$Store } from "@/stores/$Store";

export type $State = {
  $State: string;
};

export type $Actions = {
  applySearchQuery: (searchKeyword: string) => void;
  clearSearchQuery: () => void;
};

export type $Store = $State & $Actions;

export type $StoreApi = ReturnType<typeof create$Store>;
