import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Check,
  ShieldCheck,
  Wrench,
  Clock,
  Award,
} from 'lucide-react';
import { RoutePath, routeToPath } from '../types/navigation';
import {
  COMPANY_INFO,
  IMAGES,
  PLUMBING_SERVICES,
  TESTIMONIALS,
  FAQS,
  WORK_PROCESS,
  ServiceCategory,
  getWhatsAppUrl,
} from '../data/plumbingData';
import { OUR_SERVICES_MENU } from '../data/tradeServicesData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface HomePageProps {
  onNavigate: (route: RoutePath) => void;
}

type HomeServiceView = 'Core Services' | ServiceCategory;

const HOME_TABS: HomeServiceView[] = [
  'Core Services',
  'Emergency & Repairs',
  'Bathrooms & Kitchens',
  'Pipes, Tanks & Systems',
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedTab, setSelectedTab] = useState<HomeServiceView>('Core Services');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredPlumbing =
    selectedTab === 'Core Services'
      ? []
      : PLUMBING_SERVICES.filter((s) => s.category === selectedTab);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-[#041E42] text-white border-b border-[#0E3366]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F5B700] tracking-wide">
                Doha &amp; Nationwide Qatar Multi-Trade Specialists
              </p>

              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                Reliable Plumbing, Electric and Home Maintenance Solution in Qatar
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Fix Hub Qatar delivers dependable plumbing, electrical troubleshooting, AC maintenance, satellite repair, painting, carpentry, TV wall mounting, handyman fixes, and welding services for villas, apartments, and commercial facilities across Doha, Lusail, The Pearl, and Um Salal.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B700]"
                >
                  <Phone className="w-4 h-4 text-[#041E42]" aria-hidden="true" />
                  <span className="tabular-nums">Call Now · {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300">
                24/7 Emergency Dispatch · Upfront On-Site Quotes · Residential &amp; Commercial
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] lg:min-h-[400px] rounded-xl overflow-hidden border border-[#163C70] bg-[#072754]">
                <ResilientImage
                  src={IMAGES.hero}
                  alt="Fix Hub Qatar technician handling residential plumbing, electrical, and home maintenance in Doha"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full min-h-[280px]"
                  fallbackLabel="Fix Hub Qatar Home Maintenance"
                />
              </div>
            </div>
          </div>

          {/* Operational Proof Strip below Hero Split */}
          <div className="mt-12 pt-8 border-t border-[#143566] grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5B700] tabular-nums">
                45 Min
              </div>
              <div className="mt-1 text-sm text-slate-200">
                Average Doha emergency dispatch
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5B700] tabular-nums">
                24/7
              </div>
              <div className="mt-1 text-sm text-slate-200">
                Direct phone &amp; WhatsApp support
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5B700] tabular-nums">
                9 Trades
              </div>
              <div className="mt-1 text-sm text-slate-200">
                Plumbing, electric &amp; home maintenance
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5B700] tabular-nums">
                90-Day
              </div>
              <div className="mt-1 text-sm text-slate-200">
                Workmanship guarantee on repairs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brief Introduction to Fix Hub Qatar (Who We Are) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white">
                <ResilientImage
                  src={IMAGES.heater}
                  alt="Fix Hub Qatar maintenance engineer inspecting plumbing and electrical systems"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Diagnostic Maintenance Precision"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-amber-700">Who We Are</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#041E42] text-balance">
                Complete Home &amp; Commercial Maintenance Built on Clean Workmanship
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Fix Hub Qatar is a dedicated technical service team serving villas, apartments, offices, shops, and commercial buildings across Qatar. Instead of coordinating separate contractors for leaks, tripping breakers, AC servicing, painting, carpentry, or TV mounting, one call connects you to our trained in-house specialists.
              </p>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Whether fixing a late-night pipe burst in Bin Omran, servicing split ACs in Al Khessa, or completing full move-in handyman and electrical upgrades in Lusail, we combine certified materials with transparent communication from first call to final handover.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href={routeToPath({ page: 'about' })}
                  onClick={(e) => handleNav(e, { page: 'about' })}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700 transition-colors"
                >
                  <span>About Fix Hub Qatar</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={routeToPath({ page: 'areas' })}
                  onClick={(e) => handleNav(e, { page: 'areas' })}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#041E42] transition-colors"
                >
                  <span>View Qatar Service Areas</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services Section (All 9 Core Services + Plumbing Specialties Tabs) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-700">Our Services</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#041E42] text-balance">
                Plumbing, Electric &amp; Complete Home Maintenance Services in Qatar
              </h2>
            </div>

            <a
              href={routeToPath({ page: 'plumbing-service' })}
              onClick={(e) => handleNav(e, { page: 'plumbing-service' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700 whitespace-nowrap shrink-0"
            >
              <span>Explore plumbing service directory</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Browse Fix Hub Qatar services"
            className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200"
          >
            {HOME_TABS.map((tab) => {
              const active = selectedTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#041E42] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#041E42]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid */}
          {selectedTab === 'Core Services' ? (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OUR_SERVICES_MENU.map((service) => (
                <article
                  key={service.slug}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#041E42]/40 transition-colors duration-150"
                >
                  <div>
                    <a
                      href={routeToPath(service.route)}
                      onClick={(e) => handleNav(e, service.route)}
                      className="block aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200 focus-visible:outline-2 focus-visible:outline-[#041E42]"
                    >
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                        containerClassName="w-full h-full"
                        fallbackLabel={service.label}
                      />
                    </a>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono font-semibold text-[#041E42] tabular-nums">
                          {service.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{service.propertyScope}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.responseWindow}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-lg font-semibold text-[#041E42] group-hover:text-amber-700 transition-colors">
                        <a
                          href={routeToPath(service.route)}
                          onClick={(e) => handleNav(e, service.route)}
                          className="focus-visible:outline-2 focus-visible:outline-[#041E42] rounded-sm"
                        >
                          {service.label}
                        </a>
                      </h3>

                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <a
                      href={routeToPath(service.route)}
                      onClick={(e) => handleNav(e, service.route)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#041E42] hover:text-amber-700 whitespace-nowrap"
                    >
                      <span>Service details</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      href={getWhatsAppUrl(
                        `Hello Fix Hub Qatar, I need assistance with ${service.label}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
                    >
                      WhatsApp quote
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlumbing.map((service) => (
                <article
                  key={service.slug}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#041E42]/40 transition-colors duration-150"
                >
                  <div>
                    <a
                      href={routeToPath({ page: 'service-detail', slug: service.slug })}
                      onClick={(e) =>
                        handleNav(e, { page: 'service-detail', slug: service.slug })
                      }
                      className="block aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200 focus-visible:outline-2 focus-visible:outline-[#041E42]"
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
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono font-semibold text-[#041E42] tabular-nums">
                          {service.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{service.propertyScope}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.responseWindow}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-lg font-semibold text-[#041E42] group-hover:text-amber-700 transition-colors">
                        <a
                          href={routeToPath({ page: 'service-detail', slug: service.slug })}
                          onClick={(e) =>
                            handleNav(e, { page: 'service-detail', slug: service.slug })
                          }
                          className="focus-visible:outline-2 focus-visible:outline-[#041E42] rounded-sm"
                        >
                          {service.title}
                        </a>
                      </h3>

                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <a
                      href={routeToPath({ page: 'service-detail', slug: service.slug })}
                      onClick={(e) =>
                        handleNav(e, { page: 'service-detail', slug: service.slug })
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#041E42] hover:text-amber-700 whitespace-nowrap"
                    >
                      <span>Service details</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      href={getWhatsAppUrl(
                        `Hello Fix Hub Qatar, I need assistance with ${service.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
                    >
                      WhatsApp quote
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Why Choose Fix Hub Qatar */}
      <section className="py-16 lg:py-20 bg-[#041E42] text-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#F5B700]">Why Choose Fix Hub Qatar</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                Engineering &amp; Maintenance Standards Without Hidden Surprises
              </h2>
              <p className="mt-4 text-base text-slate-200 leading-relaxed">
                Water leaks, electrical faults, and AC breakdowns disrupt daily comfort and threaten property finishes. Our focus is resolving every task cleanly on the first visit with certified parts and skilled technicians.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Wrench,
                  title: 'Skilled Multi-Trade Technicians',
                  text: 'Experienced specialists in plumbing, electrical panels, split/ducted AC systems, carpentry, painting, satellite alignment, TV mounting, and welding.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Quality Materials & Workmanship',
                  text: 'We install WRAS-approved hoses, certified breakers, brass valves, and heavy-duty anchors backed by our 90-day workmanship warranty.',
                },
                {
                  icon: Clock,
                  title: 'Fast Response Across Qatar',
                  text: 'Stocked service vehicles stationed across Doha and North Qatar corridors for prompt arrivals on urgent repairs and scheduled visits.',
                },
                {
                  icon: Award,
                  title: 'Upfront & Competitive Pricing',
                  text: 'Clear itemization of labor and spare parts before any work begins, protecting residential and commercial budgets.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl bg-[#072754] border border-[#143A70]"
                  >
                    <Icon className="w-5 h-5 text-[#F5B700]" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Residential & Commercial Solutions */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700">Property Sectors</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#041E42] text-balance">
              Tailored Residential &amp; Commercial Maintenance Across Qatar
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Card */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden">
                <ResilientImage
                  src={IMAGES.bathroom}
                  alt="Residential plumbing, electrical, and home maintenance in Doha villa"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Residential Maintenance Qatar"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Villas · Apartments · Compounds
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#041E42]">
                    Residential Plumbing &amp; Home Maintenance
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Clean, respectful in-home service for leak detection, electrical sockets and lighting, split AC servicing, painting, carpentry, TV mounting, satellite alignment, and handyman tasks.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {[
                      'Plumbing leaks, water heaters, bathrooms, and rooftop water tanks',
                      'Electrical troubleshooting, LED lighting, TV & satellite setup',
                      'AC cleaning, interior painting, carpentry, and steel gate welding',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#041E42] mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-200">
                  <a
                    href={routeToPath({ page: 'residential' })}
                    onClick={(e) => handleNav(e, { page: 'residential' })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    <span>Explore Residential Solutions</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden">
                <ResilientImage
                  src={IMAGES.commercial}
                  alt="Commercial plumbing, electrical, and facility maintenance in Qatar"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Commercial Facility Maintenance Qatar"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Offices · Hospitality · Clinics · Industrial
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#041E42]">
                    Commercial Plumbing &amp; Facility Care
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Scheduled preventive maintenance and rapid emergency repair support for commercial towers, restaurants, clinics, retail outlets, and warehouses requiring zero operational downtime.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {[
                      'Booster pump stations, drainage hydro-jetting, and main riser repairs',
                      'Electrical DB balancing, office lighting, and commercial AC maintenance',
                      'Flexible Annual Maintenance Contracts (AMC) & off-hours dispatch',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#041E42] mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-200">
                  <a
                    href={routeToPath({ page: 'commercial' })}
                    onClick={(e) => handleNav(e, { page: 'commercial' })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    <span>Explore Commercial Solutions</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Work Process */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700">How We Work</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#041E42] text-balance">
              Simple Four-Step Service &amp; Maintenance Process
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="font-mono text-sm font-semibold text-amber-700 tabular-nums">
                  {item.step}.
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-[#041E42]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials & Reviews */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700">Client Feedback</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#041E42] text-balance">
              Trusted by Homeowners &amp; Facility Managers Across Doha
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {TESTIMONIALS.map((review) => (
              <blockquote
                key={review.name}
                className="border border-slate-200 rounded-xl p-6 sm:p-7 bg-slate-50/70 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {review.service} · {review.location}
                  </p>
                  <p className="mt-3 text-base text-slate-800 leading-relaxed">
                    “{review.quote}”
                  </p>
                </div>

                <footer className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-sm font-semibold text-[#041E42]">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {review.role} — {review.outcome}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-amber-700">Common Questions</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#041E42] text-balance">
                Frequently Asked Questions About Our Services in Qatar
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Quick answers about emergency arrival windows, leak detection, pricing transparency, and our workmanship warranty across Doha and Qatar.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white overflow-hidden">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#041E42]"
                    >
                      <span className="font-display text-base font-semibold text-[#041E42]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Call-to-Action */}
      <CallToActionBand
        title="Need Plumbing, Electric, AC or Home Maintenance in Qatar?"
        description="Contact Fix Hub Qatar now for 24/7 emergency dispatch, electrical & AC repairs, leak detection, carpentry, painting, or a clear quotation for your property."
        onNavigate={onNavigate}
      />
    </div>
  );
}
