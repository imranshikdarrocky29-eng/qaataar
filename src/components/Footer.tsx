import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { RoutePath, routeToPath } from '../types/navigation';
import { BRAND_LOGO, COMPANY_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { OUR_SERVICES_MENU } from '../data/tradeServicesData';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="bg-[#02142E] text-slate-300 border-t border-[#0E3366]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a
              href={routeToPath({ page: 'home' })}
              onClick={(e) => handleNav(e, { page: 'home' })}
              className="inline-flex items-center gap-3 font-display text-xl font-bold text-white tracking-tight"
            >
              <img
                src={BRAND_LOGO}
                alt="Fix Hub Qatar logo"
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#F5B700]/70"
              />
              <span>{COMPANY_INFO.brand}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Reliable plumbing, electric, AC maintenance, satellite, painting, carpentry, TV installation, handyman, and welding services for homes and businesses across Doha and Qatar.
            </p>

            {/* Secondary Contact Number */}
            <div className="mt-4">
              <a
                href={COMPANY_INFO.secondaryPhoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#F5B700] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#F5B700]" aria-hidden="true" />
                <span className="font-mono tabular-nums">{COMPANY_INFO.secondaryPhoneDisplay}</span>
              </a>
            </div>

            {/* Social Platform Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fix Hub Qatar on Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#072754] border border-[#163C70] text-slate-200 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fix Hub Qatar on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#072754] border border-[#163C70] text-slate-200 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href={COMPANY_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fix Hub Qatar on TikTok"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#072754] border border-[#163C70] text-slate-200 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[#F5B700] tracking-wide">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'Home', route: { page: 'home' } as RoutePath },
                { label: 'About Us', route: { page: 'about' } as RoutePath },
                { label: 'Plumbing Services Directory', route: { page: 'services' } as RoutePath },
                { label: 'Residential Solutions', route: { page: 'residential' } as RoutePath },
                { label: 'Commercial Solutions', route: { page: 'commercial' } as RoutePath },
                { label: 'Service Areas in Qatar', route: { page: 'areas' } as RoutePath },
                { label: 'Maintenance Blog', route: { page: 'blog' } as RoutePath },
                { label: 'Contact Us', route: { page: 'contact' } as RoutePath },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={routeToPath(link.route)}
                    onClick={(e) => handleNav(e, link.route)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[#F5B700] tracking-wide">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {OUR_SERVICES_MENU.map((service) => (
                <li key={service.slug}>
                  <a
                    href={routeToPath(service.route)}
                    onClick={(e) => handleNav(e, service.route)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[#F5B700] tracking-wide">
              Doha Dispatch &amp; Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-start gap-2.5 text-white hover:text-[#F5B700] transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#F5B700]" aria-hidden="true" />
                  <span className="font-mono tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span className="font-mono tabular-nums">WhatsApp {COMPANY_INFO.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#F5B700]" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#F5B700]" aria-hidden="true" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#F5B700]" aria-hidden="true" />
                <span>{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#0E3366] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.brand}. All rights reserved.</p>
          <p>Doha · Lusail · The Pearl · Um Salal · Al Wakrah · Al Rayyan · Al Khor</p>
        </div>
      </div>
    </footer>
  );
}
