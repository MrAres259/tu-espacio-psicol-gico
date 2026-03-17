import { useEffect } from "react";

const BASE_URL = "https://luminadespertar.org";

export const useCanonical = (path: string) => {
  useEffect(() => {
    const url = `${BASE_URL}${path}`;
    
    // Set or update canonical link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

    return () => {
      // Clean up on unmount
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [path]);
};
