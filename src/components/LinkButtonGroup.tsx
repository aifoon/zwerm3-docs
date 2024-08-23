import React from "react";

type LinkButtonGroupProps = {
  children: React.ReactNode;
};

export const LinkButtonGroup = ({ children }: LinkButtonGroupProps) => {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      {children}
    </div>
  );
};
