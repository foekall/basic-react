import { render, screen } from "@testing-library/react";
import Header from './Header';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('header should render correctly', () => {
    const wrapper = render(<Header/>)
    expect(wrapper).toBeTruthy();
})

test('on initial rander, the search input show be exist', () => {
    render(<Header/>)
    expect(screen.getByRole('textbox')).toBeVisible();
})

