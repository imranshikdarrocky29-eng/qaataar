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

interface ResidentialPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function ResidentialPage({ onNavigate }: ResidentialPageProps) {
  const residentialSlugs = [
    'emergency-plumbing-services',
    'water-leakage-detection-and-repair',
    'bathroom-plumbing-and-renovation',
    'kitchen-plumbing-solutions',
    'toilet-basin-and-sink-installation',
    'water-heater-installation-and-repair',
    'water-tank-installation-and-maintenance',
    'tap-faucet-and-mixer-replacement',
    'shower-and-sanitary-fittings-installation',
  ];

  const residentialServices = PLUMBING_SERVICES.filter((s) =>
    residentialSlugs.includes(s.slug)
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
                Villas · Apartments · Residential Compounds
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                Residential Plumbing Services in Qatar
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
                From urgent ceiling leaks and blocked floor traps to complete bathroom upgrades, RO kitchen hookups, and rooftop water tank sanitization—Fix Hub Qatar keeps homes in Doha, Lusail, The Pearl, Al Waab, and Al Wakrah running smoothly.
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
                    'Hello Fix Hub Qatar, I need residential plumbing assistance for my home.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Home Service</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] rounded-xl overflow-hidden border border-[#163C70]">
                <ResilientImage
                  src={IMAGES.bathroom}
                  alt="Modern luxury residential bathroom plumbing in Qatar"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full min-h-[280px]"
                  fallbackLabel="Residential Bathroom & Home Plumbing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Respectful In-Home Care',
                points: [
                  'Protective floor coverings and clean work zones',
                  'Minimal tile impact during leak repairs',
                  'Safe, odor-free mechanical drain clearing',
                ],
              },
              {
                title: 'Villa & Majlis Systems',
                points: [
                  'Rooftop insulated tank cleaning & float valves',
                  'Booster pump pressure switch & check-valve tuning',
                  'Courtyard hose bibs and driver/service quarter lines',
                ],
              },
              {
                title: 'Apartment & Tower Standards',
                points: [
                  'European concealed WC cistern servicing without wall damage',
                  'Burst-proof stainless steel shattaf & angle valve upgrades',
                  'Pre-move-in snagging & landlord handover checks',
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <h2 className="font-display text-lg font-bold text-[#041E42]">
                  {block.title}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                  {block.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#041E42] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
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
            Residential Plumbing Services We Provide
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service) => (
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
                    <span>View details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand
        title="Book a Trusted Home Plumber in Doha Today"
        description="Get fast, clean residential plumbing repairs or fixture installations backed by our 90-day workmanship warranty."
        serviceContext="Residential Plumbing"
        onNavigate={onNavigate}
      />
    </div>
  );
}
