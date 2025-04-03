import { ReactNode } from 'react';
import AppHeader from './AppHeader';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;