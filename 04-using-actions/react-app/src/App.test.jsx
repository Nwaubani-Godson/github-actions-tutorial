import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('renders the heading and paragraph correctly', () => {
    render(<App />);

    expect(screen.getByText(/Welcome to My Vite + React App/i)).toBeInTheDocument();

    // Check if the <p> element is present
    expect(screen.getByText(/this is the homepage/i)).toBeInTheDocument();
  });
});
