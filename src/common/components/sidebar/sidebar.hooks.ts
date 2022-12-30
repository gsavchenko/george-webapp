import { useCallback, useState } from 'react';

interface Sidebar {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useSidebar = (): Sidebar => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, openSidebar, closeSidebar };
};
