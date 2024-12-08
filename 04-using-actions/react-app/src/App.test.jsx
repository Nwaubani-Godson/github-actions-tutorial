import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the heading and paragraph correctly', () => {
    render(<App />);

    // Check if the <h1> element is rendered with the correct text
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Welcome to My Vite + React App');

    // Check if the <p> element is rendered with the correct text
    const paragraph = screen.getByText('This is the homepage');
    expect(paragraph).toBeInTheDocument();
  });
});
