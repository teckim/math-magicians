import React from 'react';
import renderer from 'react-test-renderer';
import HomeView from '../views/HomeView';

describe('home view', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<HomeView />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
