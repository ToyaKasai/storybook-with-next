import type { ReactNode } from 'react';

import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

type Props = {
  children: ReactNode;
};

export const BasicLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
