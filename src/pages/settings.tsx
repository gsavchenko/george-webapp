import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../components';
import { theme } from '../styles/theme';

const Settings = (): JSX.Element => {
  return (
    <MainLayout>
      <MainLayout.Header>Settings Page</MainLayout.Header>
      <MainLayout.Body>Settings Content</MainLayout.Body>
      <MainLayout.Footer>Settings Footer</MainLayout.Footer>
    </MainLayout>
  );
};

export default Settings;
