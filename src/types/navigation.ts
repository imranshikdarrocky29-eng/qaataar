export type RoutePath =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'services' }
  | { page: 'service-detail'; slug: string }
  | { page: 'residential' }
  | { page: 'commercial' }
  | { page: 'areas' }
  | { page: 'blog'; slug?: string }
  | { page: 'contact'; preselectedService?: string };

export function routeToHash(route: RoutePath): string {
  switch (route.page) {
    case 'home':
      return '#/';
    case 'about':
      return '#/about';
    case 'services':
      return '#/services';
    case 'service-detail':
      return `#/services/${encodeURIComponent(route.slug)}`;
    case 'residential':
      return '#/residential';
    case 'commercial':
      return '#/commercial';
    case 'areas':
      return '#/areas';
    case 'blog':
      return route.slug ? `#/blog/${encodeURIComponent(route.slug)}` : '#/blog';
    case 'contact':
      return route.preselectedService
        ? `#/contact?service=${encodeURIComponent(route.preselectedService)}`
        : '#/contact';
  }
}

export function parseHashToRoute(hash: string): RoutePath {
  const clean = hash.replace(/^#/, '') || '/';
  const [pathPart, queryPart] = clean.split('?');
  const segments = pathPart.split('/').filter(Boolean);

  if (segments.length === 0) return { page: 'home' };
  const head = segments[0].toLowerCase();

  if (head === 'about') return { page: 'about' };
  if (head === 'services') {
    if (segments[1]) {
      return { page: 'service-detail', slug: decodeURIComponent(segments[1]) };
    }
    return { page: 'services' };
  }
  if (head === 'residential') return { page: 'residential' };
  if (head === 'commercial') return { page: 'commercial' };
  if (head === 'areas') return { page: 'areas' };
  if (head === 'blog') {
    return { page: 'blog', slug: segments[1] ? decodeURIComponent(segments[1]) : undefined };
  }
  if (head === 'contact') {
    const params = new URLSearchParams(queryPart || '');
    const service = params.get('service') || undefined;
    return { page: 'contact', preselectedService: service };
  }
  return { page: 'home' };
}
