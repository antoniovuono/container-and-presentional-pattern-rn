import { render } from '@testing-library/react-native';
import { Profile } from '.';

describe('Profile Screen', () => {
  it('should be able to render profile screen correctly', () => {
    const tree = render(<Profile />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
