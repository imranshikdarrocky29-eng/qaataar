import { Check, ShieldCheck, Wrench, Clock, Users } from 'lucide-react';
import { RoutePath } from '../types/navigation';
import { IMAGES } from '../data/plumbingData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface AboutPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F5B700]">About Fix Hub Qatar</p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                A Dedicated Plumbing Service Brand Built Around Trust and Craftsmanship
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
                Fix Hub Qatar is a specialized plumbing company based in Doha, committed to making plumbing repairs, installations, and preventive maintenance straightforward, dependable, and stress-free for homeowners and commercial property operators across Qatar.
              </p>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                We operate directly with our own trained plumbing technicians, equipped service vehicles, and quality-tested fittings—never as a third-party directory. Every visit reflects our commitment to punctuality, clean work habits, and honest pricing.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] rounded-xl overflow-hidden border border-[#163C70] bg-[#072754]">
                <ResilientImage
                  src={IMAGES.hero}
                  alt="Fix Hub Qatar lead plumber checking residential manifold piping in Doha"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full min-h-[280px]"
                  fallbackLabel="Fix Hub Qatar Engineering Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700">Our Core Values</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#041E42]">
              How Fix Hub Qatar Protects Your Property
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: 'Experienced & Courteous Technicians',
                body: 'Our plumbers are vetted, uniformed, and trained across residential sanitaryware, concealed cisterns, PPR thermal welding, and commercial pump stations.',
              },
              {
                icon: ShieldCheck,
                title: 'Pressure-Tested Materials Only',
                body: 'We do not cut corners with brittle fittings. Every replacement valve, flexi-hose, and pipe joint meets Qatar pressure requirements and comes with a 90-day workmanship warranty.',
              },
              {
                icon: Clock,
                title: 'Fast Response & Clear Scheduling',
                body: 'Whether it is an emergency leak at midnight or a planned bathroom upgrade, we confirm exact arrival windows and keep you informed from dispatch to completion.',
              },
              {
                icon: Users,
                title: 'Transparent Communication',
                body: 'You receive a straightforward diagnosis and itemized quotation before work starts—plus preventive advice to keep your pipes, drains, and heaters running reliably.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-xl p-7"
                >
                  <Icon className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#041E42]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
                <ResilientImage
                  src={IMAGES.kitchen}
                  alt="Spotless modern residential kitchen maintained by Fix Hub Qatar"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  fallbackLabel="Clean Handover Guarantee"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#041E42]">
                Clean Job Sites &amp; Lasting Relationships
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Inviting a technician into your family villa or active workplace requires trust. Our team wears protective shoe covers, shields marble and cabinetry around the work zone, clears all waste material, and verifies zero leaks before leaving.
              </p>
              <ul className="mt-6 space-y-3 text-sm sm:text-base text-slate-700">
                {[
                  'Full coverage for villas, apartments, offices, shops, and industrial sites',
                  'Non-invasive leak detection to minimize wall or floor disruption',
                  'Itemized billing and 90-day workmanship warranty on every job',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#041E42] mt-1 shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBand onNavigate={onNavigate} />
    </div>
  );
}
