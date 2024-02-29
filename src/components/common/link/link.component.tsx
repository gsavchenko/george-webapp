import { Link as RadixLink } from '@radix-ui/themes';
import { ComponentProps, ReactNode } from 'react';

type LinkProps = Pick<ComponentProps<typeof RadixLink>, 'href'> & {
  children: ReactNode;
};

// TODO: fix theme injection
// const HighlightedLink = styled(RadixLink)((theme) => ({
//   color: theme.color,
// }));

export const Link = ({ href, children }: LinkProps): JSX.Element => {
  return <RadixLink href={href}>{children}</RadixLink>;
};
