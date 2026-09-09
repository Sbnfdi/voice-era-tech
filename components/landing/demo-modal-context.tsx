"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { BookDemoDialog } from "./book-demo-dialog";

interface DemoPrefill {
  interest?: string;
  plan?: string;
}

interface DemoModalContextType {
  isDemoOpen: boolean;
  demoPrefill: DemoPrefill;
  openDemo: (prefill?: DemoPrefill) => void;
  closeDemo: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoPrefill, setDemoPrefill] = useState<DemoPrefill>({});

  const openDemo = (prefill: DemoPrefill = {}) => {
    setDemoPrefill(prefill);
    setIsDemoOpen(true);
  };

  const closeDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <DemoModalContext.Provider value={{ isDemoOpen, demoPrefill, openDemo, closeDemo }}>
      {children}
      <BookDemoDialog
        isOpen={isDemoOpen}
        onClose={closeDemo}
        prefill={demoPrefill}
      />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
