import { FC } from 'react';
import Play from './Play';

export type AppIconType = 'Play';

export interface AppIconInterface {
  name: AppIconType;
  className?: string;
}

const Components = {
  Play,
};

const AppIcon: FC<AppIconInterface> = ({ name, className = '' }) => {
  if (typeof Components[name] !== undefined) {
    const Component = Components[name];
    return <Component className={className} />;
  }

  return <></>;
};

export default AppIcon;
