"use client";

import { useEffect } from "react";

export default function JsonLdOrganization() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Buddhist Art Consultancy",
      url: "https://urgenbuddhistart.com",
      logo: "https://urgenbuddhistart.com/logo.png",
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
