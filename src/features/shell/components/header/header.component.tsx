import { Sidebar, useSidebar } from '../../../../common/components';
import { Logo } from '../../../../common/components/logo';
import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { MdClose, MdMenu } from 'react-icons/md';
import { IconButton } from '../../../icon';

type SidebarProps = {
  isOpen: boolean;
};

const ButtonContainer = styled.div<SidebarProps>(({ isOpen }) => ({
  top: '20px',
  left: '20px',
  position: 'fixed',
  transition: '0.44s',
  zIndex: '10',
  paddingLeft: isOpen ? '300px' : '0',

  '@media screen and (max-width: 370px)': {
    paddingLeft: '0px',
  },
}));

const HeaderContainer = styled.div<SidebarProps>({
  padding: '20px',
  // transition: '0.45s',
});

export const Header = (): JSX.Element => {
  const icon = {
    open: MdMenu,
    closed: MdClose,
  };

  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const handleToggle = useCallback(() => {
    isOpen ? closeSidebar() : openSidebar();
  }, [isOpen]);

  return (
    <HeaderContainer isOpen={isOpen}>
      <ButtonContainer isOpen={isOpen}>
        <IconButton
          icon={isOpen ? icon.closed : icon.open}
          onClick={handleToggle}
        />
      </ButtonContainer>
      <Logo />
      <Sidebar isOpen={isOpen} />
    </HeaderContainer>
  );
};
