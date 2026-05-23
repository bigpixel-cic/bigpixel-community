import {
  BullseyeIcon,
  RocketIcon,
  LighthouseIcon,
  DateIcon,
  BellIcon,
  AlertIcon,
  LightbulbIcon,
} from '@/components/icons';
import {
  RedCallout,
  OrangeCallout,
  YellowCallout,
  GreenCallout,
  BlueCallout,
  IndigoCallout,
  PurpleCallout,
  VioletCallout,
  MetalCallout,
} from './callout-colours';

export default function Callout({
  text,
  bgColour,
  icon,
}: {
  text: string;
  bgColour: string;
  icon?: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    bullseye: <BullseyeIcon className="size-12" />,
    rocket: <RocketIcon className="size-12" />,
    lighthouse: <LighthouseIcon className="size-12" />,
    date: <DateIcon className="size-12" />,
    bell: <BellIcon className="size-12" />,
    alert: <AlertIcon className="size-12" />,
    lightbulb: <LightbulbIcon className="size-12" />,
  };

  const selectedIcon = icon ? iconMap[icon] : null;

  const calloutProps = { icon: selectedIcon, text };

  switch (bgColour) {
    case 'red':
      return (
        <RedCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </RedCallout>
      );
    case 'orange':
      return (
        <OrangeCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </OrangeCallout>
      );
    case 'yellow':
      return (
        <YellowCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </YellowCallout>
      );
    case 'green':
      return (
        <GreenCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </GreenCallout>
      );
    case 'blue':
      return (
        <BlueCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </BlueCallout>
      );
    case 'indigo':
      return (
        <IndigoCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </IndigoCallout>
      );
    case 'purple':
      return (
        <PurpleCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </PurpleCallout>
      );
    case 'violet':
      return (
        <VioletCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </VioletCallout>
      );
    default:
      return (
        <MetalCallout {...calloutProps}>
          {selectedIcon}
          {text}
        </MetalCallout>
      );
  }
}
