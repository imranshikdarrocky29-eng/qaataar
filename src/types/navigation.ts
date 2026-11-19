export type RoutePath =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'services' }
  | { page: 'plumbing-service' }
  | { page: 'service-detail'; slug: string }
  | { page: 'trade-service'; slug: string }
  | { page: 'residential' }
  | { page: 'commercial' }
  | { page: 'areas' }
  | { page: 'blog'; slug?: string }
  | { page: 'contact'; preselectedService?: string };

export const TRADE_SERVICE_SLUGS = [
  'electric-service',
  'satellite-installation-and-repair',
  'painting-service',
  'carpentry-service',
  'tv-installation',
  'handyman-service',
  'ac-service-and-maintenance',
  'welding-service',
] as const;

export function routeToPath(route: RoutePath): string {
  switch (route.page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'plumbing-service':
      return '/plumbing-service';
    case 'service-detail':
      return `/services/${encodeURIComponent(route.slug)}`;
    case 'trade-service':
      return `/${encodeURIComponent(route.slug)}`;
    case 'residential':
      return '/residential';
    case 'commercial':
      return '/commercial';
    case 'areas':
      return '/areas';
    case 'blog':
      return route.slug ? `/blog/${encodeURIComponent(route.slug)}` : '/blog';
    case 'contact':
      return route.preselectedService
        ? `/contact?service=${encodeURIComponent(route.preselectedService)}`
        : '/contact';
  }
}

export function parseLocationToRoute(pathname: string, search = ''): RoutePath {
  const clean = pathname || '/';
  const segments = clean.split('/').filter(Boolean);

  if (segments.length === 0) return { page: 'home' };
  const head = decodeURIComponent(segments[0]).toLowerCase();

  if (head === 'about') return { page: 'about' };
  if (head === 'plumbing-service') return { page: 'plumbing-service' };
  if (head === 'services') {
    if (segments[1]) {
      return { page: 'service-detail', slug: decodeURIComponent(segments[1]) };
    }
    return { page: 'services' };
  }
  if ((TRADE_SERVICE_SLUGS as readonly string[]).includes(head)) {
    return { page: 'trade-service', slug: head };
  }
  if (head === 'our-services' && segments[1]) {
    return { page: 'trade-service', slug: decodeURIComponent(segments[1]).toLowerCase() };
  }
  if (head === 'residential') return { page: 'residential' };
  if (head === 'commercial') return { page: 'commercial' };
  if (head === 'areas') return { page: 'areas' };
  if (head === 'blog') {
    return { page: 'blog', slug: segments[1] ? decodeURIComponent(segments[1]) : undefined };
  }
  if (head === 'contact') {
    const params = new URLSearchParams(search || '');
    const service = params.get('service') || undefined;
    return { page: 'contact', preselectedService: service };
  }
  return { page: 'home' };
}
