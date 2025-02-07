"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Type voor de context
interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// 2. Context aanmaken
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// 3. Provider component
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

// 4. Custom hook voor gemakkelijke toegang
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar moet binnen SidebarProvider gebruikt worden");
  }
  return context;
}
