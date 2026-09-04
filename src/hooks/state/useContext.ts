import { $Context } from "@/contexts/$StoreContext";
import { useContext } from "react";

export const use$Context = () => {
  return useContext($Context);
};
