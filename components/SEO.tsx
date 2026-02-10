import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Local Flasher Solana`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || "Premium Local Flasher packages on Solana.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description || "Premium Local Flasher packages on Solana.";
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};