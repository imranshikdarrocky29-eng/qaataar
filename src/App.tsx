/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  RoutePath,
  parseHashToRoute,
  routeToHash,
} from './types/navigation';
import { PLUMBING_SERVICES, BLOG_POSTS } from './data/plumbingData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

function getPageSeo(route: RoutePath): { title: string; description: string } {
  switch (route.page) {
    case 'home':
      return {
        title: 'Fix Hub Qatar – Professional Plumbing Services in Doha & Qatar',
        description:
          'Trusted plumbing services in Qatar. Fix Hub Qatar delivers 24/7 emergency plumbing, water leak detection, drain cleaning, water heater & tank care across Doha.',
      };
    case 'about':
      return {
        title: 'About Us – Fix Hub Qatar | Plumbing Specialists in Doha',
        description:
          'Learn about Fix Hub Qatar, our experienced plumbing technicians, pressure-tested materials, and commitment to reliable residential and commercial service.',
      };
    case 'services':
      return {
        title: 'Our Plumbing Services in Qatar – Fix Hub Qatar',
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
    case 'residential':
      return {
        title: 'Residential Plumbing Qatar – Villas & Apartments | Fix Hub Qatar',
        description:
          'Dependable residential plumbing services in Doha, Lusail, The Pearl, and Al Waab for leaks, bathrooms, kitchens, water heaters, and rooftop tanks.',
      };
    case 'commercial':
      return {
        title: 'Commercial Plumbing Qatar – Offices & Facilities | Fix Hub Qatar',
        description:
          'Commercial plumbing maintenance, booster pump servicing, hydro-jet drain clearing, and Annual Maintenance Contracts across Doha and Qatar.',
      };
    case 'areas':
      return {
        title: 'Plumbing Service Areas in Doha & Qatar – Fix Hub Qatar',
        description:
          'Check plumbing dispatch coverage across West Bay, The Pearl, Lusail, Al Sadd, Al Waab, Al Wakrah, Al Rayyan, Al Khor, and Industrial Area.',
      };
    case 'blog': {
      const post = route.slug
        ? BLOG_POSTS.find((p) => p.slug === route.slug)
        : undefined;
      return {
        title: post
          ? `${post.title} | Fix Hub Qatar Blog`
          : 'Plumbing Guides & Tips for Qatar Homes – Fix Hub Qatar Blog',
        description:
          post?.excerpt ||
          'Practical plumbing maintenance guides for Qatar homes and commercial buildings covering water tanks, leak detection, heaters, and drains.',
      };
    }
    case 'contact':
      return {
        title: 'Contact Fix Hub Qatar – Book a Plumber in Doha (24/7)',
        description:
          'Call +974 3103 6428, message on WhatsApp, or book an online plumbing inspection or quotation with Fix Hub Qatar.',
      };
  }
}

export default function App() {
  const [route, setRoute] = useState<RoutePath>(() =>
    parseHashToRoute(window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashToRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
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
    const nextHash = routeToHash(nextRoute);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#041E42]">
      <Header currentRoute={route} onNavigate={handleNavigate} />

      <main className="flex-1">
        {route.page === 'home' && <HomePage onNavigate={handleNavigate} />}
        {route.page === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {route.page === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {route.page === 'service-detail' && (
          <ServiceDetailPage slug={route.slug} onNavigate={handleNavigate} />
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
    </div>
  );
}
