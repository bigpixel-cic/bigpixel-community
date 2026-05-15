import ServiceList from '@/components/services/service-list';

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12">
      <article className="mx-auto prose md:prose-lg 2xl:prose-xl prose-headings:font-headline prose-h1:text-metal-950 prose-h1:font-black prose-metal dark:prose-invert dark:prose-h1:text-metal-50">
        <h1>Our Services</h1>
        <h2>
          We help charities, non-profits, and social enterprises get the digital tools they actually
          need.
        </h2>
        <p>
          Most organisations we speak to already know something isn&apos;t working. Maybe the
          website is outdated. Maybe the brand looks fine in isolation but falls apart when you put
          everything side by side. Maybe the team is spending time on things a better system would
          just handle. Whatever the issue, we can help.
        </p>
        <p>
          We work specifically with charities, non-profits, and social enterprises. Not because
          it&apos;s a niche, but because it&apos;s where we want to be. Twenty years of design
          experience, combined with time spent working inside a charity, means we understand how
          these organisations actually operate - funding cycles, trustee sign-off, stretched teams,
          and the constant tension between ambition and budget.
        </p>
        <h2>What we can help with</h2>
        <div className="not-prose mt-8 flex flex-col gap-4 lg:gap-8">
          <ServiceList />
        </div>
      </article>
    </div>
  );
}
