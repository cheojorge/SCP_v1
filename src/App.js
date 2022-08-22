// routes
import Router from './routes';
// components
import ScrollToTop from './components/ScrollToTop';
// theme
import ThemeProvider from './theme';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { AuthProvider } from './hooks/useAuth';


// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}
