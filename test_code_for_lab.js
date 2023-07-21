import { render, screen } from '@testing-library/react';
import App from './App';

//I will write a test code that would relate a to our team's current project feature.

test('for deletedpost, display error message', () => {
  render(<App />);
  const errorMessage = screen.getByText('This post has been deleted!');
  expect (errorMessage).toBeInTheDocument();
})


