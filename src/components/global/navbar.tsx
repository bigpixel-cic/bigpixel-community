import { Dialog } from '@base-ui/react/dialog';
import Link from 'next/link';
import Image from 'next/image';
import { BarsIcon, XMarkIcon } from '@/components/icons';

export default function Navbar() {
  const navList = [
    {
      label: 'About Big Pixel®',
      slug: '/about',
    },
    {
      label: 'Projects',
      slug: '/projects',
    },
    {
      label: 'Services',
      slug: '/services',
    },
    {
      label: 'News',
      slug: '/news',
    },
  ];

  return (
    <header className="fixed top-2 lg:top-4 xl:top-9 w-full">
      <div className="w-full max-w-7xl px-2 lg:px-4 xl:mx-auto">
        <Dialog.Root>
          <nav
            aria-label="Global"
            className="w-full p-2 lg:p-4 bg-white/60 dark:bg-black/60 rounded-2xl lg:rounded-full outline-1 outline-metal-100 dark:outline-metal-950 backdrop-blur-sm inline-flex justify-between items-center overflow-hidden shadow-lg shadow-metal-300/30 dark:shadow-black/60"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1 p-1">
                <div className="size-8 lg:size-12 relative">
                  <span className="sr-only">Big Pixel</span>
                  <Image
                    src="/brand/nav-icon.png"
                    width={40}
                    height={40}
                    alt=""
                    className="size-8 lg:size-12"
                  />
                </div>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <Dialog.Trigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-metal-700 dark:text-metal-400 cursor-pointer">
                <span className="sr-only">Open main menu</span>
                <BarsIcon className="size-6" />
              </Dialog.Trigger>
            </div>
            <div className="hidden lg:flex gap-x-12">
              {navList.map((nav) => (
                <Link
                  key={nav.label}
                  href={nav.slug || '#'}
                  scroll={false}
                  className="font-semibold tracking-tight px-6 py-3 rounded-full bg-transparent hover:bg-metal-100 dark:hover:bg-black transition-colors ease-in-out duration-300"
                >
                  {nav.label}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/contact"
                scroll={false}
                className="font-semibold text-purple-800 dark:text-purple-400 tracking-tight px-6 py-3 rounded-full bg-transparent hover:bg-purple-100 dark:hover:bg-black transition-colors ease-in-out duration-300"
              >
                Contact me
              </Link>
            </div>
          </nav>
          <Dialog.Portal className="lg:hidden">
            <Dialog.Backdrop className="fixed inset-0 bg-white dark:bg-black-900 p-6 supports-[-webkit-touch-callout:none]:absolute" />
            <Dialog.Popup className="fixed inset-0 p-6">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <div className="relative">
                    <span className="sr-only">Big Pixel</span>
                    <Image
                      src="/brand/nav-icon.png"
                      width={40}
                      height={40}
                      alt=""
                      className="size-8"
                    />
                  </div>
                </Link>
                <Dialog.Close className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-metal-700 dark:text-metal-400 cursor-pointer">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="size-6" />
                </Dialog.Close>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-metal-100 dark:divide-metal-700">
                  <div className="space-y-2 py-6">
                    {navList.map((nav) => (
                      <Link
                        key={nav.label}
                        href={nav.slug || '#'}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                      >
                        {nav.label}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-purple-800 dark:text-purple-400"
                    >
                      Contact me
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
