import { ArrowLeft, ArrowRight, Check, Phone, MessageCircle } from 'lucide-react';
import { RoutePath, routeToPath } from '../types/navigation';
import {
  COMPANY_INFO,
  PLUMBING_SERVICES,
  getWhatsAppUrl,
} from '../data/plumbingData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (route: RoutePath) => void;
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const service =
    PLUMBING_SERVICES.find((s) => s.slug === slug) || PLUMBING_SERVICES[0];

  const related = PLUMBING_SERVICES.filter(
    (s) => s.slug !== service.slug && s.category === service.category
  ).slice(0, 3);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-12 lg:py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <a
            href={routeToPath({ page: 'services' })}
            onClick={(e) => handleNav(e, { page: 'services' })}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#F5B700] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Plumbing Services</span>
          </a>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <span className="font-mono font-semibold text-[#F5B700] tabular-nums">
                  {service.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{service.category}</span>
                <span aria-hidden="true">·</span>
                <span>{service.propertyScope}</span>
                <span aria-hidden="true">·</span>
                <span>{service.responseWindow}</span>
              </div>

              <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                {service.title}
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
                    `Hello Fix Hub Qatar, I would like to book ${service.title} in Qatar.`
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
                    preselectedService: service.title,
                  })}
                  onClick={(e) =>
                    handleNav(e, {
                      page: 'contact',
                      preselectedService: service.title,
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
                  fallbackLabel={service.title}
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
                  Technical Scope &amp; Inspection Checklist
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
                  Built for Qatar Climate &amp; Building Systems
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.qatarContext}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <h2 className="font-display text-lg font-bold text-[#041E42]">
                  Approved Materials &amp; Equipment
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                  {service.materials.map((mat) => (
                    <li key={mat} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-display text-2xl font-bold text-[#041E42]">
            Related Plumbing Services
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <article
                key={item.slug}
                className="group border border-slate-200 rounded-xl overflow-hidden hover:border-[#041E42]/40 transition-colors flex flex-col justify-between bg-white"
              >
                <div>
                  <a
                    href={routeToPath({ page: 'service-detail', slug: item.slug })}
                    onClick={(e) =>
                      handleNav(e, { page: 'service-detail', slug: item.slug })
                    }
                    className="block aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200"
                  >
                    <ResilientImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                      containerClassName="w-full h-full"
                      fallbackLabel={item.shortTitle}
                    />
                  </a>
                  <div className="p-6">
                    <div className="font-mono text-xs font-semibold text-[#041E42] tabular-nums">
                      {item.index} · {item.responseWindow}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-[#041E42]">
                      <a
                        href={routeToPath({ page: 'service-detail', slug: item.slug })}
                        onClick={(e) =>
                          handleNav(e, { page: 'service-detail', slug: item.slug })
                        }
                        className="hover:text-amber-700 transition-colors"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-slate-100">
                  <a
                    href={routeToPath({ page: 'service-detail', slug: item.slug })}
                    onClick={(e) =>
                      handleNav(e, { page: 'service-detail', slug: item.slug })
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
        title={`Schedule ${service.shortTitle} in Doha or Qatar`}
        description="Speak directly with our plumbing dispatch desk by phone or WhatsApp to confirm availability and receive an upfront quote."
        serviceContext={service.title}
        onNavigate={onNavigate}
      />
    </div>
  );
}
