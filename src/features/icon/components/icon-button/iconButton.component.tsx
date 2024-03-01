import React, { useCallback } from 'react';
import { IconType } from 'react-icons';
import styled from '@emotion/styled';
import { Icon } from '../icon.component';
import { useScrollDirection, ScrollDirection } from '../../../../utils';

interface CircleButtonProps {
  isScrollingDown: boolean;
}

const CircleButton = styled.button<CircleButtonProps>(
  ({ isScrollingDown, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: '50%',
    border: '2px solid white', // Adjusted line: thick black outline
    transition: 'all 0.25s ease-in-out',
    transform: isScrollingDown ? 'scale(0)' : 'scale(1)',

    ':hover': {
      transition: 'all 0.25s ease-in-out',
      cursor: 'pointer',
      backgroundColor: theme.colors.secondary,
      boxShadow:
        '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    },
  })
);

interface IconButtonProps {
  icon: IconType;
  hideOnScroll?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = ({
  icon,
  hideOnScroll = false,
  onClick,
}: IconButtonProps): JSX.Element => {
  const scrollDirection = useScrollDirection();

  const isScrollingDown = useCallback(() => {
    if (!hideOnScroll) return false;

    return scrollDirection === ScrollDirection.DOWN;
  }, [scrollDirection]);

  return (
    <CircleButton isScrollingDown={isScrollingDown()} onClick={onClick}>
      <Icon icon={icon} />
    </CircleButton>
  );
};
