import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders App title', () => {
  render(<App />);
  const titleElement = screen.getByTitle('Sample App');
  expect(titleElement).toBeInTheDocument();
});
