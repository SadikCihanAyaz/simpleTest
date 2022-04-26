import React from 'react';
import {render} from '@testing-library/react-native';
import Initial from './index';
describe('Initial Container', () => {
  it('Initial Screen correct message', () => {
    const {queryByText} = render(<Initial />);
    expect(queryByText('This is Initial container')).not.toBeNull();
  });
});
