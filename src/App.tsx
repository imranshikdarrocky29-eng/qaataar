/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  RoutePath,
  parseLocationToRoute,
  routeToPath,
} from './types/navigation';
import { PLUMBING_SERVICES, BLOG_POSTS } from './data/plumbingData';
import { TRADE_SERVICES } from './data/tradeServicesData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TradeServicePage } from './pages/TradeServicePage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

function getPageSeo(route: RoutePath): { title: string; description: string } {
  switch (route.page) {
    case 'home':
      return {
        title: 'Fix Hub Qatar – Reliable Plumbing, Electric & Home Maintenance in Qatar',
        description:
          'Reliable plumbing, electric, AC service, satellite repair, painting, carpentry, TV installation, handyman, and welding solutions across Doha and Qatar.',
      };
    case 'about':
      return {
        title: 'About Us – Fix Hub Qatar | Home & Commercial Maintenance in Doha',
        description:
          'Learn about Fix Hub Qatar, our experienced technicians, quality materials, and commitment to reliable residential and commercial maintenance across Qatar.',
      };
    case 'services':
    case 'plumbing-service':
      return {
        title: 'Plumbing Service in Qatar – Fix Hub Qatar',
        description:
          'Explore 13 specialized plumbing services in Qatar including emergency repairs, leak detection, pipe replacement, drain cleaning, bathrooms, kitchens, and water tanks.',
      };
    case 'service-detail': {
      const svc = PLUMBING_SERVICES.find((s) => s.slug === route.slug);
      return {
        title: svc
          ? `${svc.title} in Qatar – Fix Hub Qatar`
          : 'Plumbing Service Details – Fix Hub Qatar',
        description:
          svc?.summary ||
          'Professional plumbing repair and installation details from Fix Hub Qatar.',
      };
    }
    case 'trade-service': {
      const svc = TRADE_SERVICES.find((s) => s.slug === route.slug);
      return {
        title: svc
          ? `${svc.label} in Qatar – Fix Hub Qatar`
          : 'Our Services – Fix Hub Qatar',
        description:
          svc?.summary ||
          'Reliable residential and commercial maintenance services across Doha and Qatar.',
      };
    }
    case 'residential':
      return {
        title: 'Residential Plumbing & Maintenance Qatar – Villas & Apartments | Fix Hub Qatar',
        description:
          'Dependable residential plumbing and home maintenance in Doha, Lusail, The Pearl, and Al Waab for leaks, electrical, AC, bathrooms, kitchens, and tanks.',
      };
    case 'commercial':
      return {
        title: 'Commercial Plumbing & Facility Maintenance Qatar | Fix Hub Qatar',
        description:
          'Commercial plumbing, electrical, AC maintenance, booster pump servicing, and Annual Maintenance Contracts across Doha and Qatar.',
      };
    case 'areas':
      return {
        title: 'Service Areas in Doha & Qatar – Fix Hub Qatar',
        description:
          'Check technician dispatch coverage across West Bay, The Pearl, Lusail, Al Sadd, Um Salal Muhammad, Al Khessa, Ferroj Al Sudan, Bin Omran, Al Wakrah, and more.',
      };
    case 'blog': {
      const post = route.slug
        ? BLOG_POSTS.find((p) => p.slug === route.slug)
        : undefined;
      return {
        title: post
          ? `${post.title} | Fix Hub Qatar Blog`
          : 'Maintenance Guides & Tips for Qatar Homes – Fix Hub Qatar Blog',
        description:
          post?.excerpt ||
          'Practical maintenance guides for Qatar homes and commercial buildings covering plumbing, water tanks, leak detection, heaters, and drains.',
      };
    }
    case 'contact':
      return {
        title: 'Contact Fix Hub Qatar – Book a Technician in Doha (24/7)',
        description:
          'Call +974 3103 6428, message on WhatsApp, or book an online inspection or quotation with Fix Hub Qatar.',
      };
  }
}

export default function App() {
  const [route, setRoute] = useState<RoutePath>(() =>
    parseLocationToRoute(window.location.pathname, window.location.search)
  );

  useEffect(() => {
    const onPopState = () => {
      setRoute(parseLocationToRoute(window.location.pathname, window.location.search));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const seo = getPageSeo(route);
    document.title = seo.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', seo.description);
    }
  }, [route]);

  const handleNavigate = (nextRoute: RoutePath) => {
    const nextPath = routeToPath(nextRoute);
    const currentFull = `${window.location.pathname}${window.location.search}`;
    if (currentFull !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#041E42]">
      <Header currentRoute={route} onNavigate={handleNavigate} />

      <main className="flex-1">
        {route.page === 'home' && <HomePage onNavigate={handleNavigate} />}
        {route.page === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {(route.page === 'services' || route.page === 'plumbing-service') && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {route.page === 'service-detail' && (
          <ServiceDetailPage slug={route.slug} onNavigate={handleNavigate} />
        )}
        {route.page === 'trade-service' && (
          <TradeServicePage slug={route.slug} onNavigate={handleNavigate} />
        )}
        {route.page === 'residential' && (
          <ResidentialPage onNavigate={handleNavigate} />
        )}
        {route.page === 'commercial' && (
          <CommercialPage onNavigate={handleNavigate} />
        )}
        {route.page === 'areas' && <ServiceAreasPage onNavigate={handleNavigate} />}
        {route.page === 'blog' && (
          <BlogPage slug={route.slug} onNavigate={handleNavigate} />
        )}
        {route.page === 'contact' && (
          <ContactPage preselectedService={route.preselectedService} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingContactButtons />
    </div>
  );
}
