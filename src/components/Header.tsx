import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RoutePath, routeToHash } from '../types/navigation';
import { BRAND_LOGO, COMPANY_INFO, getWhatsAppUrl } from '../data/plumbingData';

interface HeaderProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
}

const NAV_ITEMS: { label: string; route: RoutePath; matchPages: RoutePath['page'][] }[] = [
  { label: 'Services', route: { page: 'services' }, matchPages: ['services', 'service-detail'] },
  { label: 'Residential', route: { page: 'residential' }, matchPages: ['residential'] },
  { label: 'Commercial', route: { page: 'commercial' }, matchPages: ['commercial'] },
  { label: 'Areas', route: { page: 'areas' }, matchPages: ['areas'] },
  { label: 'Blog', route: { page: 'blog' }, matchPages: ['blog'] },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: RoutePath
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#041E42]/95 backdrop-blur-sm border-b border-[#0E3366]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Logo + Single-line Wordmark */}
        <a
          href={routeToHash({ page: 'home' })}
          onClick={(e) => handleLinkClick(e, { page: 'home' })}
          className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B700] rounded-sm"
        >
          <img
            src={BRAND_LOGO}
            alt="Fix Hub Qatar logo"
            className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#F5B700]/70"
          />
          <span>{COMPANY_INFO.brand}</span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.matchPages.includes(currentRoute.page);
            return (
              <a
                key={item.label}
                href={routeToHash(item.route)}
                onClick={(e) => handleLinkClick(e, item.route)}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B700] ${
                  isActive
                    ? 'border-[#F5B700] text-white font-semibold'
                    : 'border-transparent hover:text-white hover:border-[#F5B700]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + responsive mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={routeToHash({ page: 'contact' })}
            onClick={(e) => handleLinkClick(e, { page: 'contact' })}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#041E42] bg-[#F5B700] hover:bg-[#E0A700] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B700]"
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#163C70] text-white hover:bg-[#0A2E5C] transition-colors focus-visible:outline-2 focus-visible:outline-[#F5B700]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#0E3366] bg-[#041E42] px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {[
              { label: 'Home', route: { page: 'home' } as RoutePath },
              { label: 'About Us', route: { page: 'about' } as RoutePath },
              { label: 'Our Plumbing Services', route: { page: 'services' } as RoutePath },
              { label: 'Residential Plumbing', route: { page: 'residential' } as RoutePath },
              { label: 'Commercial Plumbing', route: { page: 'commercial' } as RoutePath },
              { label: 'Service Areas', route: { page: 'areas' } as RoutePath },
              { label: 'Blog', route: { page: 'blog' } as RoutePath },
              { label: 'Contact Us', route: { page: 'contact' } as RoutePath },
            ].map((item) => {
              const active = currentRoute.page === item.route.page;
              return (
                <a
                  key={item.label}
                  href={routeToHash(item.route)}
                  onClick={(e) => handleLinkClick(e, item.route)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#0A2E5C] text-[#F5B700] font-semibold'
                      : 'text-slate-200 hover:bg-[#0A2E5C]/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#0E3366] grid grid-cols-2 gap-3">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#041E42] bg-[#F5B700] rounded-lg hover:bg-[#E0A700] whitespace-nowrap"
            >
              Call Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 whitespace-nowrap"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
