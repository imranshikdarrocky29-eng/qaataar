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
import { RoutePath, routeToHash } from '../types/navigation';
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
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface HomePageProps {
  onNavigate: (route: RoutePath) => void;
}

const CATEGORIES: ('All' | ServiceCategory)[] = [
  'All',
  'Emergency & Repairs',
  'Bathrooms & Kitchens',
  'Pipes, Tanks & Systems',
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ServiceCategory>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredServices =
    selectedCategory === 'All'
      ? PLUMBING_SERVICES
      : PLUMBING_SERVICES.filter((s) => s.category === selectedCategory);

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
                Doha &amp; Nationwide Qatar Plumbing Specialists
              </p>

              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                Reliable Plumbing Solutions in Qatar
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Fix Hub Qatar provides dependable emergency repairs, acoustic leak detection, pipe installation, drainage clearance, and full bathroom and kitchen plumbing for homes and businesses across Doha, Lusail, The Pearl, and Al Wakrah.
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
                  alt="Professional plumber from Fix Hub Qatar inspecting copper and PEX manifold pipes in Doha"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full min-h-[280px]"
                  fallbackLabel="Fix Hub Qatar Plumbing Engineering"
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
                13 Services
              </div>
              <div className="mt-1 text-sm text-slate-200">
                Residential &amp; commercial coverage
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
                  alt="Fix Hub Qatar plumber calibrating pressure gauge and acoustic leak detector"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Diagnostic Plumbing Precision"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-amber-700">Who We Are</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#041E42] text-balance">
                Dedicated Plumbing Specialists Built on Clean Workmanship and Transparent Service
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Fix Hub Qatar is a specialized plumbing company serving villas, apartments, offices, shops, and commercial buildings across Qatar. Instead of juggling multiple unverified contractors, our customers work directly with our trained plumbing technicians who arrive on time, diagnose faults accurately, and leave every space clean.
              </p>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Whether resolving a late-night pipe burst in Al Sadd or executing a full bathroom upgrade in Lusail, we combine durable materials with straightforward communication from first call to final pressure test.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href={routeToHash({ page: 'about' })}
                  onClick={(e) => handleNav(e, { page: 'about' })}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700 transition-colors"
                >
                  <span>About Fix Hub Qatar</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={routeToHash({ page: 'areas' })}
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

      {/* 3. Professional Plumbing Services Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-700">Our Plumbing Services</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#041E42] text-balance">
                Complete Plumbing Repair, Installation &amp; Maintenance in Qatar
              </h2>
            </div>

            <a
              href={routeToHash({ page: 'services' })}
              onClick={(e) => handleNav(e, { page: 'services' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700 whitespace-nowrap shrink-0"
            >
              <span>Explore full service directory</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter plumbing services by category"
            className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#041E42] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#041E42]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.slug}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#041E42]/40 transition-colors duration-150"
              >
                <div>
                  <a
                    href={routeToHash({ page: 'service-detail', slug: service.slug })}
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
                        href={routeToHash({ page: 'service-detail', slug: service.slug })}
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
                    href={routeToHash({ page: 'service-detail', slug: service.slug })}
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
        </div>
      </section>

      {/* 4. Why Choose Fix Hub Qatar */}
      <section className="py-16 lg:py-20 bg-[#041E42] text-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#F5B700]">Why Choose Fix Hub Qatar</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                Engineering Standards Without Hidden Surprises
              </h2>
              <p className="mt-4 text-base text-slate-200 leading-relaxed">
                Plumbing faults disrupt daily life and damage expensive property finishes. Our focus is getting the repair right on the first visit with durable components and respectful technicians.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Wrench,
                  title: 'Experienced Plumbing Technicians',
                  text: 'Trained specialists familiar with European concealed frames, PPR fusion systems, booster pumps, and Qatar building standards.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Quality Materials & Workmanship',
                  text: 'We install WRAS-approved stainless flexi-hoses, brass valves, and pressure-tested fittings backed by our 90-day warranty.',
                },
                {
                  icon: Clock,
                  title: 'Fast Response Across Doha',
                  text: 'Stocked service vehicles stationed across key Doha corridors for prompt arrivals on urgent leaks and scheduled visits.',
                },
                {
                  icon: Award,
                  title: 'Upfront & Competitive Pricing',
                  text: 'Clear itemization of labor and spare parts before any work starts, protecting residential and commercial budgets.',
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

      {/* 5. Residential & Commercial Plumbing Solutions */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700">Property Sectors</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#041E42] text-balance">
              Tailored Residential &amp; Commercial Plumbing Across Qatar
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Card */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden">
                <ResilientImage
                  src={IMAGES.bathroom}
                  alt="Residential bathroom plumbing and sanitary installation in Doha villa"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Residential Plumbing Qatar"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Villas · Apartments · Compounds
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#041E42]">
                    Residential Plumbing Qatar
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Clean, respectful in-home service for bathroom renovations, kitchen sinks, RO filters, leaking mixers, water heaters, shattaf upgrades, and rooftop water tank cleaning.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {[
                      'Non-invasive acoustic leak detection under marble & tiles',
                      'Concealed toilet cisterns, rain showers, and basin fit-outs',
                      'Water heater servicing and semi-annual tank sanitization',
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
                    href={routeToHash({ page: 'residential' })}
                    onClick={(e) => handleNav(e, { page: 'residential' })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    <span>Explore Residential Plumbing</span>
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
                  alt="Commercial plumbing booster pump room and insulated potable water piping in Qatar"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Commercial Plumbing Qatar"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Offices · Hospitality · Clinics · Industrial
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#041E42]">
                    Commercial Plumbing Qatar
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Scheduled maintenance and urgent repair support for commercial towers, restaurants, medical clinics, retail outlets, and warehouses requiring uninterrupted water and drainage.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {[
                      'Multi-stage booster pump stations and main riser repairs',
                      'Commercial kitchen grease-trap and hydro-jet drain clearing',
                      'Flexible Annual Maintenance Contracts (AMC) & off-hours work',
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
                    href={routeToHash({ page: 'commercial' })}
                    onClick={(e) => handleNav(e, { page: 'commercial' })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    <span>Explore Commercial Plumbing</span>
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
              Simple Four-Step Plumbing Service Process
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
                Frequently Asked Questions About Plumbing Services in Qatar
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
      <CallToActionBand onNavigate={onNavigate} />
    </div>
  );
}
