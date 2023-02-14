import { render, screen } from '@testing-library/react';
import setApp from './App';

test('renders learn react link', () => {
  render(<setApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
