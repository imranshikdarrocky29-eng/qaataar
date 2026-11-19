import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { RoutePath, routeToPath } from '../types/navigation';
import { BRAND_LOGO, COMPANY_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { OUR_SERVICES_MENU } from '../data/tradeServicesData';

interface HeaderProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
}

const NAV_ITEMS: { label: string; route: RoutePath; matchPages: RoutePath['page'][] }[] = [
  { label: 'Residential', route: { page: 'residential' }, matchPages: ['residential'] },
  { label: 'Commercial', route: { page: 'commercial' }, matchPages: ['commercial'] },
  { label: 'Areas', route: { page: 'areas' }, matchPages: ['areas'] },
  { label: 'Blog', route: { page: 'blog' }, matchPages: ['blog'] },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    currentRoute.page === 'services' ||
    currentRoute.page === 'plumbing-service' ||
    currentRoute.page === 'service-detail' ||
    currentRoute.page === 'trade-service';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: RoutePath
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#041E42]/95 backdrop-blur-sm border-b border-[#0E3366]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Logo + Single-line Wordmark */}
        <a
          href={routeToPath({ page: 'home' })}
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

        {/* Zone 2: 5 concise single-line navigation items */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200"
        >
          {/* Our Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="menu"
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B700] ${
                isServicesActive
                  ? 'border-[#F5B700] text-white font-semibold'
                  : 'border-transparent hover:text-white hover:border-[#F5B700]/50'
              }`}
            >
              <span>Our Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#F5B700]' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div
                  role="menu"
                  aria-label="Our Services list"
                  className="bg-[#041E42] border border-[#163C70] rounded-xl shadow-xl py-2"
                >
                  {OUR_SERVICES_MENU.map((serviceItem) => {
                    const isCurrent =
                      (serviceItem.route.page === 'plumbing-service' &&
                        (currentRoute.page === 'plumbing-service' ||
                          currentRoute.page === 'services' ||
                          currentRoute.page === 'service-detail')) ||
                      (currentRoute.page === 'trade-service' &&
                        currentRoute.slug === serviceItem.slug);

                    return (
                      <a
                        key={serviceItem.slug}
                        role="menuitem"
                        href={routeToPath(serviceItem.route)}
                        onClick={(e) => handleLinkClick(e, serviceItem.route)}
                        className={`block px-4 py-2.5 text-sm whitespace-nowrap transition-colors ${
                          isCurrent
                            ? 'bg-[#0A2E5C] text-[#F5B700] font-semibold'
                            : 'text-slate-200 hover:bg-[#0A2E5C] hover:text-[#F5B700]'
                        }`}
                      >
                        {serviceItem.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = item.matchPages.includes(currentRoute.page);
            return (
              <a
                key={item.label}
                href={routeToPath(item.route)}
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
            href={routeToPath({ page: 'contact' })}
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
        <div className="md:hidden border-t border-[#0E3366] bg-[#041E42] px-4 py-4 max-h-[82vh] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <a
              href={routeToPath({ page: 'home' })}
              onClick={(e) => handleLinkClick(e, { page: 'home' })}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentRoute.page === 'home'
                  ? 'bg-[#0A2E5C] text-[#F5B700] font-semibold'
                  : 'text-slate-200 hover:bg-[#0A2E5C]/70 hover:text-white'
              }`}
            >
              Home
            </a>

            <a
              href={routeToPath({ page: 'about' })}
              onClick={(e) => handleLinkClick(e, { page: 'about' })}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentRoute.page === 'about'
                  ? 'bg-[#0A2E5C] text-[#F5B700] font-semibold'
                  : 'text-slate-200 hover:bg-[#0A2E5C]/70 hover:text-white'
              }`}
            >
              About Us
            </a>

            {/* Mobile Our Services Expandable Dropdown */}
            <div>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  isServicesActive
                    ? 'bg-[#0A2E5C] text-[#F5B700] font-semibold'
                    : 'text-slate-200 hover:bg-[#0A2E5C]/70 hover:text-white'
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 ml-3 pl-3 border-l border-[#163C70] flex flex-col gap-1">
                  {OUR_SERVICES_MENU.map((serviceItem) => {
                    const isCurrent =
                      (serviceItem.route.page === 'plumbing-service' &&
                        (currentRoute.page === 'plumbing-service' ||
                          currentRoute.page === 'services' ||
                          currentRoute.page === 'service-detail')) ||
                      (currentRoute.page === 'trade-service' &&
                        currentRoute.slug === serviceItem.slug);

                    return (
                      <a
                        key={serviceItem.slug}
                        href={routeToPath(serviceItem.route)}
                        onClick={(e) => handleLinkClick(e, serviceItem.route)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          isCurrent
                            ? 'bg-[#0A2E5C] text-[#F5B700] font-semibold'
                            : 'text-slate-300 hover:bg-[#0A2E5C]/70 hover:text-white'
                        }`}
                      >
                        {serviceItem.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {[
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
                  href={routeToPath(item.route)}
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
