import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RoutePath, routeToPath } from '../types/navigation';
import { BLOG_POSTS } from '../data/plumbingData';
import { ResilientImage } from '../components/ResilientImage';
import { CallToActionBand } from '../components/CallToActionBand';

interface BlogPageProps {
  slug?: string;
  onNavigate: (route: RoutePath) => void;
}

export function BlogPage({ slug, onNavigate }: BlogPageProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  const activePost = slug ? BLOG_POSTS.find((p) => p.slug === slug) : undefined;

  if (activePost) {
    return (
      <div>
        <article className="bg-white py-12 lg:py-20 border-b border-slate-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
            <a
              href={routeToPath({ page: 'blog' })}
              onClick={(e) => handleNav(e, { page: 'blog' })}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Plumbing Guides</span>
            </a>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
                  <ResilientImage
                    src={activePost.image}
                    alt={activePost.imageAlt}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackLabel={activePost.title}
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-amber-700">{activePost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePost.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePost.readTime}</span>
                </div>

                <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#041E42] leading-tight text-balance">
                  {activePost.title}
                </h1>

                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  {activePost.excerpt}
                </p>

                <div className="mt-10 pt-8 border-t border-slate-200 space-y-8">
                  {activePost.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#041E42]">
                        {section.heading}
                      </h2>
                      <p className="mt-3 text-base text-slate-700 leading-relaxed">
                        {section.body}
                      </p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <CallToActionBand
          title="Need Professional Inspection for Your Property?"
          description="Our Doha plumbing team is available for leak diagnostics, water tank cleaning, heater servicing, and drain clearing."
          onNavigate={onNavigate}
        />
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[#041E42] text-white border-b border-[#0E3366] py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#F5B700]">Plumbing Advice &amp; Guides</p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Fix Hub Qatar Maintenance Blog
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Practical maintenance guides written by our Doha plumbing engineers for homeowners, tenants, and commercial facility teams across Qatar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#041E42]/40 transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                    <ResilientImage
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                      fallbackLabel={post.category}
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-amber-700">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#041E42]">
                      <a
                        href={routeToPath({ page: 'blog', slug: post.slug })}
                        onClick={(e) =>
                          handleNav(e, { page: 'blog', slug: post.slug })
                        }
                        className="hover:text-amber-700 transition-colors"
                      >
                        {post.title}
                      </a>
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100">
                  <a
                    href={routeToPath({ page: 'blog', slug: post.slug })}
                    onClick={(e) =>
                      handleNav(e, { page: 'blog', slug: post.slug })
                    }
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#041E42] hover:text-amber-700"
                  >
                    <span>Read full guide</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand onNavigate={onNavigate} />
    </div>
  );
}
