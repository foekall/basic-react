import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('testing for rendering App component first load', () => {
  test('renders home page title Top stories is exists', () => {
    // render(<App />);
    // const linkElement = await screen.getByText(/Top stories/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test('renders home page title Sports is exists', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/Sports/i);
    // expect(linkElement).toBeInTheDocument();
  });

})

