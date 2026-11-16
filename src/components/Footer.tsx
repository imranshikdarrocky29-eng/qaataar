import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { RoutePath, routeToHash } from '../types/navigation';
import { BRAND_LOGO, COMPANY_INFO, PLUMBING_SERVICES, getWhatsAppUrl } from '../data/plumbingData';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  const featuredServices = PLUMBING_SERVICES.slice(0, 7);

  return (
    <footer className="bg-[#02142E] text-slate-300 border-t border-[#0E3366]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a
              href={routeToHash({ page: 'home' })}
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
              Dedicated plumbing installation, repair, leak detection, and maintenance services for residential, commercial, and industrial properties across Doha and Qatar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-300">
              <a
                href={getWhatsAppUrl('Hello Fix Hub Qatar, connecting via your website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5B700] transition-colors"
              >
                WhatsApp
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5B700] transition-colors"
              >
                Instagram
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5B700] transition-colors"
              >
                LinkedIn
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
                { label: 'Our Plumbing Services', route: { page: 'services' } as RoutePath },
                { label: 'Residential Plumbing', route: { page: 'residential' } as RoutePath },
                { label: 'Commercial Plumbing', route: { page: 'commercial' } as RoutePath },
                { label: 'Service Areas in Qatar', route: { page: 'areas' } as RoutePath },
                { label: 'Plumbing Blog', route: { page: 'blog' } as RoutePath },
                { label: 'Contact Us', route: { page: 'contact' } as RoutePath },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={routeToHash(link.route)}
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
              Plumbing Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <a
                    href={routeToHash({ page: 'service-detail', slug: service.slug })}
                    onClick={(e) =>
                      handleNav(e, { page: 'service-detail', slug: service.slug })
                    }
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={routeToHash({ page: 'services' })}
                  onClick={(e) => handleNav(e, { page: 'services' })}
                  className="text-[#F5B700] hover:text-amber-300 font-medium transition-colors"
                >
                  View all 13 services
                </a>
              </li>
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
          <p>Doha · Lusail · The Pearl · Al Wakrah · Al Rayyan · Al Khor</p>
        </div>
      </div>
    </footer>
  );
}
