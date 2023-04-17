import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App';
import { ImageGrid } from './components/ImageGrid/ImageGrid';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

test('renders loading state when homepage is opened', () => {
  render(<App />);
  const welcome = screen.getByText('Loading...');
  expect(welcome).toBeInTheDocument();
});

describe('HomePage', () => {
  it('should render logo', () => {
    render(<App />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });
});

describe('ImageGrid', () => {
  it('should render 9 images after fetching data', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ImageGrid />
      </QueryClientProvider>
    );

    // Check that the loading spinner is present while data is being fetched
    const loadingSpinner = screen.getByText('Loading...');
    expect(loadingSpinner).toBeInTheDocument();

    await waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(9);
    });
  });
});

describe('ImageGrid', () => {
  it('should populate Info-Panel when image is clicked', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ImageGrid />
      </QueryClientProvider>
    );

    // click on Blue cocktail image

    await waitFor(() => {
      const image = screen.getByAltText('Blue cocktail');
      expect(image).toBeInTheDocument();
      fireEvent.click(image);
      // check that the Info-Panel is populated with the Blue cocktail text
      expect(screen.getByText('Blue cocktail')).toBeInTheDocument();
    });
  });
});
