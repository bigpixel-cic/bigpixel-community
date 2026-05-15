import Navbar from '@/components/global/navbar';
import Footer from '@/components/global/footer';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="min-h-full flex flex-col justify-between">
        <Navbar />
        <main className="mt-16 md:mt-24 lg:mt-36 mb-8 md:mb-12 lg:mb-18 min-h-100 flex flex-col w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
