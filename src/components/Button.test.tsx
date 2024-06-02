import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from './Button';

const renderButton = (isLoading: boolean) => {
  return render(<Button title={'Entrar'} isLoading={isLoading} />);
};

describe('Button', () => {
  it('should render button correctly', () => {
    const tree = renderButton(false).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to render a loading indicator if isLoading is true', () => {
    renderButton(true);

    const loadingIndicatorElement = screen.getByTestId('loading-indicator');

    expect(loadingIndicatorElement).toBeDefined();
  });
});
