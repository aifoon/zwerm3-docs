import { useEffect, useState } from "react";

interface Release {
  name: string;
  tag_name: string;
  html_url: string;
  download_url: string;
}

const useGitHub = () => {
  const [latestRelease, setLatestRelease] = useState<Release | null>(null);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/aifoon/kweenb/releases/latest"
        );
        const data = await response.json();
        setLatestRelease({
          name: data.name,
          tag_name: data.tag_name,
          html_url: data.html_url,
          download_url: data.assets[0].browser_download_url,
        });
      } catch (error) {
        console.error("Error fetching latest release:", error);
      }
    };

    fetchLatestRelease();
  }, []);

  return latestRelease;
};

export default useGitHub;
