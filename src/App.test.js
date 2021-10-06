import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/common/Header';
import Home from './layout/pages/Home';
import Pizzas from '.'

test('renders home', () => {
    render(
        <Home />
    );
    const linkElement = screen.getByText(/our story/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/pizzeria/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders pizzas', () => {
    render(
        <BrowserRouter>
            <Pizzas />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/Order from our pizzas/i);
    expect(linkElement).toBeInTheDocument();
});


