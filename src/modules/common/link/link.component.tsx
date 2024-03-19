import styled from '@emotion/styled';
import { Link as RadixLink } from '@radix-ui/themes';
import { ComponentProps, ReactNode } from 'react';

type LinkProps = Pick<ComponentProps<typeof RadixLink>, 'href'> & {
  children: ReactNode;
};

const HighlightedLink = styled(RadixLink)(({ theme }) => ({
  color: theme.colors.secondary,

  ':hover': {
    color: theme.colors.accent,
    opacity: 0.6,
  },
}));

export const Link = ({ href, children }: LinkProps): JSX.Element => {
  return <HighlightedLink href={href}>{children}</HighlightedLink>;
};
