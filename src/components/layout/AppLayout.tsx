import styled from 'styled-components';
import AppHeader from './AppHeader';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <AppHeader />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};

export default AppLayout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;