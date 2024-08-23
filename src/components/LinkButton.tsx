import React from "react";
import { IconType } from "@react-icons/all-files/lib";

type LinkButtonProps = {
  size?: "small" | "medium";
  label: string;
  link: string;
  icon: IconType;
  variant?: "primary" | "secondary";
};

export const LinkButton = ({
  size = "medium",
  label = "",
  link = "",
  icon = null,
  variant = "primary",
}: LinkButtonProps) => {
  return (
    <a
      href={link}
      className={`${
        variant === "primary" ? "primary-button" : "secondary-button"
      } ${size === "small" ? "sm" : ""}`}
    >
      <div
        style={{
          display: "grid",
          gap: "1rem",
          alignItems: "center",
          gridTemplateColumns: `${icon ? "5px 1fr" : "1fr"}`,
        }}
      >
        {icon && <>{icon}</>}
        {label}
      </div>
    </a>
  );
};
