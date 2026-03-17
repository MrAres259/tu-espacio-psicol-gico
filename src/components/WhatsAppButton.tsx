const WHATSAPP_URL = "https://wa.me/message/J2EODMHICX5ZM1";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.22l6.072-1.94A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.342 22.616c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.322-5.668-1.218-4.762-1.97-7.826-6.802-8.064-7.116-.23-.314-1.932-2.572-1.932-4.904s1.222-3.478 1.656-3.956c.434-.478.948-.598 1.264-.598.314 0 .632.004.908.016.292.014.684-.11 1.07.816.39.944 1.326 3.236 1.444 3.47.118.234.196.508.04.82-.158.314-.236.508-.47.784-.234.274-.494.614-.706.824-.234.234-.478.49-.206.96.274.47 1.218 2.01 2.614 3.256 1.796 1.602 3.308 2.098 3.778 2.332.47.234.744.196 1.018-.118.274-.314 1.178-1.374 1.492-1.846.314-.47.632-.392 1.066-.234.434.156 2.724 1.284 3.192 1.518.468.234.78.352.898.546.118.196.118 1.126-.272 2.226v-.002Z" />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
