import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Header } from './components/Header/Header';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { ImageGrid } from './components/ImageGrid/ImageGrid';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <QueryClientProvider client={queryClient}>
          <ImageGrid />
        </QueryClientProvider>

        {/* <InfoPanel /> */}
      </main>
    </Router>
  );
};
