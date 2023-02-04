import React from 'react';
import { Logo } from '../logo';
import { IconLink } from '../../../modules/icon';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styled from '@emotion/styled';

interface SidebarProps {
  isOpen: boolean;
}

const SideNav = styled.div<SidebarProps>(({ theme, isOpen }) => ({
  height: '100%',
  width: isOpen ? '300px' : '0px',
  position: 'fixed',
  zIndex: '2',
  top: '0',
  left: '0',
  overflowX: 'hidden',
  transition: isOpen ? '0.46s' : '0.40s',
  whiteSpace: 'nowrap',
  background: `linear-gradient(to right, ${theme.colors.secondary} 2%, ${theme.colors.secondaryCompliment} 100%)`,
}));

// TODO: extract sliver animation styles
const Sliver = styled.div<SidebarProps>(({ isOpen }) => ({
  width: '8px',
  height: '98vh',
  backgroundColor: '#dfedf0',
  top: '10px',
  right: 'calc(100%)',
  transform: `translate(${isOpen ? '300px' : '0'}, 0)`,
  transition: '0.46s',
  boxShadow: '-8px 0px 16px 0px rgba(17, 37, 60, 0.5)',
  zIndex: '2',
  position: 'fixed',
}));

const SubSliver = styled.div<SidebarProps>(({ isOpen }) => ({
  width: '16px',
  height: '96vh',
  backgroundColor: '#dfedf0',
  top: '20px',
  position: 'fixed',
  transition: isOpen ? '0.48s' : '0.46s',
  boxShadow: '-8px 0px 16px 0px rgba(17, 37, 60, 0.35)',
  right: 'calc(100%)',
  transform: `translate(${isOpen ? '300px' : '0'}, 0)`,
}));

const MenuContainer = styled.div({
  paddingTop: '30px',
});

const MenuContent = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  paddingTop: '30px',
  textAlign: 'center',
  fontWeight: '700',
}));

const MenuFooter = styled.div({
  paddingTop: '30px',
  display: 'flex',
  justifyContent: 'center',
});

const LinkTo = styled.a({
  textDecoration: 'none',
  fontSize: '25px',
  color: 'white',
  display: 'block',
  transition: '0.3s',

  ':hover': {
    opacity: '0.5',
  },
});

export const Sidebar = ({ isOpen }: SidebarProps): JSX.Element => {
  return (
    <SideNav isOpen={isOpen}>
      <Sliver isOpen={isOpen} />
      <SubSliver isOpen={isOpen} />
      <MenuContainer>
        <Logo color="white" />
        <MenuContent>
          <LinkTo href="docs/george.savchenko.resume.pdf">RESUME</LinkTo>
          <LinkTo href="/settings">SETTINGS</LinkTo>
          <MenuFooter>
            <IconLink
              href="https://github.com/gsavchenko"
              icon={AiFillGithub}
            ></IconLink>
            <IconLink
              href="https://twitter.com/SavchenCode"
              icon={AiOutlineTwitter}
            ></IconLink>
            <IconLink
              href="https://www.linkedin.com/in/georgesavchenko/"
              icon={AiFillLinkedin}
            ></IconLink>
          </MenuFooter>
        </MenuContent>
      </MenuContainer>
    </SideNav>
  );
};
