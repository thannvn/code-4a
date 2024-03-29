import '@translation/i18n';
import { Suspense, useEffect } from 'react';

import { ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';

import { LoadingScreen } from '@components';
import { ThemeMode } from '@constants';
import { useThemeStore } from '@services/store';

import { renderRoutes, routes } from './routes/routes';

function App() {
  const appTheme = useThemeStore((state) => state.appTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const prevTheme = appTheme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    root.classList.remove(prevTheme);
    root.classList.add(appTheme);
  }, [appTheme]);

  return (
    <ConfigProvider
      theme={{
        algorithm: appTheme === ThemeMode.Dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={renderRoutes(routes)} />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
