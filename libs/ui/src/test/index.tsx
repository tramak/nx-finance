import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
}

if (typeof window !== 'undefined') {
  window.ResizeObserver = ResizeObserver;
}

export const wrapperMemoryRouter = (element: JSX.Element | JSX.Element[]) => {
  return (
    <MemoryRouter>
      {element}
    </MemoryRouter>
  );
};

export const setup = (jsx: ReactElement, withMemoryRouter = false) => {
  return {
    user: userEvent.setup(),
    ...render(withMemoryRouter ? wrapperMemoryRouter(jsx) : jsx),
  };
};
