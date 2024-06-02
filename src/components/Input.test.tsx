import { render } from '@testing-library/react-native';
import { Input } from './Input';

describe('Input component', () => {
  it('should be able to render component correctly', () => {
    const tree = render(<Input />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
