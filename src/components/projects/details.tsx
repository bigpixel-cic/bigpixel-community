import { formatDate } from 'date-fns';
import Link from 'next/link';

export default function ProjectDetails({
  client,
  date,
  category,
  caseStudy,
}: {
  client: string;
  date: string;
  category: string;
  caseStudy: string;
}) {
  return (
    <div className="-mt-12 md:-mt-24 lg:-mt-48 ml-4 md:ml-16 bg-blue-200/80 dark:bg-blue-800/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-blue-950 dark:text-blue-50 font-extrabold text-lg md:text-xl lg:text-2xl">
          Project Details
        </h2>
        <div className="border-t border-blue-600/60 dark:border-white/20">
          <dl className="divide-y divide-blue-600/30 dark:divide-white/10">
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:px-0">
              <dt className="text-sm/6 font-bold text-blue-900 dark:text-blue-50 sm:col-span-2">
                Client
              </dt>
              <dd className="mt-1 text-sm text-metal-700 dark:text-metal-200 sm:col-span-2 sm:mt-0">
                {client}
              </dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:px-0">
              <dt className="text-sm/6 font-bold text-blue-900 dark:text-blue-50 sm:col-span-2">
                Completion Date
              </dt>
              <dd className="mt-1 text-sm text-metal-700 dark:text-metal-200 sm:col-span-2 sm:mt-0">
                {formatDate(date, 'MMMM dd, yyyy')}
              </dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:px-0">
              <dt className="text-sm/6 font-bold text-blue-900 dark:text-blue-50 sm:col-span-2">
                Category
              </dt>
              <dd className="mt-1 text-sm text-metal-700 dark:text-metal-200 sm:col-span-2 sm:mt-0">
                {category}
              </dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:px-0">
              <dt className="text-sm/6 font-bold text-blue-900 dark:text-blue-50 sm:col-span-2">
                Case Study
              </dt>
              <dd className="mt-1 text-sm text-metal-700 dark:text-metal-200 sm:col-span-2 sm:mt-0">
                {caseStudy ? (
                  <Link
                    href={caseStudy}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    View Case Study
                  </Link>
                ) : (
                  'N/A'
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
