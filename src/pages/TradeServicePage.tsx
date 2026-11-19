import { ArrowLeft, ArrowRight, Check, Phone, MessageCircle } from 'lucide-react';
import { RoutePath, routeToPath } from '../types/navigation';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { OUR_SERVICES_MENU, TRADE_SERVICES } from '../data/tradeServicesData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface TradeServicePageProps {
  slug: string;
  onNavigate: (route: RoutePath) => void;
}

export function TradeServicePage({ slug, onNavigate }: TradeServicePageProps) {
  const service =
    TRADE_SERVICES.find((s) => s.slug === slug) || TRADE_SERVICES[0];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-12 lg:py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <a
            href={routeToPath({ page: 'home' })}
            onClick={(e) => handleNav(e, { page: 'home' })}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#F5B700] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </a>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <span className="font-semibold text-[#F5B700]">Our Services</span>
                <span aria-hidden="true">·</span>
                <span>{service.propertyScope}</span>
                <span aria-hidden="true">·</span>
                <span>{service.responseWindow}</span>
              </div>

              <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                {service.label} in Qatar
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#041E42]" aria-hidden="true" />
                  <span className="tabular-nums">Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    `Hello Fix Hub Qatar, I would like to book ${service.label} in Qatar.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp for Quote</span>
                </a>
                <a
                  href={routeToPath({
                    page: 'contact',
                    preselectedService: service.label,
                  })}
                  onClick={(e) =>
                    handleNav(e, {
                      page: 'contact',
                      preselectedService: service.label,
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white border border-[#1E4780] hover:border-[#F5B700] hover:text-[#F5B700] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Book Online</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full min-h-[260px] rounded-xl overflow-hidden border border-[#163C70] bg-[#072754]">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full min-h-[260px]"
                  fallbackLabel={service.label}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <h2 className="font-display text-xl font-bold text-[#041E42]">
                  What Our {service.label} Covers
                </h2>
                <ul className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-700">
                  {service.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 text-[#041E42] mt-1 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <h2 className="font-display text-xl font-bold text-[#041E42]">
                  Tailored for Qatar Homes &amp; Properties
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.qatarContext}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <h2 className="font-display text-lg font-bold text-[#041E42]">
                  Ideal For
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                  {service.idealFor.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2.5">
                      <ArrowRight
                        className="w-4 h-4 text-amber-700 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <h2 className="font-display text-lg font-bold text-[#041E42]">
                  All Fix Hub Qatar Services
                </h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {OUR_SERVICES_MENU.map((item) => {
                    const isCurrent = item.slug === service.slug;
                    return (
                      <li key={item.slug}>
                        <a
                          href={routeToPath(item.route)}
                          onClick={(e) => handleNav(e, item.route)}
                          className={`flex items-center justify-between py-1.5 transition-colors ${
                            isCurrent
                              ? 'font-semibold text-amber-700'
                              : 'text-slate-700 hover:text-[#041E42]'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBand
        title={`Schedule ${service.label} in Doha or Qatar`}
        description="Contact Fix Hub Qatar directly by phone or WhatsApp for fast technician dispatch and upfront quotation."
        serviceContext={service.label}
        onNavigate={onNavigate}
      />
    </div>
  );
}
