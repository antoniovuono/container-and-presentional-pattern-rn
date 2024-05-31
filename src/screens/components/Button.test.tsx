import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('should be able to render a button if correct title', () => {
    render(<Button title={'Entrar'} isLoading={false} />);

    const buttonElement = screen.getByText('Entrar');

    expect(buttonElement).toBeDefined();
  });

  it('should be able to render a loading indicator if isLoading is true', () => {
    render(<Button title={'Entrar'} isLoading={true} />);

    const loadingIndicatorElement = screen.getByTestId('loading-indicator');

    expect(loadingIndicatorElement).toBeDefined();
  });
});
