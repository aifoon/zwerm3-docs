import useGitHub from "@site/src/hooks/useGitHub";
import React from "react";

export const LatestRelease = () => {
  const latesteRelease = useGitHub();
  return (
    <div>
      {latesteRelease && (
        <a
          style={{
            backgroundColor: "var(--primary-100)",
            padding: "0.5rem 0.7rem",
            borderRadius: "0.3rem",
            color: "var(--white)",
            textDecoration: "none",
          }}
          href={latesteRelease.html_url}
        >
          kweenb {latesteRelease.name}
        </a>
      )}
    </div>
  );
};
