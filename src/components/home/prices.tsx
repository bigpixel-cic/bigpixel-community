import PriceChart from '@/components/home/price-chart';
import PricingTable from '@/components/home/price-table';

export default function Prices() {
  return (
    <div className="block py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16">
          <h2 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl">
            How pricing works
          </h2>
          <PriceChart />
          <p className="text-xl md:text-2xl leading-normal">
            Big Pixel&apos;s pricing is built around what your organisation actually earns. The more
            you turn over annually, the closer to full rate you pay. It means the work stays
            financially viable, and accessible to the organisations that need it most.
          </p>
          <PricingTable />
          <p className="text-xl md:text-2xl leading-normal">
            Exact fees depend on the scope of the project. But your organisation&apos;s annual
            income is the starting point, rather than your budget or what you think is a reasonable
            thing to ask of someone.
          </p>
        </div>
      </div>
    </div>
  );
}
