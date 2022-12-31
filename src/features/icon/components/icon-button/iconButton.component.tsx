import React from 'react';
import { IconType } from 'react-icons';
import styled from '@emotion/styled';
import { Icon } from '../icon.component';

const CircleButton = styled.button((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  width: '50px',
  backgroundColor: '#a9a9a9',
  borderRadius: '50%',
  border: 'none',
  transition: 'all 0.25s ease-in-out',

  ':hover': {
    transition: 'all 0.25s ease-in-out',
    cursor: 'pointer',
    backgroundColor: props.theme.colors.secondary,
    boxShadow:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
}));

interface IconButtonProps {
  icon: IconType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = ({ icon, onClick }: IconButtonProps): JSX.Element => (
  <CircleButton onClick={onClick}>
    <Icon icon={icon} />
  </CircleButton>
);
