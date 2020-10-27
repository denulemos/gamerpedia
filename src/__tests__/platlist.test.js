
import React from 'react';
import renderer from 'react-test-renderer';
import PlatList from '../views/platList/index';


it('PlatList funciona Ok', () => {
  const rendered = renderer.create(<PlatList />).toJSON();
  expect(rendered).toBeTruthy();
});
