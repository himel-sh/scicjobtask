"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      toastOptions={{
        classNames: {
          toast: "bg-white border shadow-sm",
          title: "text-sm",
          description: "text-sm text-neutral-600",
        },
      }}
    />
  );
}

