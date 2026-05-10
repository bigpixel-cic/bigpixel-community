const bands = [
  {
    income: 'Under £5k',
    contribution: 'Free, or a small fixed fee',
    note: null,
  },
  {
    income: '£5k - £100k',
    contribution: '~25% of full rate',
    note: null,
  },
  {
    income: '£100k - £500k',
    contribution: '~45% of full rate',
    note: null,
  },
  {
    income: '£500k - £1m',
    contribution: '~65% of full rate',
    note: null,
  },
  {
    income: '£1m - £2m',
    contribution: '~80% of full rate',
    note: null,
  },
  {
    income: 'Over £2m',
    contribution: 'Full rate',
    note: null,
  },
];

export default function PricingTable() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-metal-200">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-metal-500 text-white">
            <th scope="col" className="px-6 py-4 font-semibold text-base tracking-tight w-1/2">
              Annual income
            </th>
            <th scope="col" className="px-6 py-4 font-semibold text-base tracking-tight w-1/2">
              Contribution
            </th>
          </tr>
        </thead>
        <tbody>
          {bands.map((band, index) => (
            <tr key={band.income} className={index % 2 === 0 ? 'bg-white' : 'bg-metal-100'}>
              <td className="px-6 py-4 font-medium text-gray-900 border-b border-metal-100">
                {band.income}
              </td>
              <td className="px-6 py-4 text-gray-700 border-b border-metal-100">
                {band.contribution}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
