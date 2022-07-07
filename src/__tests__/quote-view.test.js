import React from 'react';
import renderer from 'react-test-renderer';
import QuoteView from '../views/QuotesView';

describe('testing quote view', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<QuoteView />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
