import { Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/plumbingData';

export function FloatingContactButtons() {
  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5"
    >
      {/* Upper Button: Call Now */}
      <a
        href={COMPANY_INFO.phoneHref}
        aria-label={`Call Fix Hub Qatar at ${COMPANY_INFO.phoneDisplay}`}
        className="group inline-flex items-center justify-center gap-2.5 h-12 w-12 sm:w-auto sm:px-4 rounded-full bg-[#F5B700] hover:bg-[#E0A700] text-[#041E42] font-semibold text-sm shadow-lg border border-[#041E42]/15 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B700]"
      >
        <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">Call Now</span>
      </a>

      {/* Lower Button: WhatsApp */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with Fix Hub Qatar at ${COMPANY_INFO.whatsappDisplay}`}
        className="group inline-flex items-center justify-center gap-2.5 h-12 w-12 sm:w-auto sm:px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg border border-emerald-500/30 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 shrink-0"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.78 14.08c-.24.68-1.42 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.94-4.38-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.79-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.02.9 2.17.07.15.12.33.02.53-.1.2-.15.33-.29.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.26 1.64 2.04 1.13 1.01 2.08 1.32 2.38 1.47.3.15.47.12.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.34.07.12.07.7-.17 1.38z" />
        </svg>
        <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
      </a>
    </div>
  );
}
