import { useState } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { RoutePath, routeToHash } from '../types/navigation';
import { SERVICE_AREAS, getWhatsAppUrl } from '../data/plumbingData';
import { CallToActionBand } from '../components/CallToActionBand';

interface ServiceAreasPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function ServiceAreasPage({ onNavigate }: ServiceAreasPageProps) {
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const zones = ['All', 'Doha Core', 'North & Lusail', 'West & South Qatar'];

  const filteredAreas = SERVICE_AREAS.filter((area) => {
    if (selectedZone === 'All') return true;
    if (selectedZone === 'Doha Core') {
      return (
        area.zone.includes('Central Doha') ||
        area.zone.includes('Inner Doha') ||
        area.zone.includes('West Doha')
      );
    }
    if (selectedZone === 'North & Lusail') {
      return (
        area.zone.includes('North Doha') ||
        area.zone.includes('Lusail') ||
        area.zone.includes('Northwest') ||
        area.zone.includes('North/South')
      );
    }
    return (
      area.zone.includes('South Qatar') ||
      area.zone.includes('Greater Doha West') ||
      area.zone.includes('Industrial')
    );
  });

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#F5B700]">Qatar Coverage</p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Plumbing Service Areas Across Doha &amp; Qatar
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Our stocked plumbing service vans operate daily across Doha neighborhoods, Lusail, The Pearl, Al Wakrah, Al Rayyan, and industrial zones—subject to live dispatch schedules and route availability.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter service areas by region"
            className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-[#072754] rounded-lg border border-[#163C70]"
          >
            {zones.map((zone) => {
              const active = selectedZone === zone;
              return (
                <button
                  key={zone}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#F5B700] text-[#041E42] font-semibold shadow-xs'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {zone}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAreas.map((area) => (
              <article
                key={area.name}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#041E42]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-amber-700">{area.zone}</span>
                    <span className="inline-flex items-center gap-1 font-mono tabular-nums">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {area.dispatch}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl font-bold text-[#041E42] flex items-start gap-2">
                    <MapPin
                      className="w-4 h-4 text-[#041E42] mt-1.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{area.name}</span>
                  </h2>

                  <p className="mt-3 text-xs font-medium text-slate-500">
                    Properties: {area.propertyTypes}
                  </p>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {area.notes}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <a
                    href={getWhatsAppUrl(
                      `Hello Fix Hub Qatar, I am located in ${area.name} and need a plumber.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Check availability</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href={routeToHash({ page: 'contact' })}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ page: 'contact' });
                    }}
                    className="text-xs font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    Book visit
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand
        title="Confirm Same-Day Plumber Dispatch for Your District"
        description="Call or WhatsApp Fix Hub Qatar with your location pin or building name to verify the nearest available technician."
        onNavigate={onNavigate}
      />
    </div>
  );
}
