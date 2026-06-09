import type { ReactNode } from 'react';
import { Footer } from '../sections/Footer';
import { Navbar } from '../sections/Navbar';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);
