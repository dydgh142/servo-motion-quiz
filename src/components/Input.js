import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`px-2 py-1 border rounded-lg ${className}`}
      {...props}
    />
  );
}
