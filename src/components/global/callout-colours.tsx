export function RedCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-red-100 text-red-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function OrangeCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-orange-100 text-orange-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function YellowCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-yellow-100 text-yellow-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function GreenCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-green-100 text-green-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function BlueCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-blue-100 text-blue-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function IndigoCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-indigo-100 text-indigo-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function PurpleCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-purple-100 text-purple-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function VioletCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-violet-100 text-violet-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}

export function MetalCallout({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="w-full not-prose font-sans">
      <div
        className="space-y-4 px-6 py-4 rounded-xl shadow bg-metal-100 text-metal-800"
        role="region"
        aria-label="Callout"
      >
        {icon}
        <p className="text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}
