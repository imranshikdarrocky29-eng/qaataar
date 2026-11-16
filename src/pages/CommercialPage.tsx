import { ArrowRight, Check, Phone, MessageCircle } from 'lucide-react';
import { RoutePath, routeToHash } from '../types/navigation';
import {
  COMPANY_INFO,
  IMAGES,
  PLUMBING_SERVICES,
  getWhatsAppUrl,
} from '../data/plumbingData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface CommercialPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function CommercialPage({ onNavigate }: CommercialPageProps) {
  const commercialSlugs = [
    'emergency-plumbing-services',
    'water-leakage-detection-and-repair',
    'pipe-installation-repair-and-replacement',
    'blocked-drain-and-drainage-cleaning',
    'water-tank-installation-and-maintenance',
    'plumbing-inspection-and-preventive-maintenance',
    'residential-and-commercial-plumbing-solutions',
  ];

  const commercialServices = PLUMBING_SERVICES.filter((s) =>
    commercialSlugs.includes(s.slug)
  );

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F5B700]">
                Offices · Hospitality · Clinics · Industrial
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-balance">
                Commercial Plumbing Services in Qatar
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
                Downtime from a blocked kitchen waste line, failing booster pump, or restroom leak impacts operations immediately. Fix Hub Qatar delivers responsive commercial repairs, plant-room pipework, and scheduled Annual Maintenance Contracts (AMC).
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
                    'Hello Fix Hub Qatar, we would like a commercial plumbing consultation or AMC quote.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Facility Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] rounded-xl overflow-hidden border border-[#163C70]">
                <ResilientImage
                  src={IMAGES.commercial}
                  alt="Commercial water booster pump station and insulated supply pipelines in Doha"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full min-h-[280px]"
                  fallbackLabel="Commercial Plumbing Plant Systems"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700">Sectors We Support</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#041E42]">
              Built for Facility Managers &amp; Business Operators
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                sector: 'Corporate Offices & Towers',
                items: [
                  'Sensor taps & flushometer repairs',
                  'Riser isolation valve upgrades',
                  'After-hours maintenance windows',
                ],
              },
              {
                sector: 'Restaurants & Cafés',
                items: [
                  'Grease-trap & floor drain hydro-jetting',
                  'Pre-rinse sprayers & commercial sinks',
                  'Hot water supply continuity',
                ],
              },
              {
                sector: 'Clinics & Retail Units',
                items: [
                  'Backflow & check-valve compliance',
                  'Quiet washroom fit-outs & repairs',
                  'Concealed leak diagnostics',
                ],
              },
              {
                sector: 'Warehouses & Staff Housing',
                items: [
                  'High-capacity tank cleaning & sanitization',
                  'Duplex booster pump maintenance',
                  'Quarterly preventive AMC inspections',
                ],
              },
            ].map((card) => (
              <div
                key={card.sector}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <h3 className="font-display text-lg font-bold text-[#041E42]">
                  {card.sector}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#041E42] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#041E42]">
            Commercial Plumbing Capabilities
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <article
                key={service.slug}
                className="group border border-slate-200 rounded-xl overflow-hidden hover:border-[#041E42]/40 transition-colors flex flex-col justify-between bg-white"
              >
                <div>
                  <a
                    href={routeToHash({ page: 'service-detail', slug: service.slug })}
                    onClick={(e) =>
                      handleNav(e, { page: 'service-detail', slug: service.slug })
                    }
                    className="block aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200"
                  >
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                      containerClassName="w-full h-full"
                      fallbackLabel={service.shortTitle}
                    />
                  </a>
                  <div className="p-6">
                    <div className="font-mono text-xs font-semibold text-[#041E42] tabular-nums">
                      {service.index} · {service.responseWindow}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-[#041E42]">
                      <a
                        href={routeToHash({ page: 'service-detail', slug: service.slug })}
                        onClick={(e) =>
                          handleNav(e, { page: 'service-detail', slug: service.slug })
                        }
                        className="hover:text-amber-700 transition-colors"
                      >
                        {service.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-slate-100">
                  <a
                    href={routeToHash({ page: 'service-detail', slug: service.slug })}
                    onClick={(e) =>
                      handleNav(e, { page: 'service-detail', slug: service.slug })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    <span>View technical scope</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand
        title="Request a Commercial Site Survey or AMC Proposal"
        description="Contact our commercial plumbing team for priority dispatch, itemized quotations, and scheduled preventive maintenance across Qatar."
        serviceContext="Commercial Plumbing & AMC"
        onNavigate={onNavigate}
      />
    </div>
  );
}
