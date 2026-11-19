import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { RoutePath, routeToPath } from '../types/navigation';

interface CallToActionBandProps {
  title?: string;
  description?: string;
  serviceContext?: string;
  onNavigate: (route: RoutePath) => void;
}

export function CallToActionBand({
  title = 'Need a Trusted Plumber in Doha or Anywhere in Qatar?',
  description = 'Contact Fix Hub Qatar now for 24/7 emergency dispatch, leak detection, bathroom or kitchen plumbing, or a clear quotation for your property.',
  serviceContext,
  onNavigate,
}: CallToActionBandProps) {
  const waMessage = serviceContext
    ? `Hello Fix Hub Qatar, I would like to request a quote for ${serviceContext}.`
    : undefined;

  return (
    <section className="bg-[#041E42] text-white py-16 lg:py-20 border-t border-[#0E3366]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              {title}
            </h2>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B700]"
            >
              <Phone className="w-4 h-4 text-[#041E42]" aria-hidden="true" />
              <span className="tabular-nums">Call {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Quote</span>
            </a>

            <a
              href={routeToPath({ page: 'contact', preselectedService: serviceContext })}
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'contact', preselectedService: serviceContext });
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white hover:text-[#F5B700] border border-[#1E4780] hover:border-[#F5B700] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Request Online</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
