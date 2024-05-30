import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from './Button';

test('renders button with correct title', () => {
  const { getByText } = render(<Button title={'Entrar'} isLoading={false} />);

  const response = getByText('Entrar');

  console.log(response.props.children);
});
