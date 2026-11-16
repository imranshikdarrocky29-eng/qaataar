import { useState } from 'react';
import { ArrowRight, Search, Phone, MessageCircle } from 'lucide-react';
import { RoutePath, routeToHash } from '../types/navigation';
import {
  COMPANY_INFO,
  PLUMBING_SERVICES,
  ServiceCategory,
  getWhatsAppUrl,
} from '../data/plumbingData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface ServicesPageProps {
  onNavigate: (route: RoutePath) => void;
}

const CATEGORIES: ('All' | ServiceCategory)[] = [
  'All',
  'Emergency & Repairs',
  'Bathrooms & Kitchens',
  'Pipes, Tanks & Systems',
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ServiceCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = PLUMBING_SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      service.title.toLowerCase().includes(q) ||
      service.summary.toLowerCase().includes(q) ||
      service.propertyScope.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#F5B700]">Our Plumbing Services</p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Professional Plumbing Repair, Installation &amp; Maintenance in Qatar
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Fix Hub Qatar handles every residential, commercial, and emergency plumbing requirement across Doha and surrounding municipalities. Select any service below to inspect technical scope, materials, and response times.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter plumbing services"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#072754] rounded-lg border border-[#163C70]"
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
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#F5B700] text-[#041E42] font-semibold shadow-xs'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leak, drain, heater, PPR..."
                aria-label="Search plumbing services"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#041E42] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B700] focus:border-[#F5B700]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          {filtered.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
              <h2 className="font-display text-xl font-semibold text-[#041E42]">
                No matching services found
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Try clearing your search filter or contact our Doha desk directly for custom plumbing assistance.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-5 px-4 py-2 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#041E42]/40 transition-colors"
                >
                  <div>
                    <div className="aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        fallbackLabel={service.shortTitle}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono font-semibold text-[#041E42] tabular-nums">
                          {service.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{service.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.responseWindow}</span>
                      </div>

                      <h2 className="mt-2.5 font-display text-xl font-semibold text-[#041E42]">
                        <a
                          href={routeToHash({
                            page: 'service-detail',
                            slug: service.slug,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate({
                              page: 'service-detail',
                              slug: service.slug,
                            });
                          }}
                          className="hover:text-amber-700 transition-colors"
                        >
                          {service.title}
                        </a>
                      </h2>

                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <a
                      href={routeToHash({
                        page: 'service-detail',
                        slug: service.slug,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate({
                          page: 'service-detail',
                          slug: service.slug,
                        });
                      }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#041E42] hover:text-amber-700 whitespace-nowrap"
                    >
                      <span>View Full Details</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <div className="flex items-center gap-3">
                      <a
                        href={COMPANY_INFO.phoneHref}
                        aria-label={`Call about ${service.title}`}
                        className="text-slate-500 hover:text-[#041E42] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href={getWhatsAppUrl(
                          `Hello Fix Hub Qatar, I would like a quote for ${service.title}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp about ${service.title}`}
                        className="text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CallToActionBand onNavigate={onNavigate} />
    </div>
  );
}
