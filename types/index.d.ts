// Global declaration (If need)
// import type { ApiResponse, ID } from "@/types";
declare global {
  type ID = string | number;
  type Nullable<T> = T | null;
}

export interface NavItem {
  id: string;
  link: string;
  title: string;
  icon: ReactNode;
}
