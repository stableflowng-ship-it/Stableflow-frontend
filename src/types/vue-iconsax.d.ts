declare module 'vue-iconsax/dist' {
  import { FC } from 'react';

  interface VsxIconProps {
    icon: string;
    width?: number;
    height?: number;
    className?: string;
  }

  export const VsxIcon: FC<VsxIconProps>;
} 