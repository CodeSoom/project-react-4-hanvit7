import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders title', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('Daily Report');
  });

  it('renders today Goal', () => {
    const { getByLabelText } = render(<HomePage />);

    expect(getByLabelText('Today Goal')).not.toBeNull();
  });

  it('renders review', () => {
    const { getByLabelText } = render(<HomePage />);

    expect(getByLabelText('Today Review')).not.toBeNull();
  });
});
