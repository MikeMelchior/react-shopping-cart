import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserEvent from '@testing-library/user-event';
import App from './App';



describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/shop/i);
  });
});