import { Icon, IconProps } from '../icon.component';
import React from 'react';
import styled from '@emotion/styled';

interface IconLinkProps extends IconProps {
  href: string;
}

const IconLinkContainer = styled.div({
  textDecoration: 'none',
  fontSize: '25px',
  color: 'white',
  display: 'block',
  transition: '0.3s',

  ':hover': {
    opacity: '0.5',
  },
});

const IconLink = (props: IconLinkProps): JSX.Element => {
  const { icon, color, href } = props;
  return (
    <IconLinkContainer>
      <a href={href}>
        <Icon icon={icon} size={36} color={color}></Icon>
      </a>
    </IconLinkContainer>
  );
};

export default IconLink;
